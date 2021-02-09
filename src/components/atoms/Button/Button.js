import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.styles';
import { ReactComponent as DeleteIcon } from '../../../assets/icons/delete-icon.svg';

const Button = (props) => (
  <StyledButton>
    <DeleteIcon />
  </StyledButton>
);

Button.propTypes = {};

export default Button;
