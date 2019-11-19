import React from 'react';

const MoviesContext = React.createContext({
  movies: [],
  addMovie: () => {},
  deleteMovie: () => {},
  updateMovie: () => {},
  setMovieList: (moviesList) => {
    this.movies = moviesList;
  },
})

export default MoviesContext;