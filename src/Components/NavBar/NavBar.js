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
      <div>
        <Link 
          to='/login'
          className='nav-login-button'>
            Log in
        </Link>
        <Link to='/register' className='nav-register-button'>
          Get started
        </Link>
      </div>
    )
  }
  renderLogoutLink() {
    return(
      <div>
        <Link
          onClick={this.handleLogoutClick}
          to='/'
          className='nav-logout-button'>
            Logout
        </Link>
      </div>
    )
  }
  render() {
    return (
      <nav role="navigation">
        {/* <Link to='/home'>
          <img src={Logo} alt='Watchdog Logo' className='nav_bar_logo'></img>
        </Link> */}
        <Link to='/home'>
          <p className='nav_bar_logo_text'>WD</p>
        </Link>
        {this.context.loggedIn || TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    )
  }
}