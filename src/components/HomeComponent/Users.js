import React from 'react'
import AutoComplete from 'material-ui/AutoComplete';
import {users} from '../../constants/staticData';

export const UsersSelect = ({userData, fetchUser, selectedUserData}) => {
    const handleUpdateInput = () => {
        fetchUser(users)
    };

    const selectedUser = (chosenRequest, index) => {
        selectedUserData(chosenRequest, index)
    };

    return (
        <div className={'user-step'}>
            <AutoComplete
                hintText="Type user keyword"
                dataSource={userData}
                onUpdateInput={handleUpdateInput}
                onNewRequest={selectedUser}
            />
        </div>
    )
};