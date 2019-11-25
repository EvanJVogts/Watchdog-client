import React, { Component } from 'react';
import SingleMovieContext from '../../contexts/SingleMovieContext';
import MovieApiService from '../../services/movie-api-service';
import { Link } from 'react-router-dom'
import './ExpandedMoviePage.css'

export default class ExpandedMoviePage extends Component {

  static defaultProps = {
    match: { params: {} },
  }

  static contextType = SingleMovieContext

  componentDidMount() {
    const { movieId } = this.props.match.params
    this.context.clearMovie()
    this.context.clearError()
    MovieApiService.getMovie(movieId)
      .then(movie => {
        return movie
      })
      .then(this.context.setMovie)
      .catch(this.context.setError)
  }

  renderMovie() {
    const {movie} = this.context
    return <>
      <h2>{movie.title}</h2>
      <MovieRating rating={movie.rating} />
      <MovieComments comments={movie.comments} />
    </>
  }

  render() {
    const { movie } = this.context
    return (
      <main role="main">
      <section>{this.renderMovie()}</section>
      <Link to='/home' className='button'>
        Back
      </Link>
      <Link to={`/edit/${movie.id}`} className='button'>
        Edit
      </Link>
      </main>
    )
  }
}

function MovieRating ({ rating }) {
  return (
    <p>{rating}</p>
  )
}

function MovieComments ({ comments }) {
  return (
    <p>{comments}</p>
  )
}