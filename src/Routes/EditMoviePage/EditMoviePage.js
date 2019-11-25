import React, { Component } from 'react';
import SingleMovieContext from '../../contexts/SingleMovieContext';
import EditMovieForm from '../../components/EditMovieForm/EditMovieForm';
import { Link } from 'react-router-dom'

export default class EditMoviePage extends Component {

  static defaultProps = {
    match: { params: {} },
  }

  static contextType = SingleMovieContext
  
  renderEditMovie() {
    const {movie} = this.context
    return <>
      <h2>{movie.title}</h2>
      <h2>{movie.rating}</h2>
      <h2>{movie.comments}</h2>
    </>
  }

  render() {
    const { movie } = this.context
    return (
      <main>
        <h1> Edit </h1>
        <div>{this.renderEditMovie()}</div>
        <Link to={`/movie/${movie.id}`} className='button'>
          Back
        </Link>
      </main>
    )
  }
}