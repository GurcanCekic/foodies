'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from './nav-link.module.css';

export default function NavLink({ href, children }) {
  const pathname = usePathname();

  const isActive = pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={isActive ? `${styles.link } ${styles.active}` :   styles.link }
    >
      {children}
    </Link>
  );
}