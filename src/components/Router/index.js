import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import rgba from 'rgba-convert';
import Home from '../Home';
import AltMenu from '../AltMenu';
import About from '../About';
import Contact from '../Contact';
import NotFound from '../NotFound';
import './styles.css';

class Router extends Component {
  render() {
		window.scrollTo(0,0);
    const colorarray = rgba(this.props.background);
    const background = "rgba(" + colorarray[0] + ", " + colorarray[1] + ", " + + colorarray[2] + ", 0.8)"
    return (
      <div className="Router" style={{color: this.props.text, backgroundColor: background, backgroundImage: "url(" + this.props.backgroundImage + ")"}}>
        <style>
          {`
            .Router a {
              color: ` + this.props.text + `!important;
            }

            .Router a:hover {
              border-bottom: 1px ` + this.props.hovercolor + ` solid;
              color: ` + this.props.hovercolor + `!important;
              text-decoration: none;
            }

            .Router hr {
              border-top: 1px solid ` + this.props.text + `;
            }

            @media (max-width: 576px){
            	.Router {
            		background-image: url(` + this.props.mobileBackgroundImage + `);
            	}
            }

            @media (min-width: 577px){
            	.Router {
            		background-image: url(` + this.props.backgroundImage + `);
            	}
            }
          `}
        </style>
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

Router.defaultProps = {
  text: "white",
  background: "black",
  hovercolor: "grey",
  backgroundImage: '../../img/background.jpg',
  mobileBackgroundImage: '../../img/mobilebackground.jpg'
}

export default Router;
