import { QueryClient, QueryClientProvider } from 'react-query';
import React, { ReactElement } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from './ErrorFallback';
import { ChakraProvider } from '@chakra-ui/react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      useErrorBoundary: true,
    },
  },
});

export const TestProviders = ({ children }: { children: ReactElement }) => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ChakraProvider>
  </ErrorBoundary>
);
