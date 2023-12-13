// components/Layout.js
import Header from './Header';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => (
  <div className={styles.container}>
    <Header />
    <main className={styles.main}>{children}</main>
    {/* Adicione aqui um componente de rodapé, se necessário */}
  </div>
);

export default Layout;
