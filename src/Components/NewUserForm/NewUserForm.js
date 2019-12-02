import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Button, Input, Required } from '../Utility/Utility';
import AuthApiService from '../../services/auth-api-service';
import './NewUserForm.css';

export default class NewUserForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  }

  state = { error: null }

  handleSubmit = e => {
    e.preventDefault()
    const { first_name, last_name, email, password } = e.target
    this.setState({ error: null })
    AuthApiService.postUser({
      first_name: first_name.value,
      last_name: last_name.value,
      email: email.value,
      password: password.value,
    })
      .then(user => {
        first_name.value = ''
        last_name.value = ''
        email.value = ''
        password.value = ''
        this.props.onRegistrationSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
    console.log('New user form submitted')
    // console.log({ first_name, last_name, email, password })
  }

  render() {
    const { error } = this.state
    return (
      <form 
        className="NewUserForm"
        onSubmit={this.handleSubmit}
      >

        <div role='alert'>
          {error && <p className='error'>Something went wrong!</p>}
        </div>

        <div className='first_name'>
          <label 
            htmlFor='NewUserForm_first_name'
            className='first_name_label'>
            First name
          </label>
          <input
            type="text" 
            name='first_name' 
            id='NewUserForm_first_name' 
            required>
          </input>
        </div>

        <div className='last_name'>
          <label 
            htmlFor="NewUserForm_last_name"
            className='last_name_label'>
            Last name
          </label>
          <input
            type="text" 
            name='last_name' 
            id='NewUserForm_last_name' 
            required>
          </input>
        </div>
        
        <div className='email'>
          <label 
            htmlFor="NewUserForm_email"
            className='email_label'>
            Email
          </label>
          <input
            type="email" 
            name='email' 
            id='NewUserForm_email' 
            required>
          </input>
        </div>

        <div className='password'>
          <label 
            htmlFor="NewUserForm_password"
            className='password_label'>
            Password
          </label>
          <input
            type="password" 
            name='password' 
            id='NewUserForm_password' 
            required>
          </input>
        </div>

        <button 
          type='submit' 
          className='signup_submit_button'>
            Submit
        </button>
        <Link 
          to='/'>
            <button 
              className='signup_back_button'>
                Back
            </button>
        </Link>
        <Link
          to='/login'
          className='signup-login-link'>
            <button 
              className='signup-login-button'>
                Already have an account?
            </button>
        </Link>
      </form>
    )
  }
}