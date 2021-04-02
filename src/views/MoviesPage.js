import React, { Component } from 'react';
import { searchMovies } from '../services/moviesAPI';
import SearchForm from '../components/SearchForm/SearchForm';
import MovieList from '../components/MovieList/MovieList';

class MoviesPage extends Component {
  state = {
    movies: [],
    query: '',
  };

  componentDidMount() {
    const searchQuery = this.props.location.search;
    const query = searchQuery.slice(3);

    if (query) {
      this.setState({ query: query });
    }
  }

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
    return (
      <>
        <SearchForm onSubmit={this.handleChangeQuery} />
        <MovieList
          movies={this.state.movies}
          query={this.state.query}
          location={this.props.location}
        />
      </>
    );
  }
}

export default MoviesPage;
