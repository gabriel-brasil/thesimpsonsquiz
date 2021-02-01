/* eslint-disable react/prop-types */
import React from 'react';
import { motion } from 'framer-motion';

// import db from '../../../db.json';
import QuizBackground from '../../components/QuizBackground';
import QuizLogo from '../../components/QuizLogo';
import Widget from '../../components/Widget';
import QuizContainer from '../../components/QuizContainer';
import AlternativesForm from '../../components/AlternativesForm';
import Button from '../../components/Button';
import BackLinkArrow from '../../components/BackLinkArrow';

function ResultWidget({ results, totalQuestions }) {
  const maxTotalQuestions = totalQuestions < 10 ? '0' : '';
  return (
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
        Tela de Resultado:
      </Widget.Header>
      <Widget.Content>
        <p>
          {`Você acertou 
          ${maxTotalQuestions}${results.filter((x) => x).length}/${maxTotalQuestions}${totalQuestions} perguntas! `}

          {/* Você acertou
          {' '}
          {results.reduce((somatoriaAtual, resultAtual) => {
            const isAcerto = resultAtual === true;
            if (isAcerto) {
              return somatoriaAtual + 1;
            }
            return somatoriaAtual;
          }, 0)}
          {' '}
          perguntas */}
        </p>
        <ul>
          <AlternativesForm>
            {results.map((result, index) => (
              <li key={`result__${result}`}>
                <Widget.Topic
                  as="label"
                  data-selected="true"
                  data-status={result ? 'SUCCESS' : 'ERROR'}
                >
                  {`Pergunta 0${index + 1}: ${result === true ? 'Acertou' : 'Errou'} `}
                </Widget.Topic>
              </li>
            ))}
          </AlternativesForm>
        </ul>
        <a
          href="/"
          style={{
            display: 'block',
            textAlign: 'center',
            color: '#ffffff',
            textDecoration: 'none',
          }}
        >
          Voltar para o início
        </a>
      </Widget.Content>
    </Widget>
  );
}

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>
      <Widget.Content>
        [Desafio do Loading]
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  addResult,
}) {
  const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false);
  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;
  const [hasSubmitedAlternative, setHasSubmitedAlternative] = React.useState(undefined);
  return (
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
        <BackLinkArrow href="/" />
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>

      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />

      <Widget.Content>
        <h2>
          {question.title}
        </h2>
        <p>
          {question.description}
        </p>

        <AlternativesForm
          onSubmit={(event) => {
            event.preventDefault();
            setIsQuestionSubmited(true);
            setHasSubmitedAlternative(true);
            const correctLabel = document.querySelector(`input#alternativ__${question.answer}`);
            correctLabel.parentNode.dataset.res = 'correct';
            const incorrectLabel = document.querySelector(`input#alternativ__${selectedAlternative}`);
            if (incorrectLabel !== correctLabel) {
              incorrectLabel.parentNode.dataset.res = 'incorrect';
            }
            setTimeout(() => {
              addResult(isCorrect);
              onSubmit();
              setIsQuestionSubmited(false);
              setSelectedAlternative(undefined);
              setHasSubmitedAlternative(undefined);
              const allLabel = document.querySelectorAll('input#alternativ__');
              allLabel.forEach((el) => {
                // eslint-disable-next-line no-param-reassign
                el.parentNode.dataset.res = false;
              });
            }, 2 * 1000);
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternativ__${alternativeIndex}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === alternativeIndex;
            return (
              <Widget.Topic
                as="label"
                key={alternative}
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmited && alternativeStatus}
              >
                <input
                  style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                  type="radio"
                  disabled={hasSubmitedAlternative}
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          {/* <pre>
            {JSON.stringify(question, null, 4)}
          </pre> */}

          <Button type="submit" disabled={!hasAlternativeSelected || hasSubmitedAlternative}>
            Confirmar
          </Button>
        </AlternativesForm>

      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function QuizPage({ externalQuestions, externalBg }) {
  const [screenState, setScreenState] = React.useState(screenStates.QUIZ);
  const [results, setResults] = React.useState([]);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = externalQuestions[questionIndex];
  const totalQuestions = externalQuestions.length;
  const bg = externalBg;

  function addResult(result) {
    setResults([
      ...results,
      result,
    ]);
  }

  React.useEffect(() => {
    // fetch()...
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <>
      <QuizBackground backgroundImage={bg}>
        <QuizContainer>
          <QuizLogo />
          {screenState === screenStates.QUIZ && (
            <QuestionWidget
              question={question}
              questionIndex={questionIndex}
              totalQuestions={totalQuestions}
              onSubmit={handleSubmitQuiz}
              addResult={addResult}
            />
          )}
          {screenState === screenStates.LOADING && <LoadingWidget />}
          {screenState === screenStates.RESULT
            && (
              <ResultWidget
                results={results}
                totalQuestions={totalQuestions}
              />
            )}
        </QuizContainer>
      </QuizBackground>
    </>
  );
}
