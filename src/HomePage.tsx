import React from 'react';
import styled from 'styled-components';

const Page = styled.main`
  padding: 16px;
  margin-left: 20vw;
  margin-right: 20vw;
`

const Heading = styled.h2`
  font-size: xx-large;
  color: purple;
`
const title = `Have you asked youself "what's next?" lately?`;

function HomePage() {
  return (
    <Page>
      <Heading>{title}</Heading>
    </Page>
  );
}

export default HomePage;
