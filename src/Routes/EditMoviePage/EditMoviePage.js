import React, { Component } from 'react';
import SingleMovieContext from '../../contexts/SingleMovieContext';
import { Button } from '../../components/Utility/Utility';
import { Link } from 'react-router-dom'

export default class EditMoviePage extends Component {

  static defaultProps = {
    match: { params: {} },
  }

  static contextType = SingleMovieContext
  
  renderEditMovie() {
    const {movie} = this.context
    return <>
      <form 
        className='editMovie-form'
        onSubmit={this.handleSubmit}>
        <div>
          <label
            htmlFor='newTitle'>
              {movie.title}'s title: 
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
          htmlFor='newRating'>
            {movie.title}'s rating:  
        </label>
        <select 
          type='number'
          name='newRating'
          id='newRating'
          required>
          <option value='1'>1 star</option>
          <option value='2'>2 star</option>
          <option value='3'>3 star</option>
          <option value='4'>4 star</option>
          <option value='5'>5 star</option>
        </select>
        </div>
        <div>
          <label
            htmlFor='newComments'>
              Comments for {movie.title}:
          </label>
          <textarea
            type='text'
            id='newComments'
            defaultValue={movie.comments}
            required>
          </textarea>
        </div>
      </form>
    </>
  }

  render() {
    const { movie } = this.context
    return (
      <main>
        <h1> Edit </h1>
        <section>{this.renderEditMovie()}</section>
        <Button type="submit">Submit</Button>
        <Link to={`/movie/${movie.id}`} className='Button'>
          Back
        </Link>
      </main>
    )
  }
}