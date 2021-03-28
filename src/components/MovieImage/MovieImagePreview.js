import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieImagesPreview.module.css';
import defaultImg from './default-image.jpg';

const MovieImage = ({ poster_path, title, release_date, vote_average }) => {
  return (
    <div className={styles.Link}>
      <div>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : defaultImg
          }
          alt={title}
          className={styles.Preview}
        />
      </div>
      <div>
        <h4>{title}</h4>
        <p>{release_date}</p>
        <p>{vote_average}</p>
      </div>
    </div>
  );
};

MovieImage.defaultProps = {
  poster_path: defaultImg,
};

MovieImage.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
};

export default MovieImage;
