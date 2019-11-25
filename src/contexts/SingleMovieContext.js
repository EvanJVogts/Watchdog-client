import React, { Component } from 'react';

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

  setRating = rating => {
    this.setState({ rating })
  }

  clearMovie = () => {
    this.setMovie(nullMovie)
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
      clearMovie: this.clearMovie,
    }
    return (
      <SingleMovieContext.Provider value={value}>
        {this.props.children}
      </SingleMovieContext.Provider>
    )
  }
}