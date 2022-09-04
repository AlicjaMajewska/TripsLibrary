export const trips: Trip[] = [
  {
    name: 'European quest',
    emissionsOffsetInKg: 810,
    tripRating: 4.7,
    durationInDays: 21,
    numberOfVisitedCountries: 8,
  },
  {
    name: 'Autumn Roadtrip',
    emissionsOffsetInKg: 3560,
    tripRating: 4.7,
    durationInDays: 14,
    numberOfVisitedCountries: 1,
  },
  {
    name: 'Diving adventure in Egypt',
    emissionsOffsetInKg: 6920,
    tripRating: 4.7,
    durationInDays: 5,
    numberOfVisitedCountries: 1,
  },
];

export type Trip = {
  // TODO move this to other place
  name: string;
  emissionsOffsetInKg: number;
  tripRating: number;
  numberOfVisitedCountries: number;
  durationInDays: number;
  // TODO how to deal with pictures??
};
