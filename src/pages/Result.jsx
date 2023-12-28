import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import Menu from '../components/Menu';
import { useQuery } from '@tanstack/react-query';

export default function Result() {
  const { mini, darkMode } = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('search_query');
  const {
    isLoading,
    error,
    data: result
  } = useQuery({
    queryKey: ['result', query],
    queryFn: async () => {
      return fetch(`videos/result.json`).then((res) => res.json());
    }
  });

  return (
    <>
      <Helmet>
        <title>{query} - YouTube</title>
      </Helmet>
      <div className="flex pt-6 -ml-2">
        <Menu mini={mini} />
        <div
          className={`whitespace-pre ${
            mini ? 'pl-24 ml-1' : 'pl-60'
          } dark:text-white`}
        >
          <div className={`flex flex-col`}>
            <div className={`flex justify-center items-center`}>
              <p className="text-9xl">TEST</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
