import React from 'react';
import styles from '../styles/home.module.css';

const Page: React.FC = ({ children }) => (
  <main className={styles.page}>
    {children}
  </main>
);

export default Page;