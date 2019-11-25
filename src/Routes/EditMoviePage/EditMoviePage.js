import React, { Component } from 'react';
import SingleMovieContext from '../../contexts/SingleMovieContext';
import MovieApiService from '../../services/movie-api-service';
import EditMovieForm from '../../components/EditMovieForm/EditMovieForm';
import { Link } from 'react-router-dom'

export default class EditMoviePage extends Component {

  static defaultProps = {
    match: {
      params: {}
    },
  }

  static contextType = SingleMovieContext

  componentDidMount() {
    const { movieId } = this.props.match.params
    this.context.clearError()
    MovieApiService.getMovie(movieId)
      .then(movie => {
        return movie
      })
      .then(this.context.setMovie)
      .catch(this.context.setError)
  }
  
  componentWillUnmount() {
    this.context.clearMovie()
  }
  
  renderEditMovie() {
    const { movie } = this.context
    return <>
        <EditMovieForm 
          key={movie.id}
          movie={movie}
        />
      </>
  }

  render() {
    const { movie } = this.context
    return (
      <main>
        <h1> Edit </h1>
        <div>{this.renderEditMovie()}</div>
        <Link to={`/movie/${movie.id}`} className='button'>
          Back
        </Link>
      </main>
    )
  }
}

// render() {
//   const { movie } = this.context
//   return (
//     <main role="main">
//     <section>{this.renderMovie()}</section>
//     <Link to='/home' className='button'>
//       Back
//     </Link>
//     <Link to={`/edit/${movie.id}`} className='button'>
//       Edit
//     </Link>
//     </main>
//   )
// }


function MovieRating ({ rating }) {
return (
  <p>{rating}</p>
)
}

function MovieComments ({ comments }) {
return (
  <p>{comments}</p>
)
}