import React from 'react';

import {HashRouter as Router, Route, Switch} from  'react-router-dom';
import City from './views/City';
import Home from './views/Home';
export default class App extends React.Component{
  render () {
    return (
     <Router>
       <Switch>
          <Route path='/city' component={City}></Route>
          <Route path='/' component={Home}></Route>
       </Switch>

     </Router>
    )
  }
}
