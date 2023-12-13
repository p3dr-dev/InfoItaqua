// components/PageContent.js
import styles from '../styles/PageContent.module.css';

const PageContent = ({ title, children }) => (
  <div className={styles.pageContent}>
    <h1>{title}</h1>
    <div>{children}</div>
  </div>
);

export default PageContent;
