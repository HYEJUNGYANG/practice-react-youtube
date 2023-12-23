import { useQuery } from '@tanstack/react-query';
import React from 'react';
import VideoContents from '../components/VideoContents';

export default function Main() {
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
    <div className=" dark:bg-main-dark">
      {videos.items.map((video) => (
        <VideoContents key={video.id} video={video} />
      ))}
    </div>
  );
}
