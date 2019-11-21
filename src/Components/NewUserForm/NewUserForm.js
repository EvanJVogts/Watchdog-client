import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, Required } from '../Utility/Utility';
import AuthApiService from '../../services/auth-api-service';

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
    console.log({ first_name, last_name, email, password })
  }

  render() {
    const { error } = this.state
    return (
      <form 
        className="NewUserForm"
        onSubmit={this.handleSubmit}
      >

        <div role='alert'>
          {error && <p className='red'>Something went wrong!</p>}
        </div>

        <div className='first_name'>
          <label htmlFor='NewUserForm_first_name'>
            First name <Required />
          </label>
          <Input
            type="text" 
            name='first_name' 
            id='NewUserForm_first_name' 
            required>
          </Input>
        </div>

        <div className='last_name'>
          <label htmlFor="NewUserForm_last_name">
            Last name <Required />
          </label>
          <Input
            type="text" 
            name='last_name' 
            id='NewUserForm_last_name' 
            required>
          </Input>
        </div>

        <div className='email'>
          <label htmlFor="NewUserForm_email">
            Email <Required />
          </label>
          <Input
            type="text" 
            name='email' 
            id='NewUserForm_email' 
            required>
          </Input>
        </div>

        <div className='password'>
          <label htmlFor="NewUserForm_password">
            Password <Required />
          </label>
          <Input
            type="password" 
            name='password' 
            id='NewUserForm_password' 
            required>
          </Input>
        </div>

        <Button type='submit'>Submit</Button>

        <Link to='/'>Back</Link>

      </form>
    )
  }
}