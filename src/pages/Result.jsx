import React from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Result() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('search_query'));
  return (
    <div className="whitespace-pre">{searchParams.get('search_query')}</div>
  );
}
