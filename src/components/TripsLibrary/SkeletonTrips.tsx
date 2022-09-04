import { Box, GridItem, SkeletonText } from '@chakra-ui/react';
import React from 'react';

const SkeletonTrips = () => {
  const skeletonTrip = (
    <GridItem w="100%" bg="white">
      <Box padding="6" boxShadow="lg" bg="white">
        <SkeletonText mt="5" noOfLines={8} spacing="6" />
      </Box>
    </GridItem>
  );

  return (
    <>
      {skeletonTrip}
      {skeletonTrip}
      {skeletonTrip}
      {skeletonTrip}
      {skeletonTrip}
    </>
  );
};

export default SkeletonTrips;
