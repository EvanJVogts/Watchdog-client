import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'

export default class HomePage extends Component {
  render() {
    return (
      <main role="main">
      <header>
        <h1>Homepage</h1>
      </header>
      <section>
        <h2>My Favorite Movies:</h2>
        <p>[List of favorite movies]</p>
      </section>
      <section>
        <h2>All my movies:</h2>
        <p>[List of all movies logged]</p>
        <button>
          <Link to='/add'>Add new movie!</Link>
        </button>
      </section>
    </main>
    )
  }
}