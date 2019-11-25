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

  // setMovies = movies => {
  //   this.setState({
  //     movies,
  //     error: null,
  //   })
  // }

  // addMovie = movie => {
  //   this.setState({
  //     movies: [ ...this.state.movies, movie ],
  //   })
  // }

  // deleteMovie = movieId => {
  //   const newMovies = this.state.movies.filter(movie =>
  //     movie.id !== movieId
  //     )
  //     this.setState({
  //       movies: newMovies
  //     })
  // }

  // componentDidMount() {
  //   fetch(config.API_ENDPOINT, {
  //     method: 'GET',
  //     headers: {
  //       'content-type': 'application/json',
  //       'Authorization': `Bearer dummy-api-token`
  //       // 'Authorization': `Bearer ${config.API_KEY}`
  //     }
  //   })
  //   .then(response => {
  //     if (!response.ok) {
  //       return response.json().then(error => Promise.reject(error))
  //     }
  //     return response.json()
  //   })
  //   .then(this.setMovies)
  //   .catch(error => {
  //     console.error(error)
  //     this.setState({ error })
  //   })
  // }

  // updateMovie = updatedMovie => {
  //   this.setState({
  //     movies: this.state.movies.map(movie =>
  //       (movie.id !== updatedMovie.id) ? movie : updatedMovie)
  //   })
  // }

  // setMovieList = (moviesList) => {
  //     this.setState ({
  //       movies: moviesList
  //     })
  //   }

  render() {
    // const contextValue = {
    //   movies: this.state.movies,
    //   addMovie: this.addMovie,
    //   deleteMovie: this.deleteMovie,
    //   updatedMovie: this.updateMovie,
    //   setMovieList: this.setMovieList,
    // }
    
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
