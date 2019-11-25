import React, { Component } from 'react';

const MoviesContext = React.createContext({
  movieList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setMovieList: (moviesList) => {
    this.movies = moviesList;
  },
})
export default MoviesContext

export class MovieListProvider extends Component {
  state = {
    movieList: [],
    error: null,
  };
  setMovieList = movieList => {
    this.setState({ movieList })
  }
  setError = error => {
    this.setState({ error })
  }
  clearError = () => {
    this.setState({ error: null })
  }
  render() {
    const value = {
      movieList: this.state.movieList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setMovieList: this.setMovieList,
    }
    return (
      <MoviesContext.Provider value={value}>
        {this.props.children}
      </MoviesContext.Provider>
    )
  }
}
