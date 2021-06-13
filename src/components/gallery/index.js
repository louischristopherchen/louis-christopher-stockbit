import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../loading';
import styles from './index.module.scss';

const Gallery = ({
  list,
  isLoadingSubmitTitle,
  isLoadingMore,
}, ref) => {
  const {
    main,
    items_list,
    items_card,
    items_image,
    items_title,
  } = styles;
  return (<> {isLoadingSubmitTitle ? <Loading /> :
    <div className={main}>
      {list.map((item, index) => {
        if (list.length === index + 1) {
          return (
            <Link
              ref={ref}
              key={index}
              to={`/movie/${item.imdbID}`}
              className={items_list}>
              <div className={items_card}>
                <img
                  src={item?.Poster || ''}
                  alt={item?.Poster || ''}
                  className={items_image} />
                    <div className={items_title}>
                      {item?.Title || ''}
                    </div>
              </div>
            </Link>
          )
        } else {
          return (
              <Link
                to={`/movie/${item.imdbID}`}
                key={index}
                className={items_list}>
                <div className={items_card}>
                  <img
                    src={item?.Poster || ''}
                    alt={item?.Poster || ''}
                    className={items_image} />
                      <div className={items_title}>
                        {item?.Title || ''}
                      </div>
              </div>
            </Link>
          )
        }
      })}
      {isLoadingMore && <div className="load_more">Loading More . . .</div>}
    </div>}
  </>)
        }

export default forwardRef(Gallery);