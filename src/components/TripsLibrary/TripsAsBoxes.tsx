import React from 'react';
import { useTripsApi } from './useTripsApi';
import { Trip } from '../../types';
import TripBox from './TripBox/TripBox';
import SkeletonTrips from './SkeletonTrips';

export const TripsAsBoxes = () => {
  const { isLoading, data: trips = [] } = useTripsApi();

  if (isLoading) {
    return <SkeletonTrips />;
  }

  return trips.map((trip: Trip) => <TripBox key={trip.id} trip={trip} />);
};
export default TripsAsBoxes;
