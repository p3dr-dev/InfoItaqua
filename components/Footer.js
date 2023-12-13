// components/Footer.js
import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          {/* Adicione seus links aqui */}
        </div>
        <p>© 2023 InfoItaqua. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
