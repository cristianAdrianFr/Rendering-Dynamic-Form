import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import Home from '../../components/HomeComponent';

class HomeContainer extends Component {

  componentWillMount() {
    const {history} = this.props;
    history.push('/login')
  }

  render() {
    return (
      <div className={'home-container'}>
        <Home />
      </div>
    )
  }
}

export default withRouter(HomeContainer)