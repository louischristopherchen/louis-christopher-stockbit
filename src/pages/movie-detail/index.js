import { useState } from 'react';
import { useMovieDetail } from '../../api/hook/movie-detail';
import { useParams, useHistory } from 'react-router-dom';
import BackArrowSVG from '../../assets/icons/back.svg';
import { MovieCard, Loading, Modal } from '../../components';
import styles from './index.module.scss';
const MovieDetail = () => {
  const { id } = useParams();
  const history = useHistory();
  const { detail, isLoading } = useMovieDetail(id)
  const [showPoster, setShowPoster] = useState(false)

  const { main, back_container, back_image, modal_image } = styles
  return (
    <div className={main}>
      <div className={back_container}
        onClick={() => history.goBack()}
      >
        <img alt={BackArrowSVG} src={BackArrowSVG} className={back_image} />
      </div>
      {isLoading ?
        <Loading /> :
        <MovieCard detail={detail} setShowPoster={() => setShowPoster(true)} />
      }
      <Modal
        isOpen={showPoster}
        onRequestClose={() => setShowPoster(false)}
      >
        <img src={detail?.Poster || ''} alt={detail?.Poster || ''} className={modal_image} />
      </Modal>
    </div>)
}

export default MovieDetail;