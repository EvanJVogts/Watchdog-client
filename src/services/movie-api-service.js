import TokenService from '../services/token-service'
import config from '../config'

const MovieApiService = {
  getMovies() {
    console.log(TokenService.getAuthToken())
    return fetch(`${config.API_ENDPOINT}/movies`, {
      headers: {
        // 'authorization': `bearer ${TokenService.getAuthToken()}`,
        'authorization': `bearer dummy-api-token`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getMovie(movieId) {
    console.log(TokenService.getAuthToken());
    return fetch(`${config.API_ENDPOINT}/movies/${movieId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getMovieComments(movieId) {
    return fetch(`${config.API_ENDPOINT}/movies/${movieId}/comments`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postComment(movieId, text) {
    return fetch(`${config.API_ENDPOINT}/comments`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        article_id: movieId,
        text,
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