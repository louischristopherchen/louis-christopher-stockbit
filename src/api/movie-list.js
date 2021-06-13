import dataProvider from './provider';
const getMovieList = async (search = '', page = '') => {
  try {
    const paramsControl = []
    page && paramsControl.push(`page=${page}`);
    search && paramsControl.push(`s=${search}`);
    let paramsJoin = page || search ? `&${paramsControl.join('&')}` : '';
    const response = await dataProvider.get(paramsJoin);
    return response
  } catch (err) {
    throw err
  }
}

export { getMovieList }