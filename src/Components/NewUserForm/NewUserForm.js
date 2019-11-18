import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class NewUserForm extends Component {
  render() {
    return (
      <form className="NewUserForm">
        <div>
          <label for="first-name">First name</label>
          <input placeholder='First Name' type="text" name='first-name' id='first-name' />
        </div>
        <div>
          <label for="last-name">Last name</label>
          <input type="text" name='last-name' id='last-name' placeholder='Last Name' />
        </div>
        <div>
          <label for="username">Email</label>
          <input type="text" name='username' id='username' />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" name='password' id='password' />
        </div>
        <button type='submit'>Submit</button>
        <Link to='/'>Back</Link>
      </form>
    )
  }
}