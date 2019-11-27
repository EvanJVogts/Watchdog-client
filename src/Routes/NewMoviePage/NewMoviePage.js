import React, { Component } from 'react';
import NewMovieForm from '../../components/NewMovieForm/NewMovieForm';
import './NewMoviePage.css';

export default class NewMoviePage extends Component {
  render() {
    return (
      <main role="main">
        <header>
          <h1>New Movie</h1>
        </header>
        <section>
          <NewMovieForm 
            history={this.props.history}/>
        </section>
      </main>
    )
  }
}