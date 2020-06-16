import React from 'react';
import PropTypes from 'prop-types';

function Movie({year, title, summary, poster, rating, genres}) {
  return (
    <div className='movie'>
      <img className='movie__poster' src={poster} alt={title} title={title} />
      <div className='movie__data'>
        <h1 className='movie__data__title'>
          {title}, <span className='movie__data__year'>{year}</span>
        </h1>
        <ul className='movie__data__genres'>
          {genres.map((genre, index) => {
            // 인덱스(또는 key)가 있는 구조의 경우 아이템에 고유한 키값을 명시해주어야 에러가 안생긴다. (렌더링은 안된다.)
            // class명은 직속 자식에게만 자기 클래스명에 더블 언더바(__)로 이어 작성해주면 된다. (ul.movie__data__genres, li.genres__genre)
            return (
              <li key={index} className='movie__data__genres__genre'>
                {genre}
              </li>
            );
          })}
        </ul>
        <p className='movie__data__rating'>
          <i class='fas fa-star'></i>&nbsp;{rating}
        </p>
        <p className='movie__data__summary'>{summary.slice(0, 140)}...</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
