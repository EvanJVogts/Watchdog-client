import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import LandingPage from '../../routes/LandingPage/LandingPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import NewUserPage from '../../routes/NewUserPage/NewUserPage';
import HomePage from '../../routes/HomePage/HomePage';
import ExpandedMoviePage from '../../routes/ExpandedMoviePage/ExpandedMoviePage';
import NewMoviePage from '../../routes/NewMoviePage/NewMoviePage';
import PrivateRoute from '../Utility/PrivateRoute';
import PublicOnlyRoute from '../Utility/PublicOnlyRoute'
import './App.css';

class App extends Component {
  state = {
    hasError: false
  };

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

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
                <PublicOnlyRoute
                  path={'/login'}
                  component={LoginPage}
                  />
                <PublicOnlyRoute
                  path={'/register'}
                  component={NewUserPage}
                  />
                <PrivateRoute
                  path={'/home'}
                  component={HomePage}
                  />
                <PrivateRoute
                  path={'/movie/:movieId'}
                  component={ExpandedMoviePage}
                  />
                <PrivateRoute
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
