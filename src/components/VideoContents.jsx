import React from 'react';

export default function VideoContents({ video }) {
  const { title, thumbnails, channelTitle } = video.snippet;
  return <div className="text-6xl my-6">{title}</div>;
}
