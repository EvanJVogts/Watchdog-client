import React, { Component } from 'react';

const MoviesContext = React.createContext({
  movieList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setMovieList: (moviesList) => {},
  setFavoriteMovieList: (favoriteMovieList) => {}
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
  setFavoriteMovieList = favoriteMovieList => {
    this.setState({ favoriteMovieList })
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
      favoriteMovieList: this.state.favoriteMovieList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setMovieList: this.setMovieList,
      setFavoriteMovieList: this.setFavoriteMovieList,
    }
    return (
      <MoviesContext.Provider value={value}>
        {this.props.children}
      </MoviesContext.Provider>
    )
  }
}
