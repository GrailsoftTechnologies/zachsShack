import React, { Component } from 'react';
import Router from './components/Router/index.js';
import AltNavBar from './components/AltNavBar';
import Footer from './components/Footer';
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
