import Link from 'next/link';
import { FC } from 'react';

import styles from './SpecialtyCard.module.css';

type Props = {
  href: string;
  title: string;
};

export const SpecialtyCard: FC<Props> = ({ href, title }) => {
  return (
    <Link href={href} passHref>
      <div className={styles.specialtyCard}>
        <aside>
          <h3>{title}</h3>
        </aside>
      </div>
    </Link>
  );
};
