import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MovieListItem.css';

export default class MovieListItem extends Component {
  render() {
    const { movie } = this.props
    return (
      <Link to={`/movie/${movie.id}`} className='movieList'>
        <h3 className='movieListItem'>{movie.title}</h3>
      </Link>
    )
  }
}