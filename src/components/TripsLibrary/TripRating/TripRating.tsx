import React from 'react';
import styled from '@emotion/styled';
import { Text, VisuallyHidden } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

export type TripRatingProps = { rating: number };

export default function TripRating({ rating, ...restProps }: TripRatingProps) {
  return (
    <Wrapper {...restProps}>
      <Text>Trip rating:</Text>
      <RatingWithStarsWrapper>
        <StarRating rating={rating} />
        {rating.toFixed(1)}
        <VisuallyHidden>out of 5 stars</VisuallyHidden>
      </RatingWithStarsWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-radius: 12px 12px 0 0;
  background-color: white;
  color: black;
  display: flex;
  padding: 12px;
  justify-content: space-between;
`;

const RatingWithStarsWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const StarRating = ({ rating }: { rating: number }) => {
  const ratingInPercentages = Math.min(100, (100 * rating) / 5);

  const yellowStar = <StarIcon color="yellow.300" />;
  const greyStar = <StarIcon color="grey.500" />;

  return (
    <StarContainer aria-hidden>
      <GrayStartsContainer>
        {greyStar}
        {greyStar}
        {greyStar}
        {greyStar}
        {greyStar}
      </GrayStartsContainer>
      <YellowStartsContainer width={ratingInPercentages}>
        {yellowStar}
        {yellowStar}
        {yellowStar}
        {yellowStar}
        {yellowStar}
      </YellowStartsContainer>
    </StarContainer>
  );
};

const StarContainer = styled.div`
  position: relative;
`;

const GrayStartsContainer = styled.div`
  display: flex;
`;

const YellowStartsContainer = styled.div<{ width: number }>`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  overflow: hidden;
  width: ${(p) => p.width}%;
`;
