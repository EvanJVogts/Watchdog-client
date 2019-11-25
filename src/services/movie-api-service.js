import TokenService from '../services/token-service'
import config from '../config'

const MovieApiService = {
  getMovies() {
    // console.log(TokenService.getAuthToken())
    return fetch(`${config.API_ENDPOINT}/movies`, {
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
        // 'Authorization': `bearer dummy-api-token`,
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
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
        // 'Authorization': `bearer dummy-api-token`
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
  // getMovieComments(movieId) {
  //   return fetch(`${config.API_ENDPOINT}/movies/${movieId}/comments`, {
  //     headers: {
  //       'Authorization': `bearer ${TokenService.getAuthToken()}`,
  //       // 'Authorization': `bearer dummy-api-token`

  //     },
  //   })
  //     .then(res =>
  //       (!res.ok)
  //         ? res.json().then(e => Promise.reject(e))
  //         : res.json()
  //     )
  // },
  // postComment(movieId, text) {
  //   return fetch(`${config.API_ENDPOINT}/comments`, {
  //     method: 'POST',
  //     headers: {
  //       'content-type': 'application/json',
  //       'Authorization': `bearer ${TokenService.getAuthToken()}`,
  //     },
  //     body: JSON.stringify({
  //       article_id: movieId,
  //       text,
  //     }),
  //   })
  //     .then(res =>
  //       (!res.ok)
  //         ? res.json().then(e => Promise.reject(e))
  //         : res.json()
  //     )
  // }
}

export default MovieApiService