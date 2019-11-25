import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import './index.css';
import { MovieListProvider } from './contexts/MoviesContext';
import { MovieProvider } from './contexts/SingleMovieContext'
import { UserContextProvider } from './contexts/UserContext';

ReactDOM.render(
  <BrowserRouter>
    <MovieListProvider>
      <MovieProvider>
        <UserContextProvider>
          <App /> 
        </UserContextProvider>
      </MovieProvider>
    </MovieListProvider>
  </BrowserRouter>, 
  document.getElementById('root')
);