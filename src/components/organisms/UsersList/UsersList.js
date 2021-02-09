import React from 'react';
import { users } from '../../../data/users';
import { Wrapper, StyledList } from './UsersList.styles';
import UsersListItem from '../../molecules/UsersListItem/UsersListItem';
import PropTypes from 'prop-types';

const UsersList = (props) => (
  <Wrapper>
    <StyledList>
      {users.map((userData) => (
        <UsersListItem userData={userData} />
      ))}
    </StyledList>
  </Wrapper>
);

UsersList.propTypes = {};

export default UsersList;
