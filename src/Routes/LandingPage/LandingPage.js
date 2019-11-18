import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './LandingPage.css'

export default class LandingPage extends Component {
  render() {
    return (
      <main role="main">
        <header role="banner">
          <h1>WatchDog</h1>
          <h2>The movies you love!</h2>
        </header>
        <div>
          <p>[App description]</p>
        </div>
        <div>
          <button>
            <Link to='/login'>
                Log in
            </Link>
          </button>
          <button>
            <Link to='/register'>
                New User?
            </Link>
          </button>
          <button>
            <Link to='/home/:userId'>
                Demo
            </Link>
          </button>
        </div>
    </main>
    )
  }
}