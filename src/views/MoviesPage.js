import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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
    console.log(this.props.location.search);
    return (
      <>
        <SearchForm onSubmit={this.handleChangeQuery} />
        <MovieList movies={this.state.movies} query={this.state.query} />
      </>
    );
  }
}

export default withRouter(MoviesPage);
