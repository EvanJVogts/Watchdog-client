import React, { Component } from 'react';
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
        <button>Add new movie</button>
      </section>
    </main>
    )
  }
}