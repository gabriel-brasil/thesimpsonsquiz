import React from 'react';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  // console.log('retorno de useState()', name, setName);

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
              <form onSubmit={(event) => {
                event.preventDefault();
                router.push(`/quiz?name=${name}`);
                // console.log('Fazendo uma submissão por meio do react');
              }}
              >
                <Input
                  name="nomeDoUsuario"
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Diz ai seu nome"
                  value={name}
                />

                <Button type="submit" disabled={name.length === 0}>
                  Estou pronto!
                </Button>

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
