// components/Header.js
import Link from 'next/link';
import { FaHome, FaDesktop, FaFileAlt, FaTable, FaEnvelope } from 'react-icons/fa';
import styles from '../styles/Header.module.css';

const navItems = [
  { href: '/', label: 'PÁGINA INICIAL', icon: <FaHome /> },
  { href: '/informatica-basica', label: 'INFORMÁTICA BÁSICA', icon: <FaDesktop /> },
  { href: '/editor-de-texto', label: 'EDITOR DE TEXTO', icon: <FaFileAlt /> },
  { href: '/editor-de-planilha', label: 'EDITOR DE PLANILHA', icon: <FaTable /> },
  { href: '/contato', label: 'CONTATO', icon: <FaEnvelope /> },
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

const NavItem = ({ href, label, icon }) => (
  <li className={styles.navItem}>
    <Link href={href} className={styles.navLink}>
        {icon} {label}
    </Link>
  </li>
);

export default Header;
