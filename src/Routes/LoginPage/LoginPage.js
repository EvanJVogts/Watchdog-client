import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import './LoginPage.css';

export default class LoginPage extends Component {
  render() {
    return (
      <>
        <section className='login-title-section'>
          <header className='login-title'>
            <h1>WatchDog</h1>
          </header>
        </section>
        <section className='login-page'>
          <div className='login-box'>
            <h2 className='login-slogan'>
                Log into an existing account!
            </h2>
            <LoginForm 
              history = {this.props.history}/>
          </div>
        </section>
    </>
    )
  }
}