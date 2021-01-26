import Head from 'next/head'

function MetaTags() {

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>The Simpsons Quiz</title>
      <meta name="title" content="The Simpsons" />
      <meta name="description" content="Projeto criado durante a Imersão React v2 da Alura." />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://thesimpsonsquiz.gabriel-brasil.vercel.app/" />
      <meta property="og:title" content="The Simpsons" />
      <meta property="og:description" content="Projeto criado durante a Imersão React v2 da Alura." />
      <meta property="og:image" content="https://github.com/gabriel-brasil/thesimpsonsquiz/blob/main/src/images/print-projeto.jpg" />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://thesimpsonsquiz.gabriel-brasil.vercel.app/" />
      <meta property="twitter:title" content="The Simpsons" />
      <meta property="twitter:description" content="Projeto criado durante a Imersão React v2 da Alura." />
      <meta property="twitter:image" content="https://github.com/gabriel-brasil/thesimpsonsquiz/blob/main/src/images/print-projeto.jpg" />
    </Head>
  )

}

export default MetaTags
