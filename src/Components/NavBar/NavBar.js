import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import UsersContext from '../../contexts/UserContext';
// import Logo from '../../images/Watchdog-Logo4.png';
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
        {/* <Link to='/home'>
          <img src={Logo} alt='Watchdog Logo' className='nav_bar_logo'></img>
        </Link> */}
        <Link to='/home'>
          <p className='nav_bar_logo_text'>Your Movies Here</p>
        </Link>
        {this.context.loggedIn || TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    )
  }
}