import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NewMovieForm.css';

export default class NewMovieForm extends Component {
  render() {
    return (
      <form id="newMovie-form">
        <div className="form-section">
          <label for="movie-title">Movie title: </label>
          <input type="text" name="movie-title" placeholder="" required></input>
        </div>
        <div class="form-section">
          <label for="comments-section">Comments: </label>
          <textarea name="comments-section" rows="10"></textarea>
        </div>
        <div class="form-section">
          <label for="rating">Movie rating: </label>
          <select type="number" name="rating">
            <option>1 star</option>
            <option>2 star</option>
            <option>3 star</option>
            <option>4 star</option>
            <option>5 star</option>
          </select>
        </div>
        <div class="form-section">
          <label class="favorite-label" for="favorite">Favorite:</label>
          <input type="checkbox" name="favorite" class="favorite-checkbox"></input>
        </div>
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
          <button>
            <Link to='/home/:userId'>Back</Link>
          </button>
      </form>
    )
  }
}