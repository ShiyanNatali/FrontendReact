import React, { Component } from 'react';
import './App.css';
import photo from './photo.png';

export default class App extends Component {
  render() {
     return <div className = 'App'>
        <div className = 'App-image'>
          <img src = { photo }></img>
        </div>
        <div className = 'App-content'>
          Hi, I'm Natali.
          I am a techical support engineer  
          living in Dnipro. I am a fan of cats, soft toys and drawing. 
          I am also interested in education because I want to 
          change my professional direction in work.
        </div>
      </div>;
  }
}
