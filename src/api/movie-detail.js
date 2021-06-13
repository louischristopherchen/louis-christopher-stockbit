import dataProvider from './provider';

const getMovieDetail = async (id) => {
  try {
    const response = await dataProvider.get(`&i=${id}`);
    return response
  } catch (err) {
    throw err
  }
}

export { getMovieDetail }

