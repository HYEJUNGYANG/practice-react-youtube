import { useQuery } from '@tanstack/react-query';
import React from 'react';

export default function VideoContents({ video }) {
  const { title, thumbnails, channelId, channelTitle } = video.snippet;
  const {
    isLoading,
    error,
    data: channel
  } = useQuery({
    queryKey: ['channel', channelId],
    queryFn: async () => {
      return fetch(`videos/channel.json`).then((res) => res.json());
    }
  });

  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="">
      <div className="cursor-pointer w-96 rounded-xl overflow-hidden hover:rounded-none duration-300 ease-in-out">
        <img
          className="aspect-video object-cover"
          src={thumbnails.standard.url}
          alt=""
        />
      </div>
      <div>
        <img
          src={`${channel.items[0].snippet.thumbnails.default.url}`}
          alt=""
        />
      </div>
      <p className="text-xl mb-5 dark:text-white">{title}</p>
    </div>
  );
}
