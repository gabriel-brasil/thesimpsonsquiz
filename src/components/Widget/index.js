import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary.dark || theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.primary.main || theme.colors.mainBg};
  border-radius: 4px;
  overflow: hidden;

  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-top: 0;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;
Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary.dark || theme.colors.primary};
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

Widget.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.primary.light || theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary.dark || theme.colors.primary};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: .3s;
  display: block;
  position: relative;
  
  &:hover,
  &:focus {
    /* background-color: ${({ theme }) => theme.colors.primary.dark}; */
    /* color: ${({ theme }) => theme.colors.contrastText}; */
    transform: translatex(10px);
  }

  &[data-res="correct"]::before {
    content: "";
    position: absolute;
    display: block;
    width: 24px;
    height: 24px;
    background-image: url('https://raw.githubusercontent.com/gabriel-brasil/thesimpsonsquiz/main/src/images/correct-icon.png');
    top: 8.5px;
    right: 10px;
    border-radius: 30px;
  }
  
  &[data-res="incorrect"] {
    &[data-selected="true"]::before{
      content: "";
      position: absolute;
      display: block;
      width: 24px;
      height: 24px;
      background-image: url('https://raw.githubusercontent.com/gabriel-brasil/thesimpsonsquiz/main/src/images/incorrect-icon.png');
      top: 8.5px;
      right: 10px;
      border-radius: 30px;
    }
      
  }
`;

export default Widget;
