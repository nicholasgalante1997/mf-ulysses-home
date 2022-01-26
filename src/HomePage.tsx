import React from 'react';
import styles from './styles/home.module.css';

const Page: React.FC = ({ children }) => (
  <main className={styles.page}>
    {children}
  </main>
);

const Heading: React.FC = ({ children }) => (
  <h2>{children}</h2>
)

function HomePage() {
  return (
    <Page>
      <Heading>Ulysses</Heading>
    </Page>
  );
}

export default HomePage;
