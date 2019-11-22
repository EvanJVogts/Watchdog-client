import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import './index.css';
import { MovieListProvider } from './contexts/MoviesContext';
import { MovieProvider } from './contexts/SingleMovieContext'

ReactDOM.render(
  <BrowserRouter>
    <MovieListProvider>
      <MovieProvider>
        <App /> 
      </MovieProvider>
    </MovieListProvider>
  </BrowserRouter>, 
  document.getElementById('root')
);