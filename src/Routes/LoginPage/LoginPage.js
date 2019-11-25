import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import './LoginPage.css';

export default class LoginPage extends Component {
  render() {
    return (
      <main>
        <header>
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