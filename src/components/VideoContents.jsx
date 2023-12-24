import React from 'react';

export default function VideoContents({ video }) {
  const { title, thumbnails, channelTitle } = video.snippet;
  return (
    <div className="">
      <p className="text-6xl mb-5 dark:text-white">{title}</p>
    </div>
  );
}
