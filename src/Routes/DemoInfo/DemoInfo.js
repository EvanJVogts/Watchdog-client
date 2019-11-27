import React, { Component } from 'react';
import DemoInfoForm from '../../components/DemoInfoForm/DemoInfoForm';
import './DemoInfo.css';

export default class DemoInfo extends Component {
  render() {
    return (
      <main>
        <header className='demo-title'>
          <h1>WatchDog</h1>
        </header>
        <div className='demo-slogan'>
          <h2>
              Demo Version
          </h2>
        </div>
        <section className='demo-form-section'>
          <DemoInfoForm />
        </section>
    </main>
    )
  }
}