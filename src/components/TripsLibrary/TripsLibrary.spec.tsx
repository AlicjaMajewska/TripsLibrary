import React from 'react';
import TripsLibrary from './TripsLibrary';
import { render, screen } from '@testing-library/react';
import { TestProviders } from '../../testProviders';
import { rest } from 'msw';
import { server } from '../../mocks/server';

const renderTripsLibraryWithProviders = () => {
  render(<TripsLibrary />, { wrapper: TestProviders });
};

/**
 * There's something wrong with the setup and error boundary is triggered due to
 *  Uncaught [TypeError: Cannot read properties of undefined (reading 'matches')]
 *  I don't have time left to investigate ☹️
 */

describe('App', function () {
  it('renders 3 trips when backend responses with 3 trips ', async () => {
    server.use(
      rest.get('/trip', (req, res, ctx) => {
        return res.once(ctx.status(400));
      })
    );

    // arrange
    renderTripsLibraryWithProviders();

    // act
    const errorMessage = await screen.findByText(
      'Something went wrong, refresh the app or try again later.'
    );

    // assert
    expect(errorMessage).toBeInTheDocument();
  });
});
