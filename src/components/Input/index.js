import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputBase = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.primary.dark || theme.colors.primary};
  color: ${({ theme }) => theme.colors.contrastTextDark || theme.colors.contrastText};
  background-color: '${({ theme }) => theme.colors.mainBgLight || theme.colors.mainBg}';
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: 0;
  margin-bottom: 25px;
  font-family: 'Lato', sans-serif;

  &::placeholder {
    font-style: italic;
  }
`;

// eslint-disable-next-line react/prop-types
export default function Input({ onChange, placeholder, ...props }) {
  return (
    <div>
      <InputBase
        placeholder={placeholder}
        onChange={onChange}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
    </div>
  );
}

Input.defaultProps = {
  value: '',
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};
