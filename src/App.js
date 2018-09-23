import React, {Component} from 'react';

// whole structure including header, footer and routers
import Layouts from './config/Layout';

class AppContainer extends Component {
  render() {
    return (
      <Layouts/>
    )
  }
}

export default AppContainer;