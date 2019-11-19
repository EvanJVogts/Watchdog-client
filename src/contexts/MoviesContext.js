import React from 'react';

const MoviesContext = React.createContext({
  movies: [],
  addMovie: () => {},
  deleteMovie: () => {},
  updateMovie: () => {},
})

export default MoviesContext;