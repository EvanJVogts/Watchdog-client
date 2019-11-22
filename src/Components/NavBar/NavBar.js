import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './NavBar.css';

export default class NavBar extends Component {
  render() {
    return (
      <nav role="navigation">
        <h4>
          <Link to='/'>
            [WatchDog Logo]
          </Link>
        </h4>
      </nav>
    )
  }
}