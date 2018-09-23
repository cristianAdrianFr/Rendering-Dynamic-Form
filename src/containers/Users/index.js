import React, { Component } from 'react'
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import Users from '../../components/UsersComponent';
import {
  getUserList,
  onChangeSearchText,
  searchUsers
} from '../../actions/Users';

class UsersContainer extends Component {

  componentDidMount() {
    const {getUserList} = this.props;
    getUserList();
  }

  render() {
    return (
      <div className={'users-container'}>
        <Users {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users.users,
    pending: state.users.pending,
    searchText: state.users.searchText
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getUserList: () => {
      dispatch(getUserList())
    },
    onChangeSearchText: searchText => {
      dispatch(onChangeSearchText(searchText));
    },
    searchUsers: searchText => {
      dispatch(searchUsers(searchText));
    }
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UsersContainer));