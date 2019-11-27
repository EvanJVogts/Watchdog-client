import React, { Component } from 'react';
import SingleMovieContext from '../../contexts/SingleMovieContext';
import MovieApiService from '../../services/movie-api-service';
import { Link } from 'react-router-dom';
// import { Button } from '../Utility/Utility';
import './NewMovieForm.css';

export default class NewMovieForm extends Component {

  static contextType = SingleMovieContext;

  handleSubmit = event => {
    event.preventDefault()
    const { title, comments, rating } = event.target
    MovieApiService.addNewMovie(title.value, rating.value, comments.value)
      .then(this.context.addNewMovie)
      .then(() => {
        this.props.history.push('/home')
      })
      .catch(this.context.setError)
  }

  render() {
    return (
      <form 
        className='newMovie-form'
        onSubmit={this.handleSubmit}>
        <div className='form-section'>
          <label 
            htmlFor="title"
            className='new_movie_title_label'>
              Movie title: 
          </label>
          <input 
            type='text' 
            name='title'
            id='title'
            className='new_movie_title'
            required>
          </input>
        </div>
        <div className='form-section'>
          <label 
            htmlFor='comments'
            className='new_movie_comments_label'>
              Comments: 
          </label>
          <textarea 
            type='text'
            id='comments'
            name='comments'
            rows='15'
            className='new_movie_comments'
            required>
          </textarea>
        </div>
        <div className='form-section'>
          <label 
            htmlFor='rating'
            className='new_movie_rating_label'>
              Movie rating: 
          </label>
          <select 
            type='number'
            name='rating'
            id='rating'
            className='new_movie_rating'
            required>
            <option value='1'>1 star</option>
            <option value='2'>2 star</option>
            <option value='3'>3 star</option>
            <option value='4'>4 star</option>
            <option value='5'>5 star</option>
          </select>
        </div>
        {/* <div className='form-section'>
          <label className='favorite-label' htmlFor='favorite'>Favorite:</label>
          <input type='checkbox' name='favorite' className='favorite-checkbox'></input>
        </div> */}
          <button 
            type="submit"
            className='new_movie_submit_button'>
              Submit
          </button>
          <button 
            type="reset"
            className='new_movie_reset_button'>
              Reset
          </button>
          <Link to='/home' className='new_movie_back_button'>Back</Link>
      </form>
    )
  }
}