import styles from './index.module.scss';

const MovieCard = ({ detail,setShowPoster }) => {
  const {
    main,
    left_container,
    right_container } = styles;
  const {
    Title,
    Year,
    Released,
    Runtime,
    Genre,
    Director,
    Writer,
    Actors,
    Plot,
    Language,
    Country,
    Poster,
    Ratings = [],
    imdbRating,
    imdbVotes,
    BoxOffice,
  } = detail;


  const Rating = Ratings.find((item) => item.Source === "Rotten Tomatoes");
  return (<div className={main}>
    <img alt={Poster} src={Poster} className={left_container} onClick={setShowPoster} />
    <div className={right_container}>
      <div className='title'>{Title || ''}</div>
      <div className='year'>{Year || ''}</div>
      <div className='relased'>{Released || ''}</div>
      <div className='runtime'>{Runtime || ''}</div>
      <div className='genre'>{Genre || ''}</div>
      <div className='director'>{Director || ''}</div>
      <div className='writer'>{Writer || ''}</div>
      <div className='actors'>{Actors || ''}</div>
      <div className='plot'>{Plot || ''}</div>
      <div className='language'>{Language || ''}</div>
      <div className='country'>{Country || ''}</div>
      <div className='rating'>Rotten Tomatoes Rated: {Rating?.Value || ''}</div>
      <div className='imdb_rating'>{imdbRating || ''}</div>
      <div className='imdb_votes'>{imdbVotes || ''}</div>
      <div className='box_office'>{BoxOffice || ''}</div>
    </div>
  </div>)
}

export default MovieCard;