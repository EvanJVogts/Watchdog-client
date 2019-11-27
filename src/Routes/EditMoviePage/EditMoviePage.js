import React, { Component } from 'react';
import SingleMovieContext from '../../contexts/SingleMovieContext';
import MovieApiService from '../../services/movie-api-service'
// import { Button } from '../../components/Utility/Utility';
import { Link } from 'react-router-dom'

export default class EditMoviePage extends Component {

  static defaultProps = {
    match: { params: {} },
  }

  static contextType = SingleMovieContext

  handleSubmit = event => {
    const {movie} = this.context
    event.preventDefault()
    const { newTitle, newRating, newComments } = event.target
    MovieApiService.editMovie(newTitle.value, newComments.value, newRating.value, movie.id)
      .then(() => {
        movie.id = ''
        newTitle.value = ''
        newComments.value = ''
        newRating.value = ''
      })
      .catch(this.context.setError)
  }
  
  renderEditMovie() {
    const {movie} = this.context
    return <>
      <form 
        className='editMovie-form'
        onSubmit={this.handleSubmit}>
        <div>
          <label
            htmlFor='newTitle'>
              Title: 
          </label>
          <textarea
            type='text'
            id='newTitle'
            required
            defaultValue={movie.title}>
          </textarea>
        </div>
        <div>
          <label
            htmlFor='newComments'>
              Comments:
          </label>
          <textarea
            type='text'
            id='newComments'
            defaultValue={movie.comments}
            required>
          </textarea>
        </div>
        <div>
          <label
            htmlFor='newRating'>
              Rating:  
          </label>
          <select 
            type='number'
            name='newRating'
            id='newRating'
            defaultValue={movie.rating}
            required>
            <option value='1'>1 star</option>
            <option value='2'>2 star</option>
            <option value='3'>3 star</option>
            <option value='4'>4 star</option>
            <option value='5'>5 star</option>
          </select>
        </div>
        <button type="submit">Submit</button>
        <Link to={`/movie/${movie.id}`} className='Button'>
          Back
        </Link>
      </form>
    </>
  }

  render() {
    const { movie } = this.context
    return (
      <main>
        <h1> Edit {movie.title}'s Information </h1>
        <section>{this.renderEditMovie()}</section>
      </main>
    )
  }
}