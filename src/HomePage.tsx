import React from 'react';
import styles from './styles/home.module.css';
import { Subheading, Page, SectionBreak, Heading, BeginButton } from './components';

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
      <Subheading>
        Ready to get started?
      </Subheading>
      <BeginButton onClick={onClick} />
    </Page>
  );
}

export default HomePage;
