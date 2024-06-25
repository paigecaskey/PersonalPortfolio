import '../styles/global.css';
import Head from 'next/head'; // Import Head from Next.js

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>Paige Caskey</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

