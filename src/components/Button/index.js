import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
 background-color: ${({ theme }) => theme.colors.secondary.main || theme.colors.secondary};
  color: ${({ theme }) => theme.colors.contrastTextDark || theme.colors.contrastText};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 0;
  width: 100%;
  padding: 10px 16px;
  font-weight: bold;
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;
  outline: 0;
  transition: .3s;
  font-family: 'Lato', sans-serif;
  
  cursor: pointer;
  &:enabled:hover
   {
    box-shadow: 0px 0px 9px #ffeb3b;
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.secondary.dark || theme.colors.secondary};
    cursor: not-allowed;
  }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};
export default Button;
