// components/Header.js
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaHome, FaDesktop, FaFileAlt, FaTable, FaEnvelope } from 'react-icons/fa';
import styles from '../styles/Header.module.css';

const navItems = [
  { href: '/', label: 'PÁGINA INICIAL', icon: <FaHome /> },
  { href: '/informatica-basica', label: 'INFORMÁTICA BÁSICA', icon: <FaDesktop /> },
  { href: '/editor-de-texto', label: 'EDITOR DE TEXTO', icon: <FaFileAlt /> },
  { href: '/editor-de-planilha', label: 'EDITOR DE PLANILHA', icon: <FaTable /> },
  { href: '/contato', label: 'CONTATO', icon: <FaEnvelope /> },
];

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>INFOITAQUA</h1>
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <div
            className={styles.menuIcon}
            onClick={toggleMenu}
            role="button"
            tabIndex={0}
            aria-label={isMenuOpen ? 'Fechar Menu' : 'Abrir Menu'}
          >
            <FaBars />
          </div>
          <ul className={`${styles.navList} ${isMenuOpen ? styles.show : ''}`}>
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
  <li className={`${styles.navItem} show`}>
    <Link href={href} className={styles.navLink}>
        {icon} {label}
    </Link>
  </li>
);

export default Header;
