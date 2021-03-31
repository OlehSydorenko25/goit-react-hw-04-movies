import React, { Component } from 'react';
import { reviewsDetails } from '../../services/moviesAPI';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const reviews = await reviewsDetails(movieId);
    this.setState({ reviews });
  }

  render() {
    const { reviews } = this.state;
    return (
      <ul>
        {reviews.length > 0 ? (
          reviews.map(({ id, content }) => {
            return <li key={id}>{content}</li>;
          })
        ) : (
          <div>We don't have any reviews for this movie</div>
        )}
      </ul>
    );
  }
}

export default Reviews;
