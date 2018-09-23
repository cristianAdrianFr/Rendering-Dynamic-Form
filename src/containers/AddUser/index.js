import React, { Component } from 'react'
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import AddUser from '../../components/AddUserComponent';
import {
  getForm,
  submitForm
} from '../../actions/Users';

class AddUserContainer extends Component {
  render() {
    return (
      <div className={'add-user-container'}>
        <AddUser {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    pending: state.users.pending,
    formFields: state.users.formFields,
    addedUser: state.users.addedUser
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getForm: () => {
      dispatch(getForm());
    },
    submitForm: formData => {
      dispatch(submitForm(formData));
    }
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddUserContainer));