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

  nextPath(path) {
    this.props.history.push(path);
  }
  
  renderDeleteMovie() {
    const {movie} = this.context
    return <>
        <button 
          className='Button'
          onClick={() => {
            MovieApiService.deleteMovie(movie.id)
            .then(() => {this.nextPath('/home')}) 
          }}>
            Yes
        </button>
        <Link to={`/movie/${movie.id}`} className='Button'>
          No
        </Link>
    </>
  }

  render() {
    const { movie } = this.context
    return (
      <main>
        <h1> Are you sure you want to delete {movie.title} from your list? </h1>
        <section>{this.renderDeleteMovie()}</section>
      </main>
    )
  }
}