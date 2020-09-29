// components/layout.js
import Head from 'next/head';
import Navbar from './navbar';


const Layout = ({ children }) => (
  <>
    <Head>
      <title>DND Shop</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Navbar />

    <main className="container">{children}</main>
  </>
);

export default Layout;