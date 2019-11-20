import React, { Component } from 'react';
import MoviesContext from './MoviesContext';

export const nullMovie = {
  title: '',
}

const SingleMovieContext = React.createContext ({
  movie: nullMovie,
  comments: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setMovie: () => {},
  clearMovie: () => {},
  setComments: () => {},
  setRating: () => {},
  addComment: () => {},
})

export default SingleMovieContext;

export class MovieProvider extends Component {
  state = {
    movie: nullMovie,
    error: null,
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setMovie = movie => {
    this.setState({ movie })
  }

  setComments = comments => {
    this.setState({ comments })
  }

  setRating = rating => {
    this.setState({ rating })
  }

  clearMovie = () => {
    this.setMovie(nullMovie)
    this.setComments([])
  }

  addComment = comment => {
    this.setComments([
      ...this.state.comments,
      comment
    ])
  }

  render() {
    const value = {
      movie: this.state.movie,
      rating: this.state.rating,
      comments: this.state.comments,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setMovie: this.setMovie,
      setComments: this.setComments,
      clearMovie: this.clearMovie,
      addComment: this.addComment,
    }
    return (
      <SingleMovieContext.Provider value={value}>
        {this.props.children}
      </SingleMovieContext.Provider>
    )
  }
}