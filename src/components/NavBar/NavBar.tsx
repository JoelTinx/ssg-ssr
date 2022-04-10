import Link from 'next/link';
import styles from './NavBar.module.css';

export function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        <Link href="/" passHref>
          <a>My Clinic</a>
        </Link>
        <ul>
          <li>
            <Link href="/specialties" passHref>
              <a>Specialties</a>
            </Link>
          </li>
          <li>
            <Link href="/about" passHref>
              <a>About</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
