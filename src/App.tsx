import React from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';
import TripsLibrary from './components/TripsLibrary/TripsLibrary';
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from './ErrorFallback';

const queryClient = new QueryClient();
function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ChakraProvider>
        <QueryClientProvider client={queryClient}>
          <TripsLibrary />
        </QueryClientProvider>
      </ChakraProvider>
    </ErrorBoundary>
  );
}

export default App;
