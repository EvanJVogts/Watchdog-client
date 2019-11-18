import React, { Component } from 'react';
import './LandingPage.css'

export default class LandingPage extends Component {
  render() {
    return (
      <main role="main">
        <header role="banner">
          <h1>WatchDog</h1>
          <h2>[Short app slogan]</h2>
        </header>
        <div>
          <p>[App description]</p>
        </div>
        <div>
          <button>Log in</button>
          <button>New user?</button>
          <button>Demo</button>
        </div>
    </main>
    )
  }
}