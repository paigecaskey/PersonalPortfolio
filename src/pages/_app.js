import '../styles/global.css';
import '98.css'
import Head from 'next/head';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
        <title>Paige Caskey</title>
      </Head>
      {/* LinkedIn Embed Script */}
      <Script src="https://platform.linkedin.com/in.js" strategy="afterInteractive" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
