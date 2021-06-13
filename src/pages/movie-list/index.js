import { useState, useContext, useRef, useCallback, useEffect } from 'react';
import { useAutoCompleteMovieList, useMovieLoadMore } from '../../api/hook/movie-list';
import { getMovieList } from '../../api/movie-list';
import { store, ACTIONS } from '../../store';
import { Gallery, AutocompleteInput, Loading } from '../../components';
import styles from './index.module.scss';

const MovieList = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [isLoadingSubmitTitle, setIsLoadingSubmitTilte] = useState(false);
  const [toggleAutoComplete, setAutoCompleteToggle] = useState(false);
  const {
    state: {
      movieList: {
        list, hasMore, title
      }
    }, dispatch } = useContext(store);

  const { list: autoCompleteList } = useAutoCompleteMovieList(search);
  const { isLoading: isLoadingMore } = useMovieLoadMore(title, page);

  const autoCompleteRef = useRef();
  //handle infinite loop
  const observer = useRef();
  const lastMovieElementRef = useCallback(node => {
    if (isLoadingMore) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(prevPage => prevPage + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [isLoadingMore, hasMore])

  const handleSubmitTitle = async () => {
    setPage(1);
    setIsLoadingSubmitTilte(true);
    setAutoCompleteToggle(false);
    try {
      const { totalResults, Search } = await getMovieList(search, 1);
      setIsLoadingSubmitTilte(false)
      dispatch({
        type: ACTIONS.setMovieList,
        payload: {
          title: search,
          list: [...new Set(JSON.parse(JSON.stringify(Search)))],
          total: totalResults,
          hasMore: Math.ceil(totalResults / 10) > page
        }
      })

    } catch (err) {
      setIsLoadingSubmitTilte(false)
    }
  }

  useEffect(() => {
    return () => {
      dispatch({
        type: ACTIONS.setMovieList,
        payload: {
          title: '',
          list: [],
          total: 0,
          hasMore: false
        }
      })
    }
  }, [dispatch])

  const { top_container, bot_container } = styles;
  return (
    <div>
      <div className={top_container}>
        <AutocompleteInput
          search={search}
          setSearch={setSearch}
          setAutoCompleteToggle={setAutoCompleteToggle}
          ref={autoCompleteRef}
          handleSubmitTitle={handleSubmitTitle}
          autoCompleteList={autoCompleteList}
          toggleAutoComplete={toggleAutoComplete}
        />
      </div>
      <div className={bot_container}>
        {isLoadingSubmitTitle ? <Loading /> :
          <Gallery
            ref={lastMovieElementRef}
            list={list}
            isLoadingSubmitTitle={isLoadingSubmitTitle}
            isLoadingMore={isLoadingMore}
          />}
      </div>
    </div>
  );
}

export default MovieList;
