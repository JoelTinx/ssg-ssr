import Head from 'next/head';
import { FC, Fragment } from 'react';
import { SideBar, NavBar } from '../components';

type Props = {
  children: React.ReactNode;
  title?: string;
};

export const SpecialtyLayout: FC<Props> = ({ children, title }) => {
  return (
    <Fragment>
      <Head>
        <title>{title || 'My useful page'}</title>
      </Head>
      <NavBar />
      <main style={{ display: 'flex' }}>
        <SideBar />
        <div>{children}</div>
      </main>
    </Fragment>
  );
};
