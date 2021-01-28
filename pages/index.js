import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  console.log('retorno de useState()', name, setName);

  return (

    <>
      <QuizBackground backgroundImage={db.bg}>

        <QuizContainer>

          <QuizLogo />

          <Widget>
            <Widget.Header>
              <h1>The Simpsons</h1>
            </Widget.Header>
            <Widget.Content>
              <form onSubmit={function (event) {
                event.preventDefault();
                router.push(`/quiz?name=${name}`);
                console.log('Fazendo uma submissão por meio do react');
              }}
              >
                <input
                  onChange={function (event) {
                    setName(event.target.value);
                  }}
                  placeholder="Diz ai seu nome"
                />
                <button type="submit" disabled={name.length === 0}>
                  Estou pronto!
                </button>
              </form>
            </Widget.Content>
          </Widget>

          <Widget>
            <Widget.Header>
              <h1>Quizes da Galera</h1>
            </Widget.Header>
            <Widget.Content>
              <p>Lorem Ipsum</p>
            </Widget.Content>
          </Widget>

          <Footer />

        </QuizContainer>

        <GitHubCorner projectUrl="https://github.com/gabriel-brasil/thesimpsonsquiz" />
      </QuizBackground>
    </>
  );
}
