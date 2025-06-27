'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarInner}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo.png" alt="Logo" width={36} height={36} />
        </Link>

        <ul className={styles.navLinks}>
          <li>
            <Link href="/" className={pathname === '/' ? styles.active : ''}>About</Link>
          </li>
          <li>
            <Link href="/projects" className={pathname === '/projects' ? styles.active : ''}>Projects</Link>
          </li>
          <li>
            <Link href="/contact" className={pathname === '/contact' ? styles.active : ''}>Contact</Link>
          </li>
          <li>
            <Link href="/resume" className={pathname === '/resume' ? styles.active : ''}>Resume</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
