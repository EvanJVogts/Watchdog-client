import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class NewUserForm extends Component {
  render() {
    return (
      <form class='signin-form'>
        <div>
          <label htmlFor="username">Email</label>
          <input type="text" name='username' id='username' required/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name='password' id='password' required/>
        </div>
        <button type='submit'>Login</button>
        <Link to='/'>Back</Link>
      </form>
    )
  }
}