import React, { Component } from 'react';
import { Route, Switch } from 'react-router';

import HomePage from '../containers/Home'

class RouterComponent extends Component {
    render () {
        return (
            <div style={{ height: '100%' }}>
                <Switch>
                    <Route exact path={'/'} component={HomePage} />
                </Switch>
            </div>
        )
    }
}

export default RouterComponent;