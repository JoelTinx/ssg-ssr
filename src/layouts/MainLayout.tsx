import Head from 'next/head';
import { FC, Fragment } from 'react';
import { NavBar } from '../components';

type Props = {
  children: React.ReactNode;
  title?: string;
};

export const MainLayout: FC<Props> = ({ children, title }) => {
  return (
    <Fragment>
      <Head>
        <title>{title || 'My useful page'}</title>
      </Head>
      <NavBar />
      <main>{children}</main>
    </Fragment>
  );
};
