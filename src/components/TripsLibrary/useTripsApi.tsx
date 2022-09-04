import { useQuery } from 'react-query';
import axios from 'axios';

export const useTripsApi = () => {
  return useQuery(
    ['trips'],
    async () => {
      const endpoint = '/trips';

      const response = await axios.get(endpoint);
      return response.data;
    },
    {
      useErrorBoundary: true,
    }
  );
};
