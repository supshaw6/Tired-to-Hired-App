/* following a tutorial from https://www.digitalocean.com/community/tutorials/how-to-set-up-a-react-project-with-create-react-app */

import React from 'react';            // pulling in code to convert JSX (HTML-like elements) to Javascript
import ReactDOM from 'react-dom';     // connects React code to base elements
import './index.css';                 // you need to import this file to include CSS code in final compiled bundle
import App from './App';
import * as serviceWorker from './serviceWorker';

// the id "root" indicates where React should inject code (in index.html file)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
