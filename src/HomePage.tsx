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

const Subheading: React.FC = ({ children }) => (
  <p className={styles.subheading}>{children}</p>
)

const SectionBreak: React.FC = ({ children }) => (
  <hr />
)

interface BeginButtonProps {
  onClick: () => void;
}
const BeginButton: React.FC<BeginButtonProps> = ({ onClick }) => (
  <button onClick={onClick} className={styles.beginButton}>Inwards</button>
);

const subheading = `This is a collection of stories about a weird new reality. If it's post modern, it's unfortunately by accident. If it any part you find yourself, "this is a stroke of art...", I would also advocate that that was probably an accident.`;

interface HomePageProps {
  onClick: () => void;
}
const HomePage: React.FC<HomePageProps> = ({ onClick }) => {
  return (
    <Page>
      <Heading>Ulysses</Heading>
      <SectionBreak />
      <Subheading>
        {subheading}
      </Subheading>
      <BeginButton onClick={onClick} />
    </Page>
  );
}

export default HomePage;
