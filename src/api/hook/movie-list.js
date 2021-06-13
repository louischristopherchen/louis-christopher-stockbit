import { useContext, useEffect, useState } from 'react';
import { getMovieList } from '../movie-list';
import { store, ACTIONS } from '../../store';

const useAutoCompleteMovieList = (search) => {
  const [list, setList] = useState([])
  useEffect(() => {
    const timer = setTimeout(() => {
      if (search && search.length > 2) {
        (async () => {
          try {
            const { Search } = await getMovieList(search, 1);
            setList(JSON.parse(JSON.stringify(Search)))

          } catch (err) {
            setList([])
          }
        })()
      } else {
        setList([])
      }
    }, 1000)
    return () => {
      clearTimeout(timer);
      setList([])
    }
    // eslint-disable-next-line 
  }, [search])

  return { list }
}

const useMovieLoadMore = (title, page) => {

  const {
    state: {
      movieList: {
        list,
      }
    },
    dispatch } = useContext(store);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (title) {

      (async () => {
        setIsLoading(true)
        try {
          const { totalResults, Search } = await getMovieList(title, page);
          setIsLoading(false)
          dispatch({
            type: ACTIONS.setMovieList,
            payload: {
              title,
              list: [...new Set([...list, ...JSON.parse(JSON.stringify(Search))])],
              total: totalResults,
              hasMore: Math.ceil(totalResults / 10) > page
            }
          })
        } catch (err) {
          setIsLoading(false)
          console.log('err', err.message)
        }
      })()
    } else {
      dispatch({
        type: ACTIONS.setMovieList,
        payload: {
          list: [],
          total: 0,
          hasMore: false
        }
      })
    }
    // eslint-disable-next-line
  }, [page, dispatch])

  return { isLoading }
}

export { useAutoCompleteMovieList, useMovieLoadMore };