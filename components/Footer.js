// components/Footer.js
import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© 2023 InfoItaqua. Todos os direitos reservados.</p>
        <div className={styles.links}>
          <a href="/politica-de-privacidade">Política de Privacidade</a>
          <a href="/termos-de-servico">Termos de Serviço</a>
          <a href="/contato">Contato</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
