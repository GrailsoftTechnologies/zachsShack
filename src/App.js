import React, { Component } from 'react';
import { Footer } from 'grailsoft-modules';
import Router from './components/Router/index.js';
import AltNavBar from './components/AltNavBar';
import './App.css';
import Background from './img/background.jpg'
import MobileBackground from './img/mobilebackground.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AltNavBar color="black" background="red" hovercolor="white" buttoncolor="warning"/>
        <Router color="white" background="red" hovercolor="black" backgroundImage={Background} mobileBackgroundImage={MobileBackground}/>
        <Footer color="white" background="black" hovercolor="grey"/>
      </div>
    );
  }
}

export default App;
