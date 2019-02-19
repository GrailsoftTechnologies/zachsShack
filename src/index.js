import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <BrowserRouter basename={ process.env.PUBLIC_URL }>
    <App />
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
