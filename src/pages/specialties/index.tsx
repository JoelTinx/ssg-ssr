import type { NextPage } from 'next';
import { SpecialtyCard } from '../../components';
import { MainLayout } from '../../layouts';

import styles from './specialties.module.css';

const Home: NextPage = () => {
  return (
    <MainLayout title="Specialties - My Clinic">
      <h1>Specialties available</h1>
      <section className={styles.specialtiesContainer}>
        <SpecialtyCard href="/specialties/cardiology" title="Cardiology" />
        <SpecialtyCard
          href="/specialties/gastroenterology"
          title="Gastroenterology"
        />
        <SpecialtyCard href="/specialties/neurology" title="Neurology" />
        <SpecialtyCard
          href="/specialties/ophthalmology"
          title="Ophthalmology"
        />
        <SpecialtyCard href="/specialties/radiology" title="Radiology" />
      </section>
    </MainLayout>
  );
};

export default Home;
