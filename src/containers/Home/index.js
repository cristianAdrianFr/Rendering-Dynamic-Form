import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Home from '../../components/HomeComponent'
import {
    fetchUser,
    selectedUserData,
    saveProject,
    removeProject,
    userSetting
} from '../../actions/Home';

class HomeContainer extends Component {
    static propTypes = {
        fetchUser: PropTypes.func,
        selectedUserData: PropTypes.func,
        saveProject: PropTypes.func,
        removeProject: PropTypes.func,
        userSetting: PropTypes.func,
    };

    render () {
        return (
            <div className={'home-container'}>
                <Home {...this.props} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        userData: state.home.userData,
        wholeProjects: state.home.wholeProjects,
        userId: state.home.userId,
        pending: state.home.pending
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchUser: (userData) => {
            dispatch(fetchUser(userData));
        },
        selectedUserData: (userName, index) => {
            dispatch(selectedUserData(userName, index));
        },
        saveProject: (role, order, id) => {
            dispatch(saveProject(role, order, id));
        },
        removeProject: (role, order, id) => {
            dispatch(removeProject(role, order, id));
        },
        userSetting: data => {
            dispatch(userSetting(data))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)