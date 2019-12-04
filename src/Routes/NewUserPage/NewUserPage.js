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
    history.push('/home')
  }

  render() {
    return (
      <>
        <section className='signup-title-section'>
          <header className='NewUser-title'>
            <h1>WatchDog</h1>
          </header>
        </section>
        <section className="NewUserPage">
          <div className='NewUserBox'>
            <h2 className='signup-form-title'>Sign Up!</h2>
              <NewUserForm 
                onRegistrationSuccess={this.handleRegistrationSucess}
              />
          </div>
        </section>
      </>
    )
  }
}