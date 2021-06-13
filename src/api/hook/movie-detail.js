import { useEffect, useState } from 'react';
import { getMovieDetail } from '../movie-detail';

const useMovieDetail = (id) => {
  const [detail, setDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    (async () => {
      setIsLoading(true)
      try {
        const response = await getMovieDetail(id);
        setIsLoading(false)
        setDetail(response)
      } catch (err) {
        setIsLoading(false)
        setDetail({})
      }
    })()
    return () => {
      setDetail({})
    }
    // eslint-disable-next-line 
  }, [id])

  return { detail, isLoading };
}

export { useMovieDetail };