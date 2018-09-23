import React, {Component} from 'react';
import {Route, Switch} from 'react-router';

import HomePage from '../containers/Home';
import Users from '../containers/Users';
import AddUser from '../containers/AddUser';

class RouterComponent extends Component {
  render() {
    return (
      <div style={{height: '100%'}}>
        <Switch>
          <Route exact path={'/'} component={HomePage}/>
          <Route path={'/users'} component={Users}/>
          <Route path={'/add-user'} component={AddUser}/>
        </Switch>
      </div>
    )
  }
}

export default RouterComponent;