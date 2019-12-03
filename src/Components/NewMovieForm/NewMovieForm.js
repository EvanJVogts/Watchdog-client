import React, { Component } from 'react';
import SingleMovieContext from '../../contexts/SingleMovieContext';
import MovieApiService from '../../services/movie-api-service';
import './NewMovieForm.css';

export default class NewMovieForm extends Component {
  state = {
    checkedFavorite: false,
    checkedSeen: false
  }

  handleCheckFavorite = () => {
    this.setState({checkedFavorite: true});
  }

  handleCheckSeen = () => {
    this.setState({checkedSeen: true});
  }

  static contextType = SingleMovieContext;

  handleSubmit = event => {
    event.preventDefault()
    const { title, comments, rating, platform } = event.target
    const favorite = this.state.checkedFavorite
    const seen = this.state.checkedSeen
    MovieApiService.addNewMovie(title.value, rating.value, comments.value, platform.value, favorite, seen)
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
            htmlFor='platform'
            className='new_movie_platform_label'>
              Media Platform: 
          </label>
          <select 
            type='text'
            name='platform'
            id='platform'
            className='new_movie_platform'
            defaultValue='Other'
            required>
            <option value='Netflix'>Netflix</option>
            <option value='Hulu'>Hulu</option>
            <option value='HBO'>HBO</option>
            <option value='Showtime'>Showtime</option>
            <option value='Starz'>Starz</option>
            <option value='Disney+'>Disney+</option>
            <option value='Amazon Prime'>Amazon Prime</option>
            <option value='Sling TV'>SlingTV</option>
            <option value='YouTube'>YouTube</option>
            <option value='Cable Provider'>Cable</option>
            <option value='Playstation Vue'>Playstation Vue</option>
            <option value='Apple TV'>Apple TV</option>
            <option value='CBS All Access'>CBS All Access</option>
            <option value='Other'>Other</option>
          </select>
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
            <option value='0'>Haven't Watched Yet</option>
            <option value='1'>1 Star</option>
            <option value='2'>2 Star</option>
            <option value='3'>3 Star</option>
            <option value='4'>4 Star</option>
            <option value='5'>5 Star</option>
          </select>
        </div>
        <div className='form-section'>
          <label className='new-favorite-label' htmlFor='favorite'>Favorite:</label>
          <input type='checkbox' name='favorite' id='favorite' className='new-favorite-checkbox' onChange={this.handleCheckFavorite} defaultChecked={this.state.checkedFavorite}/>
        </div>
        <div className='form-section'>
          <label className='new-seen-label' htmlFor='seen'>Watched:</label>
          <input type='checkbox' name='seen' id='seen' className='new-seen-checkbox' onChange={this.handleCheckSeen} defaultChecked={this.state.checkedSeen}/>
        </div>
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
      </form>
    )
  }
}