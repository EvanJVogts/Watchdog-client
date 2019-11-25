import React, { Component } from 'react';

export default class EditMovieForm extends Component {
  render() {
    const { movie } = this.props
    return (
      <form>
        <h1>{movie.title}</h1>
      </form>
    )
  }
}