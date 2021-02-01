import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Link from '../src/components/Link';
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
      <QuizBackground backgroundImage={db.bg} backgroundImageMobile={db.bgMobile}>

        <QuizContainer>

          <QuizLogo />

          <Widget
            as={motion.section}
            transition={{ duration: 0.5, delay: 0 }}
            variants={{
              show: { opacity: 1, x: '0' },
              hidden: { opacity: 0, x: '-100%' },
            }}
            initial="hidden"
            animate="show"
          >
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

          <Widget
            as={motion.section}
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={{
              show: { opacity: 1, x: '0' },
              hidden: { opacity: 0, x: '-100%' },
            }}
            initial="hidden"
            animate="show"
          >
            <Widget.Header>
              <h1>Quizes da Galera</h1>
            </Widget.Header>
            <Widget.Content>

              <ul>
                {db.external.map((linkExterno) => {
                  const [projectName, githubUser] = linkExterno
                    .replace(/\//g, '')
                    .replace(/\:/g, '')
                    .replace('https', '')
                    .replace('.vercel.app', '')
                    .split('.');
                  return (
                    <li key={linkExterno}>
                      <Widget.Topic
                        as={Link}
                        href={`/quiz/${projectName}___${githubUser}`}
                      >
                        {`${githubUser}/${projectName}`}
                      </Widget.Topic>
                    </li>
                  );
                })}
              </ul>

            </Widget.Content>
          </Widget>

          <Footer
            as={motion.section}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={{
              show: { opacity: 1, x: '0' },
              hidden: { opacity: 0, x: '-100%' },
            }}
            initial="hidden"
            animate="show"
          />

        </QuizContainer>

        <GitHubCorner projectUrl="https://github.com/gabriel-brasil/thesimpsonsquiz" />
      </QuizBackground>
    </>
  );
}
