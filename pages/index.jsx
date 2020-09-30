import React from 'react';
import { useCurrentUser } from '../lib/hooks';

const IndexPage = () => {
  const [user] = useCurrentUser();

  return (
    <>

      <div style={{ marginBottom: '2rem' }}>
        <h2>
          Welcome,
          {' '}
          {user ? user.name : 'stranger'}
          !
        </h2>
        <p>Have a wonderful day.</p>
      </div>
      <div>

      </div>
    </>
  );
};
export default IndexPage;