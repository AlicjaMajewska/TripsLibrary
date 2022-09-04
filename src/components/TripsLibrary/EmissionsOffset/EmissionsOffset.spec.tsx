import React from 'react';
import EmissionsOffset from './EmissionsOffset';
import { render, screen } from '@testing-library/react';

describe('EmissionsOffset', function () {
  it('displays offset in kg when offset is less then 1 tonne', () => {
    // arrange
    render(<EmissionsOffset emissionOffsetInKg={850} />);

    // act
    const offsetWeightInKgs = screen.getByText(/850 kg/, { collapseWhitespace: true });

    // assert
    expect(offsetWeightInKgs).toBeInTheDocument();
  });

  it('displays offset in tonnes with two decimal places when offset is more then 1 tonne', () => {
    // arrange
    render(<EmissionsOffset emissionOffsetInKg={1055} />);

    // act
    const offsetWeightInKgs = screen.getByText(/1.05 t/, { collapseWhitespace: true });

    // assert
    expect(offsetWeightInKgs).toBeInTheDocument();
  });
});
