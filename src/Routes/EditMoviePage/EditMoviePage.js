import React, { Component } from 'react';
import SingleMovieContext from '../../contexts/SingleMovieContext';
import MovieApiService from '../../services/movie-api-service'
import { Link } from 'react-router-dom'
import './EditMoviePage.css'

export default class EditMoviePage extends Component {
  state = {
    checkedFavorite: this.context.movie.favorite,
    checkedSeen: this.context.movie.seen
  }

  static defaultProps = {
    match: { params: {} },
  }

  static contextType = SingleMovieContext
  
  handleCheckFavorite = () => {
    this.setState({checkedFavorite: !this.state.checkedFavorite});
  }

  handleCheckSeen = () => {
    this.setState({checkedSeen: !this.state.checkedSeen});
  }

  handleSubmit = event => {
    const {movie} = this.context
    event.preventDefault()
    const { newTitle, newRating, newComments, newPlatform } = event.target
    const newFavorite = this.state.checkedFavorite
    const newSeen = this.state.checkedSeen
    MovieApiService.editMovie(newTitle.value, newComments.value, newRating.value, movie.id, newPlatform.value, newFavorite, newSeen)
      .then(() => {
        this.props.history.push('/home')
      })
      .catch(this.context.setError)
  }

  handleFavoriteCheckbox() {
    const {movie} = this.context
    if (movie.favorite === true) {
      return <input type='checkbox' name='newFavorite' id='newFavorite' className='edit-favorite-checkbox' onChange={this.handleCheckFavorite} defaultChecked/>
    }
    if (movie.favorite === false) {
      return <input type='checkbox' name='newFavorite' id='newFavorite' className='edit-favorite-checkbox' onChange={this.handleCheckFavorite}/>
    }
  }

  handleSeenCheckbox() {
    const {movie} = this.context
    if (movie.seen === true) {
      return <input type='checkbox' name='newSeen' id='newSeen' className='edit-seen-checkbox' onChange={this.handleCheckSeen} defaultChecked/>
    }
    if (movie.seen === false) {
      return <input type='checkbox' name='newSeen' id='newSeen' className='edit-seen-checkbox' onChange={this.handleCheckSeen}/>
    }
  }
  
  renderEditMovie() {
    const {movie} = this.context
    return <>
      <form 
        className='editMovie-form'
        onSubmit={this.handleSubmit}>
        <div className='editForm-section'>
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
            rows='15'
            className='edit_movie_comments'
            defaultValue={movie.comments}
            required>
          </textarea>
        </div>
        <div>
          <label 
            htmlFor='newPlatform'
            className='edit_movie_platform_label'>
              Media Platform: 
          </label>
          <select 
            type='text'
            id='newPlatform'
            className='edit_movie_platform'
            defaultValue={movie.platform}
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
            <option value='0'>Haven't Watched Yet</option>
            <option value='1'>1 star</option>
            <option value='2'>2 star</option>
            <option value='3'>3 star</option>
            <option value='4'>4 star</option>
            <option value='5'>5 star</option>
          </select>
        </div>
        <div>
          <label className='edit-favorite-label' htmlFor='newFavorite'>Favorite:</label>
          {this.handleFavoriteCheckbox()}
        </div>
        <div>
          <label className='edit-seen-label' htmlFor='newSeen'>Watched:</label>
          {this.handleSeenCheckbox()}
        </div>
        <button 
          type="submit"
          className='edit_movie_submit_button'>
            Submit
        </button>
        <Link to={`/movie/${movie.id}`}>
          <button className='edit_movie_back_button'>
            Back
          </button>
        </Link>
      </form>
    </>
  }

  render() {
    const { movie } = this.context
    return (
      <>
        <section className='edit_movie_section'>
          <div className='edit_render'>
            <h2 className='edit_movie_page_title'> Edit {movie.title}'s Information </h2>
            {this.renderEditMovie()}
          </div>
        </section>
      </>
    )
  }
}