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
    this.context.clearError()
    MovieApiService.getMovie(movieId)
      .then(movie => {
        return movie
      })
      .then(this.context.setMovie)
      .catch(this.context.setError)
  }

  componentWillUnmount() {
    this.context.clearMovie()
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
    return (
      <main role="main">
      <section>{this.renderMovie()}</section>
      <Link to='/home' className='button'>
        Back
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