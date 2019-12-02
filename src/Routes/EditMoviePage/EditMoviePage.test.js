import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import EditMoviePage from './EditMoviePage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    match: { params: {} },
  }
  ReactDOM.render(
    <BrowserRouter>
      <EditMoviePage {...props} />
    </BrowserRouter>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});