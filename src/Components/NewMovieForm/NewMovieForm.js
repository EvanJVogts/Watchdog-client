import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MoviesContext from '../../contexts/MoviesContext';
import config from '../../config';
import { Link } from 'react-router-dom';
import './NewMovieForm.css';

export default class NewMovieForm extends Component {
  
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func,
    }),
  };

  static contextType = MoviesContext;

  state = {
    error: null,
  };

  handleSubmit = event => {
    event.preventDefault()
    const { title, comments, rating } = event.target
    const movie = {
      title: title.value,
      comments: comments.value,
      rating: Number(rating.value),
    }
    this.setState({ error: null })
    fetch(config.API_ENDPOINT, {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${config.API_KEY}`
      }
    })
    .then(data => {
      title.value = ''
      comments.value = ''
      rating.value = ''
      this.context.addMovie(data)
      this.props.history.push('/:userId')
    })
    .catch(error => {
      console.error(error)
      this.setState({ error })
    })
  }

  render() {
    const { error } = this.state
    return (
      <form 
        id="newMovie-form"
        onSubmit={this.handleSubmit}>
        <div className='AddMovie_error' role='alert'>
          {error && <p>{error.message}</p>}
        </div>
        <div className="form-section">
          <label 
            htmlFor="title">
              Movie title: 
          </label>
          <input 
            type='text' 
            name='title'
            id='title' 
            placeholder='' 
            required>
          </input>
        </div>
        <div className="form-section">
          <label htmlFor="comments">Comments: </label>
          <textarea name="comments" rows="10"></textarea>
        </div>
        <div className="form-section">
          <label 
            htmlFor="rating">
              Movie rating: 
          </label>
          <select type="number" name="rating">
            <option>1 star</option>
            <option>2 star</option>
            <option>3 star</option>
            <option>4 star</option>
            <option>5 star</option>
          </select>
        </div>
        <div className="form-section">
          <label className="favorite-label" htmlFor="favorite">Favorite:</label>
          <input type="checkbox" name="favorite" className="favorite-checkbox"></input>
        </div>
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
          <Link to='/home/:userId'>Back</Link>
      </form>
    )
  }
}