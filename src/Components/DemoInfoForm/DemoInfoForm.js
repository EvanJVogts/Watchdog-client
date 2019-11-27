import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
// import { Button, Input } from '../Utility/Utility';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import './DemoInfoForm.css';

export default class DemoInfoForm extends Component {
  state = { error: null }

  static contextType = UserContext;

  handleSubmitJwtAuth = event => {
    event.preventDefault()
    this.setState({ error: null })
    const { email, password } = event.target

    const userName = email.value

    AuthApiService.postLogin({
      email: email.value,
      password: password.value,
    })
      .then(res => {
        email.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
        this.context.setLoggedIn(userName)
        console.log('Login success!')
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const { error } = this.state
    return (
      <form 
        className='signin-form'
        onSubmit={this.handleSubmitJwtAuth}
      >
        <div role='alert'>
          {error && <p className='error'>Something went wrong!</p>}
        </div>
          <div className='login-email-input'>
            <label htmlFor="LoginForm_email">Email</label>
            <input 
              type="text" 
              name='email' 
              id='LoginForm_email'
              defaultValue='TestEmail123@gmail.com' 
              required>
            </input>
          </div>
          <div className='login-password-input'>
            <label htmlFor="LoginForm_password">Password</label>
            <input 
              type='password'
              name='password' 
              id='LoginForm_password'
              defaultValue='Test12345!' 
              required>
            </input>
          </div>
        <button 
          type='submit'
          className='login-submit-button'>
            Login
        </button>
        <Link 
          to='/'
          className='login-back-button'>
            Back
        </Link>
      </form>
    )
  }
}