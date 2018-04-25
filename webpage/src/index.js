import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import Header from './Header';

ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/resume"/>
      <Route path="/something"/>
    </Switch>
  </BrowserRouter> ),
  document.getElementById('root')
);
