import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'antd/dist/antd.css';
import { GlobalStyle } from '../styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Next js</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
