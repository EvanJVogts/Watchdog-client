import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MoviesContext from '../../contexts/MoviesContext';
import MovieApiService from '../../services/movie-api-service';
import MovieListItem from '../../components/MovieListItem/MovieListItem';
import './HomePage.css'

export default class HomePage extends Component {

  static contextType = MoviesContext

  componentDidMount() {
    this.context.clearError()
    MovieApiService.getMovies()
      .then(this.context.setMovieList)
      .catch(this.context.setError)
  }
    renderMovies() {
    const { movieList = [] } = this.context
    return movieList.map(movie =>
      <MovieListItem
        key={movie.id}
        movie={movie}
        />
    )
  }

  render() {
    return (
      <main role="main">
      <header>
        <h1>Homepage</h1>
      </header>
      {/* <section>
        <h2>My Favorite Movies</h2>
        <p>[List of favorite movies]</p>
      </section> */}
      <section>
        <h2>All my movies</h2>
        <ul className="movieList">
          {this.renderMovies()}
        </ul>
        <Link to='/add'>Add new movie!</Link>
      </section>
    </main>
    )
  }
}