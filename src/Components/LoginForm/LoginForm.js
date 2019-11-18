import React, { Component } from 'react';

export default class NewUserForm extends Component {
  render() {
    return (
      <form class='signin-form'>
        <div>
          <label for="username">Email</label>
          <input type="text" name='username' id='username' />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" name='password' id='password' />
        </div>
        <button type='submit'>Sign in</button>
        <button type='submit'>Back</button>
      </form>
    )
  }
}