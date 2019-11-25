import React, { Component } from 'react'

const UserContext = React.createContext ({
  loggedIn: '',
  setLoggedIn: () => {},
})

export default UserContext;

export class UserContextProvider extends Component {

  state = { loggedIn: '' }

  setLoggedIn = (loggedIn) => {
    this.setState({ loggedIn })
  }
  
  render() {
    const value = {
      loggedIn: this.state.loggedIn,
      setLoggedIn: this.setLoggedIn
    }
    return (
      <UserContext.Provider value={value}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}