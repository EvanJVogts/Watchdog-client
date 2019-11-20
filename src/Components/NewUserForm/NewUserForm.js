import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button, Input, Required } from '../Utility/Utility'

export default class NewUserForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  }

  state = {
    error: null
  }

  handleSubmit = event => {
    event.preventDefault()
    const { first_name, last_name, email, user_name, password } = event.target
    console.log('New user form submitted')
    console.log({ first_name, last_name, email, user_name, password })
    first_name.value = ''
    last_name.value = ''
    email.value = ''
    user_name.value = ''
    password.value = ''
    this.props.onRegistrationSuccess()
  }

  render() {
    const { error } = this.state
    return (
      <form 
        className="NewUserForm"
        onSubmit={this.handleSubmit}
      >

        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>

        <div className='first_name'>
          <label htmlFor='NewUserForm_first_name'>
            First name <Required />
          </label>
          <Input
            type="text" 
            name='first-name' 
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
            name='last-name' 
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
            type="text" 
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