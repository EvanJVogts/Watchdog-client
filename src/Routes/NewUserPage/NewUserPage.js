import React, { Component } from 'react';
import NewUserForm from '../../components/NewUserForm/NewUserForm'
import './NewUserPage.css'

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
      <main>
        <header className='NewUser-title'>
          <h1>WatchDog</h1>
        </header>
        <section className="NewUserPage">
          <h2>Sign Up!</h2>
            <NewUserForm 
              onRegistrationSuccess={this.handleRegistrationSucess}
            />
        </section>
      </main>
    )
  }
}