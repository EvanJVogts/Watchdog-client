import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import './LoginPage.css';

export default class LoginPage extends Component {
  render() {
    return (
      <main>
        <header className='login-title'>
          <h1>WatchDog</h1>
        </header>
        <div className='login-slogan'>
          <h2>
              The movies you love!
          </h2>
        </div>
        <section className='login-form-section'>
          <h3>
            Login
          </h3>
          <LoginForm 
            history = {this.props.history}/>
        </section>
    </main>
    )
  }
}