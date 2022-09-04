import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

export type TripsLibraryProps = Record<string, never>;

export default function TripsLibrary() {
  const { isLoading, error, data } = useQuery(['trips'], async () => {
    const response = await axios.get('/trips');
    return response.data;
  });

  console.log({ isLoading, error, data });

  return <div className="TripsLibrary" />;
}
