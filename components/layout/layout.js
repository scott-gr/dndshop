// components/layout.js
import Head from 'next/head';
import Header from '../header/header.js';


const Layout = ({ children }) => (
  <>
    <Head>
      <title>DND Shop</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <main className="container">{children}</main>
  </>
);

export default Layout;