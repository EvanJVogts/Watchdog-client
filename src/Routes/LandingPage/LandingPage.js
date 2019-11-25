import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import UserContext from '../../contexts/UserContext';
import './LandingPage.css'

export default class LandingPage extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
  }
  renderLogoutLink() {
    return(
      <div className='Landing_logged-in'>
        <section>
          <Link to='/home'>
            Homepage
          </Link>
        </section>
      </div>
    )
  }
  renderLoginLink() {
    return (
      <div className='Landing_logged-out'>
        <Link to='/login' className='button'>
          Log in
        </Link>
        <Link to='/register' className='button'>
          New User?
        </Link>
        <Link to='/home/:userId' className='button'>
              Demo
        </Link>
      </div>
    )
  }
  render() {
    return (
      <main role="main">
        <header className='landing-title'>
          <h1>WatchDog</h1>
        </header>
        <div className='landing-slogan'>
          <h2>
              The movies you love!
          </h2>
        </div>
        <div className='landing-description'>
          <p>An app to keep track of the movies you have seen, rate them, comment about them, and share your favorites with others.</p>
        </div>
        <div className='landing-buttons'>
          {this.context.loggedIn
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </div>
    </main>
    )
  }
}