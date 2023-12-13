// components/NavItem.js
import React from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const NavItem = ({ href, label, onClick }) => (
  <li className={styles.navItem}>
    <Link href={href} className={styles.navLink} onClick={onClick}>
        {label}
    </Link>
  </li>
);

export default NavItem;
