import { useQuery } from '@tanstack/react-query';
import React from 'react';
import VideoContents from '../components/VideoContents';
import Menu from '../components/Menu';
import { useOutletContext } from 'react-router-dom';

export default function Main() {
  const { mini } = useOutletContext();
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
    <div className="flex pt-3 dark:bg-main-dark">
      <Menu mini={mini} />
      <div className={`${mini ? 'ml-22' : 'ml-58'}`}>
        {videos.items.map((video) => (
          <VideoContents key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}
