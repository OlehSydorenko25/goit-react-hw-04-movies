import React, { Component } from 'react';
import { trendsMovies } from '../services/moviesAPI';
import MovieList from '../components/MovieList/MovieList';

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const movies = await trendsMovies();
    this.setState({ movies });
  }

  render() {
    return <MovieList movies={this.state.movies} />;
  }
}

export default HomePage;
