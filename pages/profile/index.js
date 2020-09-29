import { useSession } from 'next-auth/client';
import Layout from '../../components/layout/layout.js';
import styles from './profile.module.css'

const Profile = () => {
  const [session, loading] = useSession();

  if (loading) return <div>loading...</div>;
  if (!session) return <div>no session</div>;

  return (
    <Layout>
      {session && (
        <>
          <img src={session.user.image} className={styles.avatar} />
          <h1>{session.user.name}</h1>
        </>
      )}
    </Layout>
  );
};

export default Profile;