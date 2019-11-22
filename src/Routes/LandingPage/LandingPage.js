import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import './LandingPage.css'

export default class LandingPage extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
  }
  renderLogoutLink() {
    return(
      <div className='Landing_logged-in'>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
            Logout
        </Link>
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
        <header role="banner">
          <h1>WatchDog</h1>
          <h2>The movies you love!</h2>
        </header>
        <div>
          <p>An app to keep track of the movies you have seen, rate them, comment about them, and share your favorites with others.</p>
        </div>
        <div className='buttons'>
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </div>
    </main>
    )
  }
}