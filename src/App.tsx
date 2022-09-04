import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './components/GlobalStyles/GlobalStyles';
import { QueryClient, QueryClientProvider } from 'react-query';
import TripsLibrary from './components/TripsLibrary/TripsLibrary';

const queryClient = new QueryClient();
function App() {
  return (
    <Wrapper>
      <Header>A task</Header>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <Main>
          <TripsLibrary />
        </Main>
      </QueryClientProvider>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  height: 100%;
  grid-template-rows: min-content 1fr;
  grid-template-columns: 1fr;
`;

const Header = styled.header`
  padding: 16px;
  font-size: 1.5rem;
`;

const Main = styled.main`
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

export default App;
