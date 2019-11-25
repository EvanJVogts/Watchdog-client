import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import { Button, Input } from '../Utility/Utility';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import './LoginForm.css';

export default class NewUserForm extends Component {
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
        <div className='email'>
          <label htmlFor="LoginForm_email">Email</label>
          <Input 
            type="text" 
            name='email' 
            id='LoginForm_email' 
            required>
          </Input>
        </div>
        <div className='password'>
          <label htmlFor="LoginForm_password">Password</label>
          <Input 
            type='password'
            name='password' 
            id='LoginForm_password' 
            required>
          </Input>
        </div>
        <Button 
          type='submit'>
            Login
        </Button>
        <Link 
          to='/'
          className='Button'>
            Back
        </Link>
      </form>
    )
  }
}