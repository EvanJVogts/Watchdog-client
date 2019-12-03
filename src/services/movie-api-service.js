import TokenService from '../services/token-service'
import config from '../config'

const MovieApiService = {
  getMovies() {
    return fetch(`${config.API_ENDPOINT}/movies`, {
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getMovie(movieId) {
    return fetch(`${config.API_ENDPOINT}/movies/${movieId}`, {
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  addNewMovie(title, rating, comments, movieId, platform, favorite, seen) {
    return fetch(`${config.API_ENDPOINT}/movies`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        movieId: movieId,
        title: title,
        rating: rating,
        comments: comments,
        platform: platform,
        favorite: favorite,
        seen: seen,
      }),
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },
  editMovie(newTitle, newComments, newRating, movieId, newPlatform, newFavorite, newSeen) {
    return fetch(`${config.API_ENDPOINT}/movies/${movieId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        movieId: movieId,
        title: newTitle,
        rating: newRating,
        comments: newComments,
        platform: newPlatform,
        favorite: newFavorite,
        seen: newSeen,
      }),
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : ''
      )
  },
  deleteMovie(movieId) {
    return fetch(`${config.API_ENDPOINT}/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${TokenService.getAuthToken()}`,
      }
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : ''
    )
  },
}

export default MovieApiService