import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function VideoContent({ video, videoId, videoInfo }) {
  const { title } = video.snippet;
  const { channelTitle, publishedAt, thumbnails } = videoInfo.snippet;
  const { duration, licensedContent } = videoInfo.contentDetails;
  const { viewCount } = videoInfo.statistics;
  const titleRef = useRef(null);
  const navigate = useNavigate();

  const toNavigate = () => {
    navigate(`/watch?v=${videoId}`);
  };

  useEffect(() => {
    // &#39 등, html entity를 변환해주기 위함
    titleRef.current.innerHTML = title;
  }, [title]);

  return (
    <div className={`w-70% flex gap-4 mx-auto my-5`}>
      <div
        className={`cursor-pointer w-90 rounded-xl overflow-hidden hover:rounded-none transition-all duration-300`}
        onClick={toNavigate}
      >
        <img
          className={`aspect-video object-cover`}
          src={
            thumbnails.maxres ? thumbnails.maxres.url : thumbnails.standard.url
          }
          alt="thumbnails"
        />
      </div>
      <div className="w-minus22">
        <p className="font-roboto text-lg font-medium text-wrap" ref={titleRef}>
          {title}
        </p>
      </div>
    </div>
  );
}
