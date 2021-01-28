import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  /* New styles */
  display: flex;
  flex-direction: column;
  font-family: 'Lato', sans-serif;
  // Deixa branco no começo
  color: ${({ theme }) => theme.colors.contrastText};
}
html, body {
  min-height: 100vh;
}
#__next {
  flex: 1;
  display: flex;
  flex-direction: column;
}
`;

const { theme } = db;

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>The Simpsons Quiz</title>
        {/* Primary Meta Tags */}
        <meta name="title" content="The Simpsons Quiz" />
        <meta name="description" content="Projeto criado durante a Imersão React v2 da Alura." />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thesimpsonsquiz.gabriel-brasil.vercel.app/" />
        <meta property="og:title" content="The Simpsons Quiz" />
        <meta property="og:description" content="Prove que você é um Amarelão de verdade e responda as perguntas que só a Lisa saberia." />
        <meta property="og:image" content="https://raw.githubusercontent.com/gabriel-brasil/thesimpsonsquiz/main/src/images/og-img.jpg" />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://thesimpsonsquiz.gabriel-brasil.vercel.app/" />
        <meta property="twitter:title" content="The Simpsons Quiz" />
        <meta property="twitter:description" content="Prove que você é um Amarelão de verdade e responda as perguntas que só a Lisa saberia." />
        <meta property="twitter:image" content="https://raw.githubusercontent.com/gabriel-brasil/thesimpsonsquiz/main/src/images/og-img.jpg" />
        {/* Favicon */}
        <link rel="shortcut icon" href="https://raw.githubusercontent.com/gabriel-brasil/thesimpsonsquiz/main/src/images/favicon.ico.ico" />
        {/* Google-Fonts */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
