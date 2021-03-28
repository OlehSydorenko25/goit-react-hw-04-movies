import React, { Component } from 'react';
import { castDetails } from '../../services/moviesAPI';
import defaultImg from './default-image.jpg';

class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const cast = await castDetails(movieId);
    this.setState({ cast });
  }

  render() {
    const { cast } = this.state;

    return (
      <ul>
        {cast.map(({ id, profile_path, name }) => {
          const imegeCheck = profile_path
            ? `https://image.tmdb.org/t/p/w500/${profile_path}`
            : defaultImg;
          return (
            <li key={id}>
              <img src={imegeCheck} alt="" width="150"></img>
              <p>{name}</p>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Cast;
