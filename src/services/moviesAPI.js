import axios from 'axios';

const api = 'https://api.themoviedb.org/3/';
const APIKey = '2570e005a45854af47ce9a82cb61684a';

async function trendsMovies() {
  try {
    const trendMovies = await axios.get(
      `${api}movie/popular?api_key=${APIKey}`,
    );
    // console.log(trendMovies.data.results);
    return trendMovies.data.results;
  } catch (error) {
    console.error(error.message);
  }
}

async function searchMovies(query) {
  try {
    const searchingMovies = await axios.get(
      `${api}search/movie?query=${query}&api_key=${APIKey}`,
    );
    // console.log(searchingMovies.data.results);
    return searchingMovies.data.results;
  } catch (error) {
    console.error(error.message);
  }
}

async function movieDetails(movieId) {
  try {
    const movie = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${APIKey}`,
    );
    return { ...movie.data };
  } catch (error) {
    console.error(error.message);
  }
}

async function castDetails(movieId) {
  try {
    const cast = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${APIKey}`,
    );
    return cast.data.cast;
  } catch (error) {
    console.error(error.message);
  }
}

async function reviewsDetails(movieId) {
  try {
    const reviews = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${APIKey}`,
    );
    // console.log(reviews.data.results);
    return reviews.data.results;
  } catch (error) {
    console.error(error.message);
  }
}

export {
  trendsMovies,
  searchMovies,
  movieDetails,
  castDetails,
  reviewsDetails,
};
