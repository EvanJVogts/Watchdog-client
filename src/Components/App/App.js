import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import LandingPage from '../../Routes/LandingPage/LandingPage';
import LoginPage from '../../Routes/LoginPage/LoginPage';
import NewUserPage from '../../Routes/NewUserPage/NewUserPage';
import HomePage from '../../Routes/HomePage/HomePage';
import ExpandedMoviePage from '../../Routes/ExpandedMoviePage/ExpandedMoviePage';
import NewMoviePage from '../../Routes/NewMoviePage/NewMoviePage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="Nav_bar">
          <NavBar />
        </nav>
        <main className="App_main">
          <Switch>
            <Route
              exact
              path={'/'}
              component={LandingPage}
              />
            <Route
              path={'/login'}
              component={LoginPage}
              />
            <Route
              path={'/register'}
              component={NewUserPage}
              />
            <Route
              path={'/home/:userId'}
              component={HomePage}
              />
            <Route
              path={'/home/:movieId'}
              component={ExpandedMoviePage}
              />
            <Route
              path={'/add'}
              component={NewMoviePage}
              />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
