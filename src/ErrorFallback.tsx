import { Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import WarningImage from './images/warning_image.svg';
export const ErrorFallback = ({ error }: { error: Error }) => {
  return (
    <Wrapper role="alert">
      <img width={400} src={WarningImage} alt="" />
      <Text fontSize="3xl">Something went wrong, refresh the app or try again later.</Text>
      <pre>{error.message}</pre>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  color: black;
  gap: 8px;
`;
