import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import UsersContext from '../../contexts/UserContext';
import './NavBar.css';

export default class NavBar extends Component {

  static contextType = UsersContext;

  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    this.context.setLoggedIn('')
  }

  renderLoginLink() {
    return(
      <Link 
        to='/login'
        className='nav-login-button'>
          Log in
      </Link>
    )
  }
  renderLogoutLink() {
    return(
      <Link
        onClick={this.handleLogoutClick}
        to='/'
        className='nav-logout-button'>
          Logout
      </Link>
    )
  }
  render() {
    return (
      <nav role="navigation">
        <h4>
          <Link to='/home'>
            [WatchDog Logo]
          </Link>
        </h4>
        {this.context.loggedIn || TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    )
  }
}