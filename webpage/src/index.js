import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import Header from './Header';
import Resume from './Resume';

ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/resume" component={Resume}/>
      <Route path="/something"/>
    </Switch>
  </BrowserRouter> ),
  document.getElementById('root')
);
