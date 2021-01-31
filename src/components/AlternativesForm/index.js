import styled from 'styled-components';

const AlternativesForm = styled.form`
  label {
    &[data-selected="true"] {
      background-color: ${({ theme }) => theme.colors.primary.dark};
      color: ${({ theme }) => theme.colors.contrastText};
      
      &[data-status="SUCCESS"] {
        background-color: ${({ theme }) => theme.colors.success};
        color: ${({ theme }) => theme.colors.contrastText};
      }
      &[data-status="ERROR"] {
        background-color: ${({ theme }) => theme.colors.wrong};
        color: ${({ theme }) => theme.colors.contrastText};
      }
    }
    &:focus {
      opacity: 1;
    } 
  }
  button {
    margin-top: 24px;
  }
`;

export default AlternativesForm;
