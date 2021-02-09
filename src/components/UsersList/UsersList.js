import React from 'react';
import { users } from '../../data/users';
import UsersListItem from '../UsersListItem/UsersListItem';
import PropTypes from 'prop-types';

const UsersList = (props) => (
  <div>
    <ul>
      {users.map((userData) => (
        <UsersListItem userData={userData} />
      ))}
    </ul>
  </div>
);

UsersList.propTypes = {};

export default UsersList;
