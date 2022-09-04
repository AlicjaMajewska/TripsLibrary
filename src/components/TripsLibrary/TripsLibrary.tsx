import React from 'react';
import { Grid, Heading } from '@chakra-ui/react';
import TripsAsBoxes from './TripsAsBoxes';
import styled from '@emotion/styled';

export default function TripsLibrary() {
  return (
    <Wrapper>
      <Heading paddingLeft={8}>Trips library</Heading>
      <Grid padding={8} templateColumns="repeat(auto-fill, minmax(min(100%, 400px), 1fr))" gap={8}>
        <TripsAsBoxes />
      </Grid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  padding: 16px;
  background-color: var(--background);
`;
