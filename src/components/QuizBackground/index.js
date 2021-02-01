// src/components/QuizBackground/index.js
import styled from 'styled-components';

const QuizBackground = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-color: ${({ theme }) => theme.colors.mainBg};
  flex: 1;
  @media screen and (max-width: 500px) {
    background-image: url(${({ backgroundImageMobile }) => backgroundImageMobile});
    
    *:first-child {
      position: relative;
      z-index: 10;
    }
  }
`;

export default QuizBackground;
