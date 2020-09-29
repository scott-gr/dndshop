import React from 'react';
import Layout from '../components/layout';
import { useUser } from '../lib/hooks';

const Navbar = () => {
const [, { mutate }] = useUser();
  const handleLogout = async () => {
    await fetch('/api/auth', {
      method: 'DELETE',
    });
    mutate(null);
  };
  return (
    <Layout>

    <button onClick={handleLogout}>Logout</button>

    </Layout>
  );
};

export default Navbar