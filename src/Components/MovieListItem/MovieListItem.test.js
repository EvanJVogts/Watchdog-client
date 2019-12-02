import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import MovieListItem from './MovieListItem';

it('renders without crashing' , () => {
  const div = document.createElement('div');
  const props = {
    movie: [],
    id: '1',
    title: 'test title',
  }
  ReactDOM.render(
    <BrowserRouter>
      <MovieListItem {...props}/>
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});