import React, { Component } from 'react';
import SingleMovieContext from '../../contexts/SingleMovieContext';
import MovieApiService from '../../services/movie-api-service';
import { Link } from 'react-router-dom';
import { Button } from '../Utility/Utility';
import './NewMovieForm.css';

export default class NewMovieForm extends Component {
  static contextType = SingleMovieContext;

  handleSubmit = event => {
    event.preventDefault()
    const { title, comments, rating } = event.target
    MovieApiService.addNewMovie(title.value, rating.value, comments.value)
      .then(this.context.addNewMovie)
      .then(() => {
        title.value = ''
        rating.value = null
        comments.value = ''
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
            htmlFor="title">
              Movie title: 
          </label>
          <input 
            type='text' 
            name='title'
            id='title'
            required>
          </input>
        </div>
        <div className='form-section'>
          <label 
            htmlFor='comments'>
              Comments: 
          </label>
          <textarea 
            type='text'
            id='comments'
            name='comments'
            rows='10'
            required>
          </textarea>
        </div>
        <div className='form-section'>
          <label 
            htmlFor='rating'>
              Movie rating: 
          </label>
          <select 
            type='number'
            name='rating'
            id='rating'
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
          <Button type="submit">Submit</Button>
          <Button type="reset">Reset</Button>
          <Link to='/home' className='Button'>Back</Link>
      </form>
    )
  }
}