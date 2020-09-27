import { useSession } from 'next-auth/client';
import Layout from '../../components/layout/layout.js';

const Profile = () => {
  const [session, loading] = useSession();

  if (loading) return <div>loading...</div>;
  if (!session) return <div>no session</div>;

  return (
    <Layout>
      {session && (
        <>
          <img src={session.user.image} styleName="avatar" />
          <h1>{session.user.name}</h1>
        </>
      )}
    </Layout>
  );
};

export default Profile;