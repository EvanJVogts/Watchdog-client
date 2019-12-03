import React, { Component } from 'react';
import SingleMovieContext from '../../contexts/SingleMovieContext';
import MovieApiService from '../../services/movie-api-service';
import { Link } from 'react-router-dom'
import Backarrow1 from '../../images/backarrow1.png';
import './ExpandedMoviePage.css'

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

function MovieFavorite ({ favorite }) {
  if (favorite === true) {
    return (
      <p>This movie is one of your favorites!</p>
    )
  } else {
    return (
      <p></p>
    )
  }
}

function MovieSeen ({ seen }) {
  if (seen === true) {
    return (
      <p></p>
    )
  } else {
    return (
      <p>You haven't seen this movie yet.</p>
    )
  }
}

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
      <MovieSeen seen={movie.seen} />
      <fieldset className='expanded_movies_fieldset'>
        <MovieComments comments={movie.comments} />
      </fieldset>
      <MovieFavorite favorite={movie.favorite} />
      <MovieRating rating={movie.rating} />
    </>
  }

  render() {
    const { movie } = this.context
    return (
      <>
        <section className='expanded_render_section'>
          <div className='expanded_render'>
            <Link to='/home'>
              <img 
                src={Backarrow1} 
                alt='back arrow'
                className='expanded_back-arrow1'/>
            </Link>
            {this.renderMovie()}
            <div className='expanded_buttons'>
              <Link to={`/edit/${movie.id}`} 
                className='expanded_movie_edit_button'>
                  Edit
              </Link>
              <Link to={`/delete/${movie.id}`} 
                className='expanded_movie_delete_button'>
                  Delete
              </Link>
            </div>
          </div>
        </section>
      </>
    )
  }
}