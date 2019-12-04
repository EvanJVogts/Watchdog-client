import React, { Component } from 'react';
import SingleMovieContext from '../../contexts/SingleMovieContext';
import MovieApiService from '../../services/movie-api-service';
import { Link } from 'react-router-dom'
import Applelogo from '../../images/apple-logo.png';
import Cablelogo from '../../images/cable-logo.png';
import Cbslogo from '../../images/cbs-logo.png';
import Disneylogo from '../../images/disney-logo.png';
import Hbologo from '../../images/hbo-logo.png';
import Hululogo from '../../images/hulu-logo.png';
import Netflixlogo from '../../images/netflix_logo.png';
import Playstationlogo from '../../images/playstation-logo.png';
import Primelogo from '../../images/prime_logo.png';
import Showtimelogo from '../../images/showtime-logo.png';
import Slinglogo from '../../images/sling-logo.png';
import Starzlogo from '../../images/starz-logo.png';
import Youtubelogo from '../../images/youtube-logo.png';
import Backarrow1 from '../../images/backarrow1.png';
import './ExpandedMoviePage.css'

function MovieRating ({ rating }) {
  return (
    <p className='expanded_rating'>{rating} Stars</p>
  )
}

function MovieComments ({ comments }) {
  return (
    <p className='expanded_comments'>{comments}</p>
  )
}

// function MovieFavorite ({ favorite }) {
//   if (favorite === true) {
//     return (
//       <p>This movie is one of your favorites!</p>
//     )
//   } else {
//     return (
//       <p></p>
//     )
//   }
// }

// function MovieSeen ({ seen }) {
//   if (seen === true) {
//     return (
//       <p></p>
//     )
//   } else {
//     return (
//       <p>You haven't seen this movie yet.</p>
//     )
//   }
// }

function MoviePlatform ({ platform }) {
  if (platform === 'Netflix') {
    return (
      <img src={Netflixlogo} alt='Netflix logo' className='platform-logo'/>
    )
  } if (platform === 'Hulu') {
    return (
      <img src={Hululogo} alt='Hulu logo' className='platform-logo'/>
    )
  } if (platform === 'HBO') {
    return (
      <img src={Hbologo} alt='HBO logo' className='platform-logo'/>
    )
  } if (platform === 'Showtime') {
    return (
      <img src={Showtimelogo} alt='Showtime logo' className='platform-logo'/>
    )
  } if (platform === 'Starz') {
    return (
      <img src={Starzlogo} alt='Starz logo' className='platform-logo'/>
    )
  } if (platform === 'Disney+') {
    return (
      <img src={Disneylogo} alt='Disney plus logo' className='platform-logo'/>
    )
  } if (platform === 'Amazon Prime') {
    return (
      <img src={Primelogo} alt='Amazon Prime logo' className='platform-logo'/>
    )
  } if (platform === 'Sling TV') {
    return (
      <img src={Slinglogo} alt='Sling TV logo' className='platform-logo'/>
    )
  } if (platform === 'YouTube') {
    return (
      <img src={Youtubelogo} alt='YouTube logo' className='platform-logo'/>
    )
  } if (platform === 'Cable Provider') {
    return (
      <img src={Cablelogo} alt='Cable logo' className='platform-logo'/>
    )
  } if (platform === 'Playstation Vue') {
    return (
      <img src={Playstationlogo} alt='Playstation Vue logo' className='platform-logo'/>
    )
  } if (platform === 'Apple TV') {
    return (
      <img src={Applelogo} alt='Apple TV logo' className='platform-logo'/>
    )
  } if (platform === 'CBS All Access') {
    return (
      <img src={Cbslogo} alt='CBS All Access logo' className='platform-logo'/>
    )
  } else {
    return (
      <p className='platform-logo'></p>
    )
  }
}

export default class ExpandedMoviePage extends Component {

  static defaultProps = {
    match: { params: {} },
  }

  static contextType = SingleMovieContext

  componentDidMount() {
    const { movieId } = this.props.match.params
    this.context.clearMovie()
    this.context.clearError()
    MovieApiService.getMovie(movieId)
      .then(movie => {
        return movie
      })
      .then(this.context.setMovie)
      .catch(this.context.setError)
  }

  renderMovie() {
    const {movie} = this.context
    return <>
      <h2 className='expanded_title'>{movie.title}</h2>
      {/* <MovieSeen seen={movie.seen} /> */}
      <MoviePlatform platform={movie.platform} />
      <fieldset className='expanded_movies_fieldset'>
        <MovieComments comments={movie.comments} />
      </fieldset>
      {/* <MovieFavorite favorite={movie.favorite} /> */}
      <MovieRating rating={movie.rating} />
    </>
  }

  render() {
    const { movie } = this.context
    return (
      <>
        <section className='expanded_render_section'>
          <div className='expanded_render'>
            <Link to='/home'>
              <img 
                src={Backarrow1} 
                alt='back arrow'
                className='expanded_back-arrow1'/>
            </Link>
            {this.renderMovie()}
            <div className='expanded_buttons'>
              <Link to={`/edit/${movie.id}`} 
                className='expanded_movie_edit_button'>
                  Edit
              </Link>
              <Link to={`/delete/${movie.id}`} 
                className='expanded_movie_delete_button'>
                  Delete
              </Link>
            </div>
          </div>
        </section>
      </>
    )
  }
}