import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import Home from '../Home';
// import Menu from '../Menu';
import AltMenu from '../AltMenu';
import About from '../About';
import Contact from '../Contact';
import NotFound from '../NotFound';
import './styles.css';

class Router extends Component {
  render() {
		window.scrollTo(0,0);
    return (
      <div className="Router">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/menu" component={AltMenu}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default Router;
