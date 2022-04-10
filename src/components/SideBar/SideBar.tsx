import Link from 'next/link';
import { data, normalizeText } from '../../util';

import styles from './SideBar.module.css';

export function SideBar() {
  const specialties = data;
  return (
    <div className={styles.sidebar}>
      <ul>
        <li>
          <Link href="/specialties">
            <a>All</a>
          </Link>
        </li>

        {specialties.map((specialty) => {
          return (
            <li key={`sidemenu-${specialty.name}`}>
              <Link
                href={`/specialties/${normalizeText(specialty.name)}`}
                passHref
              >
                <a>{specialty.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
