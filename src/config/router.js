import React, {Component} from 'react';
import {Route, Switch} from 'react-router';

import Home from '../containers/Home';
import Login from '../containers/Login';
import CandleStick from '../containers/CandleStick';

import PrivateRoute from '../containers/PrivateRoute';

class RouterComponent extends Component {
  render() {
    return (
      <div style={{height: '100%'}}>
        <Switch>
          <PrivateRoute path={'/chart'} component={CandleStick}/>
          <Route path={'/login'} component={Login}/>
          <Route path={'/'} component={Home} />
        </Switch>
      </div>
    )
  }
}

export default RouterComponent;