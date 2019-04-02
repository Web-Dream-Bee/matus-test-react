import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import store from "./store/index";

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import App from './components/App/App';
import NotFound from './components/App/NotFound';

import Home from './components/Home/Home';

import './styles/styles.scss';

render((
  <Provider store={store}>
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route component={NotFound}/>
        </Switch>
      </App>
    </Router>
  </Provider>
), document.getElementById('app'));
