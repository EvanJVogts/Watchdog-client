import React, { Component } from 'react';
import NewUserForm from '../../components/NewUserForm/NewUserForm'

export default class NewUserPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleRegistrationSucess = user => {
    const { history } = this.props
    history.push('/login')
  }

  render() {
    return (
      <section className="NewUserPage">
        <h2>Sign Up!</h2>
        <NewUserForm 
          onRegistrationSuccess={this.handleRegistrationSucess}
        />
      </section>
    )
  }
}