import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import Menu from '../components/Menu';
import { useQuery } from '@tanstack/react-query';
import VideoContents from '../components/result/VideoContents';

export default function Result() {
  const { mini, darkMode } = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('search_query');

  return (
    <>
      <Helmet>
        <title>{query ? `${query} - YouTube` : 'YouTube'}</title>
      </Helmet>
      <div className="flex pt-6 -ml-2">
        <Menu mini={mini} darkMode={darkMode} />
        <div
          className={`whitespace-pre w-full ${
            mini ? 'pl-24 ml-1' : 'pl-60'
          } dark:text-white`}
        >
          {query ? (
            <>
              {query}
              <VideoContents query={query} />
            </>
          ) : (
            <div className="w-full flex flex-col items-center">
              <div className="w-98 mt-28">
                <img src="img/none-contents.svg" alt="검색 결과 없음" />
              </div>
              <p className="text-2xl mt-6 font-semibold">
                검색결과가 없습니다.
              </p>
              <p className="text-base mt-4 font-medium tracking-tighter">
                다른 검색어를 시도해 보거나 검색 필터를 삭제하세요.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
