import React, { Component } from 'react';
import NewMovieForm from '../../Components/NewMovieForm/NewMovieForm';
import './NewMoviePage.css';

export default class NewMoviePage extends Component {
  render() {
    return (
      <main role="main">
        <header>
          <h1>New Movie</h1>
        </header>
        <section>
          <NewMovieForm />
        </section>
      </main>
    )
  }
}