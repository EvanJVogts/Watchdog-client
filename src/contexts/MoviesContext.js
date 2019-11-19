import React from 'react';

const MoviesContext = React.createContext({
  movies: [],
  addMovie: () => {},
  deleteMovie: () => {},
  updateMovie: () => {},
  setMovieList: () => {},
})

export default MoviesContext;