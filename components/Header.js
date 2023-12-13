// components/Header.js
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const navItems = [
  { href: '/', label: 'PÁGINA INICIAL' },
  { href: '/informatica-basica', label: 'INFORMÁTICA BÁSICA' },
  { href: '/editor-de-texto', label: 'EDITOR DE TEXTO' },
  { href: '/editor-de-planilha', label: 'EDITOR DE PLANILHA' },
  { href: '/contato', label: 'CONTATO' },
];

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>INFOITAQUA</h1>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {navItems.map((item, index) => (
              <NavItem key={index} {...item} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

const NavItem = ({ href, label }) => (
  <li className={styles.navItem}>
    <Link href={href}>
      <a className={styles.navLink}>{label}</a>
    </Link>
  </li>
);

export default Header;
