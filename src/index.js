import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./store/store";
import {BrowserRouter as Router} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Provider store={store}>
              <App className='app' />
          </Provider>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


