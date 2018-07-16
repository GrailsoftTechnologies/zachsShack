import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import 'react-bootstrap';
import 'typeface-roboto';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';


ReactDOM.render(
  <HashRouter basename={ process.env.PUBLIC_URL }>
    <App />
  </HashRouter>, document.getElementById('root'));
