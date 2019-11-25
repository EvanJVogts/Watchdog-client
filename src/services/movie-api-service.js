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
  addNewMovie(title, rating, comments) {
    return fetch(`${config.API_ENDPOINT}/movies`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        title: title,
        rating: rating,
        comments: comments,
      }),
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  }
}

export default MovieApiService