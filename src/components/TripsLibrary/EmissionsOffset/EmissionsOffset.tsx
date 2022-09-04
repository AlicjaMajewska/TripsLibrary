import React from 'react';
import styled from '@emotion/styled';

export type EmissionsOffsetProps = { emissionOffsetInKg: number };

export default function EmissionsOffset({
  emissionOffsetInKg,
  ...restProps
}: EmissionsOffsetProps) {
  const shouldUseTonneAsUnit = emissionOffsetInKg > 1000;
  const unit = shouldUseTonneAsUnit ? 't' : 'kg';
  const emissionOffsetInSelectedUnit = shouldUseTonneAsUnit
    ? (emissionOffsetInKg / 1000).toFixed(2)
    : emissionOffsetInKg;

  return (
    <Wrapper {...restProps}>
      <span>Emissions offset:</span>
      <span>
        {emissionOffsetInSelectedUnit} {unit} C0<sub>2</sub>e
      </span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #131315;
  color: white;
  display: flex;
  justify-content: space-between;
  border-radius: 12px;
  padding: 12px;
`;
