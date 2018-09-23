import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import Home from '../../components/HomeComponent';

class HomeContainer extends Component {

  componentWillMount() {
    const {history} = this.props;
    history.push('/users')
  }

  render() {
    return (
      <div className={'home-container'}>
        <Home />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {}
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeContainer))