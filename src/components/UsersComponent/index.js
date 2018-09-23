import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import './index.css';
import UserTable from './UserTable';
import Loading from '../../components/Common/Loading/Loading';

class UsersPage extends Component {

  onChangeText = (searchText) => {
    const {onChangeSearchText, searchUsers} = this.props;
    onChangeSearchText(searchText);
    searchUsers(searchText);
  };

  render() {
    const {
      pending,
      users,
      searchText
    } = this.props;

    return (
      <div className={'users-page'}>
        <div className={'users-title'}>
          <p>Users List</p>
        </div>
        <div className={'search-input'}>
          <Link to={'/add-user'}>Add new user</Link>
          <input type="text" placeholder="Type search text" value={searchText} onChange={(e) => this.onChangeText(e.currentTarget.value)} />
        </div>
        <UserTable users={users}/>
        {
          users.length === 0 && <p className={'empty-show'}>There is no any data matches with search text.</p>
        }
        {
          pending && <Loading/>
        }
      </div>
    )
  }
}

export default UsersPage;