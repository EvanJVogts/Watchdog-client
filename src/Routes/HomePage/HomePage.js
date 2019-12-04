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
    MovieApiService.getFavoriteMovies()
      .then(this.context.setFavoriteMovieList)
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
  renderFavoriteMovies() {
    const { favoriteMovieList = [] } = this.context
    return favoriteMovieList.map(movie => 
      <MovieListItem
        key={movie.id}
        movie={movie}
      />
    )
  }

  render() {
    return (
      <>
        <section className='homepage_title-section'>
          <header className='homepage_title'>
            <h1 className='homepage_title-text'>Homepage</h1>
          </header>
        </section>
        <section>
          <h2>My Favorite Movies</h2>
          {this.renderFavoriteMovies()}
        </section>
        <section className='homepage_all_movie_section'>
          <div className='homepage_all_movies'>
            <fieldset className='all_movies_fieldset'>
            <legend className='all_movies_legend'>
              <h2 className='all_movies_legend_title'> All my movies </h2>
            </legend>
            <ul className="movieList">
              {this.renderMovies()}
            </ul>
          </fieldset>
          <Link to='/add' className='add_new_movie_button'>Add new movie!</Link>
          </div>
        </section>
      </>
    )
  }
}