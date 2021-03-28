import React, { Component } from 'react';
import { searchMovies } from '../services/moviesAPI';
import SearchForm from '../components/SearchForm/SearchForm';
import MovieList from '../components/MovieList/MovieList';

class MoviesPage extends Component {
  state = {
    movies: [],
    query: '',
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;

    if (prevState.query !== query) {
      const movies = await searchMovies(query);
      this.setState({ movies });
    }
  }

  handleChangeQuery = velue => {
    this.setState({ query: velue });
  };

  render() {
    // console.log(this.props.match.url);
    return (
      <>
        <SearchForm onSubmit={this.handleChangeQuery} />
        <MovieList movies={this.state.movies} />
      </>
    );
  }
}

export default MoviesPage;
