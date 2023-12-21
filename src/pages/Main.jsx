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
    <div>
      {videos.items.map((video) => (
        // <div key={video.id}>
        //   <div class="w-48 rounded-xl overflow-hidden">
        //     <img
        //       class="w-full aspect-video object-cover"
        //       src={video.snippet.thumbnails.standard.url}
        //       alt="thumbnail"
        //     />
        //   </div>
        //   <p>{video.snippet.title}</p>
        //   <hr />
        // </div>
        <VideoContents key={video.id} video={video} />
      ))}
    </div>
  );
}
