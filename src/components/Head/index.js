import Head from 'next/head'

function MetaTags() {

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>The Simpsons Quiz</title>
      <meta name="title" content="The Simpsons Quiz" />
      <meta name="description" content="Projeto criado durante a Imersão React v2 da Alura." />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://thesimpsonsquiz.gabriel-brasil.vercel.app/" />
      <meta property="og:title" content="The Simpsons Quiz" />
      <meta property="og:description" content="Prove que você é um Amarelão de verdade e responda as perguntas que só a Lisa saberia." />
      <meta property="og:image" content="https://raw.githubusercontent.com/gabriel-brasil/thesimpsonsquiz/main/src/images/og-img.jpg" />
      {/* favicon */}
      <link rel="shortcut icon" href="https://raw.githubusercontent.com/gabriel-brasil/thesimpsonsquiz/main/src/images/favicon.ico.ico" />
    </Head>
  )

}

export default MetaTags
