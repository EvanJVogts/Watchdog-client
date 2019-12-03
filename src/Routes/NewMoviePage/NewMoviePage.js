import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Backarrow1 from '../../images/backarrow1.png';
import NewMovieForm from '../../components/NewMovieForm/NewMovieForm';
import './NewMoviePage.css';

export default class NewMoviePage extends Component {
  render() {
    return (
      <>
        <header className='new_movie_page_title'>
          <h1>New Movie</h1>
        </header>
        <section className='new_movie_section'>
          <div className='new_movie_render'>
            <Link to='/home'>
              <img 
                src={Backarrow1} 
                alt='back arrow'
                className='newMovie_back-arrow1'/>
            </Link>
            <NewMovieForm 
              history={this.props.history}/> 
          </div>
        </section>
      </>
    )
  }
}