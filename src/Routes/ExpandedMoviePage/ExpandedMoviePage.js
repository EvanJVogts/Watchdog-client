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
      <h2 className='expanded_title'>{movie.title}</h2>
      <fieldset className='expanded_movies_fieldset'>
        <legend
          className='expanded_movies_legend_title'>
            Comments:
        </legend>
        <MovieComments comments={movie.comments} />
      </fieldset>
      <MovieRating rating={movie.rating} />
    </>
  }

  render() {
    const { movie } = this.context
    return (
      <main role="main">
        <section className='expanded_render_section'>
          <div className='expanded_render'>
            {this.renderMovie()}
          </div>
          <div className='expanded_buttons'>
            <Link to='/home' 
              className='expanded_movie_back_button'>
                Back
            </Link>
            <Link to={`/edit/${movie.id}`} 
              className='expanded_movie_edit_button'>
                Edit
            </Link>
            <Link to={`/delete/${movie.id}`} 
              className='expanded_movie_delete_button'>
                Delete
            </Link>
          </div>
        </section>
      </main>
    )
  }
}

function MovieRating ({ rating }) {
  return (
    <p className='expanded_rating'>{rating} Stars</p>
  )
}

function MovieComments ({ comments }) {
  return (
    <p className='expanded_comments'>{comments}</p>
  )
}