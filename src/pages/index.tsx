import type { NextPage } from 'next';
import { MainLayout } from '../layouts';

const Home: NextPage = () => {
  return (
    <MainLayout title="Home - My Clinic">
      <h1>Hello Next.js</h1>
    </MainLayout>
  );
};

export default Home;
