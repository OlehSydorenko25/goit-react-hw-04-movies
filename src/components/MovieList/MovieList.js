import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import MovieImagePreview from '../MovieImage/MovieImagePreview';
import styles from './MovieList.module.css';

const MovieList = ({ movies, location, query }) => {
  return (
    <ul className={styles.Movies_List}>
      {movies.map(({ id, poster_path, title, release_date, vote_average }) => {
        return (
          <li key={id}>
            <NavLink
              to={{
                pathname: `/movies/${id}`,
                state: {
                  from: location,
                  query,
                },
              }}
            >
              <MovieImagePreview
                poster_path={poster_path}
                title={title}
                release_date={release_date}
                vote_average={vote_average}
              />
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(MovieList);
