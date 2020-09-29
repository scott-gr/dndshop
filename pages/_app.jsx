import '../styles/globals.css'
import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>DND SHOP</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}