// components/Header.js
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import NavItem from './NavItem';
import styles from '../styles/Header.module.css';

const navItems = [
  { href: '/', label: 'PÁGINA INICIAL' },
  { href: '/informatica-basica', label: 'INFORMÁTICA BÁSICA' },
  { href: '/editor-de-texto', label: 'EDITOR DE TEXTO' },
  { href: '/editor-de-planilha', label: 'EDITOR DE PLANILHA' },
  { href: '/contato', label: 'CONTATO' },
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
        <div className={`${styles.menuIcon} ${isMenuOpen ? styles.open : ''}`} onClick={toggleMenu}>
          <FaBars />
        </div>
        <nav className={`${styles.nav} ${isMenuOpen ? styles.show : ''}`}>
          <ul className={styles.navList}>
            {navItems.map((item, index) => (
              <NavItem key={index} href={item.href} label={item.label} onClick={() => setMenuOpen(false)} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
