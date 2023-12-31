import { useQuery } from '@tanstack/react-query';
import React from 'react';
import VideoContents from '../components/main/VideoContents';
import Menu from '../components/Menu';
import { useOutletContext } from 'react-router-dom';
import VideoFilter from '../components/main/VideoFilter';
import { Helmet } from 'react-helmet-async';

export default function Main() {
  const { mini, darkMode } = useOutletContext();
  const {
    isLoading,
    error,
    data: videos
  } = useQuery({
    queryKey: ['videos'],
    queryFn: async () => {
      return fetch(`videos/popular.json`).then((res) => res.json());
    }
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <Helmet>
        <title>YouTube</title>
      </Helmet>
      <div className="flex pt-6 -ml-2">
        <Menu mini={mini} darkMode={darkMode} />
        <div className={`flex flex-col ${mini ? 'pl-22' : 'pl-58'}`}>
          <VideoFilter mini={mini} />
          <div className={`flex flex-wrap mt-16`}>
            {videos.items.map((video) => (
              <VideoContents
                key={video.id}
                video={video}
                mini={mini}
                darkMode={darkMode}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
