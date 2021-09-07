import React, { Component } from 'react';
import Footer  from './components/Footer';
import Router from './components/Router/index.js';
import AltNavBar from './components/AltNavBar';
import './App.css';
import Background from './img/background.jpg'
import MobileBackground from './img/mobilebackground.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AltNavBar text="white" background="red" hovercolor="black" buttoncolor="warning"/>
        <Router color="white" background="red" hovercolor="black" backgroundImage={Background} mobileBackgroundImage={MobileBackground}/>
        <Footer text="white" background="red" hovercolor="black"/>
      </div>
    );
  }
}

export default App;
