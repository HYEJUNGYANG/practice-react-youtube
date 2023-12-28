import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import VideoInfo from './VideoInfo';
import { Duration } from 'luxon';
import { useNavigate } from 'react-router-dom';

export default function VideoContents({ video, mini, darkMode }) {
  const [d, setD] = useState('');
  const { thumbnails, channelId, channelTitle } = video.snippet;
  const { duration } = video.contentDetails;
  const navigate = useNavigate();
  const {
    isLoading,
    error,
    data: channel
  } = useQuery({
    queryKey: ['channel', channelId],
    queryFn: async () => {
      return fetch(`videos/channel.json`).then((res) => {
        console.log('fetch...');
        return res.json();
      });
    }
  });

  const navigateChannel = () => {
    navigate(
      `/${
        channel.items[0].snippet.customUrl
          ? channel.items[0].snippet.customUrl
          : channelId
      }`,
      {
        state: { channel: channel.items[0] }
      }
    );
  };

  useEffect(() => {
    const d = Duration.fromISO(duration).toISOTime({
      suppressMilliseconds: true
    });
    setD(() => {
      if (d.startsWith('00:')) {
        return d.startsWith('00:0')
          ? d.replace('00:0', '')
          : d.replace('00:', '');
      } else {
        return d;
      }
    });
  }, []);

  // isLoading 구분 안 해주면 loading일 동안 data값이 undefined이기 때문에 error 발생함
  if (isLoading) return <p>Loading...</p>;

  return (
    <div
      className={`${
        mini ? 'w-19%' : 'w-23%'
      } mx-2 mb-10 px-1 pt-1 rounded-md active:bg-black/10 active:dark:bg-white/10`}
    >
      <div
        className={`relative cursor-pointer w-full rounded-xl overflow-hidden hover:rounded-none duration-300 ease-in-out`}
      >
        <span
          className={`absolute bottom-1 right-1 px-1 py-0.5 bg-black/95 text-white text-xs font-bold tracking-tighter rounded-md`}
        >
          {d}
        </span>
        <img
          className="aspect-video object-cover"
          src={thumbnails.standard.url}
          alt="썸네일"
        />
      </div>
      <div className={`cursor-pointer w-full flex mt-3`}>
        <div className="mr-3">
          <div
            className={`w-9 h-9 rounded-full overflow-hidden z-10`}
            title={channelTitle}
            onClick={navigateChannel}
          >
            <img
              className="w-full aspect-square object-cover"
              src={`${channel.items[0].snippet.thumbnails.default.url}`}
              alt="profile img"
            />
          </div>
        </div>
        <VideoInfo video={video} darkMode={darkMode} />
      </div>
    </div>
  );
}
