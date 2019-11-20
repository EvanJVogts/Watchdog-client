import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieContext from '../../contexts/MoviesContext';
import MovieApiService from '../../services/movie-api-service';
import MovieListItem from '../../components/MovieListItem/MovieListItem';
import './HomePage.css'

export default class HomePage extends Component {

  static contextType = MovieContext

  componentDidMount() {
    MovieApiService.getMovies()
      .then((data) => {
        // console.log(data, 'hello movies')
        this.context.setMovieList(data)
      })
      .catch(this.context.setError)
  }

  renderMovies() {
    // console.log(this.context)
    // console.log('rendering movies')
    const movieList = this.context.movies
    // console.log(movieList)
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
      <section>
        <h2>My Favorite Movies</h2>
        <p>[List of favorite movies]</p>
      </section>
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