import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import Head from '../src/components/Head'

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`

export default function Home() {
  return (

    <>
      <Head />

      <QuizBackground backgroundImage={db.bg}>

        <QuizContainer>

          <QuizLogo />

          <Widget>
            <Widget.Header>
              <h1>The Simpsons</h1>
            </Widget.Header>
            <Widget.Content>
              <p>Lorem Ipsum</p>
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

          <GitHubCorner projectUrl="https://github.com/gabriel-brasil/thesimpsonsquiz" />

        </QuizContainer>
      </QuizBackground>
    </>
  )

}
