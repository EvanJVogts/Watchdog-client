import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';

export default class LoginPage extends Component {
  render() {
    return (
      <main role="main">
        <header role="banner">
          <h1>WatchDog</h1>
          <h2>The movies you love!</h2>
        </header>
        <section>
          <LoginForm />
        </section>
    </main>
    )
  }
}