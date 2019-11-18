import React, { Component } from 'react';
import './ExpandedMoviePage.css'

export default class ExpandedMoviePage extends Component {
  render() {
    return (
      <main role="main">
      <header>
        <h1>[Movie Title]</h1>
      </header>
      <section>
        <h2>Rating</h2>
        <p>[Displays movie rating]</p>
      </section>
      <section>
        <h2>Comments</h2>
        <p>[Displays movie comments]</p>
      </section>
      <section>
        <button>Add movie to favorites</button>
        <button>Home</button>
      </section>
    </main>
    )
  }
}