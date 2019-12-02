import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import UsersContext from '../../contexts/UserContext';
import doggo from '../../images/doggo.png';
import './LandingPage.css';

export default class LandingPage extends Component {

  static contextType = UsersContext;

  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    this.context.setLoggedIn('')
  }
  renderLogoutLink() {
    return(
      <div className='Landing_logged-in'>
        <Link to='/home' className='Landing_logged-in_Button'>
          Homepage
        </Link>
      </div>
    )
  }
  renderLoginLink() {
    return (
      <div className='Landing_logged-out'>
        <Link to='/login' className='Landing_Login_Button'>
          Log in
        </Link>
        <Link to='/register' className='Landing_Register_Button'>
          New User?
        </Link>
      </div>
    )
  }
  render() {
    return (
      <>
      <section className='landing-title-section'>
        <header className='landing-title'>
          <h1 className='landing-title-text'>WatchDog</h1>
        </header>
        <div className='landing-slogan'>
          <h2>
              The movies you love!
          </h2>
        </div>
        <img 
          src={doggo} 
          alt='a watchdog'
          className='landing-photo'>
        </img>
      </section>
      <section className='landing-description-section'>
        <div className='landing-description'>
          <h4 className='c1r1'>Log your movies</h4>
            <p className='c1r2'>
              Create a detailed list of all the movies have seen, and any movies you plan on seeing.
              Whenever you hear about a new movie, you can easily add it to your list. Once you watch a movie you had planned on seeing, you can easily mark it as watched.
            </p>
          <h4 className='c2r1'>Rate and comment</h4>
            <p className='c2r2'>
              With the ability to rate all the movies you have seen, you can sort all your movies to generate a list of your favorites. You can also write any comments, notes, or anything that comes to your head concerning the movie.
            </p>
          <h4 className='c3r1'>View your list</h4>
            <p className='c3r2'>
              View a detailed list of all the movies you have seen, and all the movies you plan to see. With WatchDog, you never have to forget which movies 
              you planned on watching, where you are able to watch them, and what you thought of them. 
            </p>
        </div>
      </section>
      <section className='landing-buttons-section'>
        <div className='landing-buttons'>
          {this.context.loggedIn || TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </div>
      </section>
      <section className='demo-info'>
        <p>If you want to try out WatchDog before signing up, feel free to log into the demo account using the email: TestEmail@gmail.com and password: Test12345! </p>
      </section>
    </>
    )
  }
}