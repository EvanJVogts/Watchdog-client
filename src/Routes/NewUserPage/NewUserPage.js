import React, { Component } from 'react';
import NewUserForm from '../../Components/NewUserForm/NewUserForm'

export default class NewUserPage extends Component {
  render() {
    return (
      <section className="NewUserPage">
        <h2>Sign Up!</h2>
        <NewUserForm />
      </section>
    )
  }
}