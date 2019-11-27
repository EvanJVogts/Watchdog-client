import React, { Component } from 'react';
import SingleMovieContext from '../../contexts/SingleMovieContext';
import MovieApiService from '../../services/movie-api-service'
// import { Button } from '../../components/Utility/Utility';
import { Link } from 'react-router-dom'
import './EditMoviePage.css'

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
            htmlFor='newTitle'
            className='edit_movie_title_label'>
              Title: 
          </label>
          <textarea
            type='text'
            id='newTitle'
            className='edit_movie_title'
            required
            defaultValue={movie.title}>
          </textarea>
        </div>
        <div>
          <label
            htmlFor='newComments'
            className='edit_movie_comments_label'>
              Comments:
          </label>
          <textarea
            type='text'
            id='newComments'
            className='edit_movie_comments'
            defaultValue={movie.comments}
            required>
          </textarea>
        </div>
        <div>
          <label
            htmlFor='newRating'
            className='edit_movie_rating_label'>
              Rating:  
          </label>
          <select 
            type='number'
            name='newRating'
            id='newRating'
            className='edit_movie_rating'
            defaultValue={movie.rating}
            required>
            <option value='1'>1 star</option>
            <option value='2'>2 star</option>
            <option value='3'>3 star</option>
            <option value='4'>4 star</option>
            <option value='5'>5 star</option>
          </select>
        </div>
        <button 
          type="submit"
          className='edit_movie_submit_button'>
            Submit
        </button>
        <Link to={`/movie/${movie.id}`} className='edit_movie_back_button'>
          Back
        </Link>
      </form>
    </>
  }

  render() {
    const { movie } = this.context
    return (
      <main>
        <section className='edit_movie_section'>
          <div className='edit_render'>
            <h2 className='edit_movie_page_title'> Edit {movie.title}'s Information </h2>
            {this.renderEditMovie()}
          </div>
        </section>
      </main>
    )
  }
}