import React from 'react';
import { render, screen } from '@testing-library/react';
import TripRating from './TripRating';

describe('TripRating', function () {
  it('displays rating with 1 decimal place', () => {
    // arrange
    render(<TripRating rating={4.64} />);

    // act
    const offsetWeightInKgs = screen.getByText('4.6');

    // assert
    expect(offsetWeightInKgs).toBeInTheDocument();
  });
});
