import Link from "next/link";
import Image from "next/image";

import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";
import logoImg from "@/assets/logo.png";

import styles from "./main-header.module.css";

const navLinks = [
  {
    href: "/meals",
    label: "Browse Meals",
  },
  {
    href: "/community",
    label: "Foodies Community",
  },
];

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />

      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          <Image
            src={logoImg}
            alt="A plate with food on it"
            loading="eager"
          />
          NextLevel Food
        </Link>

        <nav className={styles.nav}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavLink href={link.href}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}