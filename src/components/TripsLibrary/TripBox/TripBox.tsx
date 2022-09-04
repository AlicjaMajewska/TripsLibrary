import { Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';
import { Trip } from '../../../types';
import EmissionsOffset from '../EmissionsOffset/EmissionsOffset';
import TripRating from '../TripRating/TripRating';

type TripBoxProps = {
  trip: Trip;
};

const TripBox = ({ trip }: TripBoxProps) => {
  const numberOfCountriesMessage =
    trip.numberOfVisitedCountries === 1
      ? `1 Country`
      : `${trip.numberOfVisitedCountries} Countries`;
  const durationInDaysMessage = trip.durationInDays === 1 ? `1 Day` : `${trip.durationInDays} Days`;

  return (
    <InnerBox>
      <BackgroundImage alt="" src={trip.imageUrl} />
      <Text fontWeight={700} fontSize="2xl">
        {trip.name}
      </Text>
      <Text fontSize="sm">{`${numberOfCountriesMessage}, ${durationInDaysMessage}`}</Text>
      <EmissionsOffsetFixedWidth emissionOffsetInKg={trip.emissionsOffsetInKg} />
      <TripRatingStickToBottom rating={trip.tripRating} />
    </InnerBox>
  );
};

export default TripBox;

const InnerBox = styled.div`
  color: white;
  background-color: transparent;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  z-index: 1;
  overflow: hidden;
  border-radius: 24px;
  border: 12px white solid;
  gap: 8px;
`;

const BackgroundImage = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  z-index: -1;
  object-fit: cover;
  width: 100%;
  height: 100%;
  display: block;
  filter: brightness(65%);
  border-radius: 12px;
`;

const TripRatingStickToBottom = styled(TripRating)`
  position: absolute;
  bottom: 0;
  width: 70%;
`;

const EmissionsOffsetFixedWidth = styled(EmissionsOffset)`
  width: 70%;
`;
