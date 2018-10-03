import React, { Component } from 'react'
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import LoginPage from '../../components/LoginComponent';
import {
  login
} from '../../actions/Login';

class LoginContainer extends Component {
  componentWillReceiveProps (nextProps) {
    if (nextProps.isLoggedIn !== this.props.isLoggedIn && nextProps.isLoggedIn === true) {
      this.props.history.push('/chart')
    }
  }

  render() {
    return (
      <div className={'add-user-container'}>
        <LoginPage {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: data => {
      dispatch(login(data));
    },
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginContainer));