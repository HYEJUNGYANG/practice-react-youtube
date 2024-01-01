import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import VideoContent from './VideoContent';

export default function VideoContents({ query }) {
  // https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}
  const { isSuccess: firstSuccess, data: firstData } = useQuery({
    queryKey: ['firstResult', query],
    queryFn: async () => {
      return fetch(`videos/result.json`).then((res) => res.json());
    }
  });
  const [filteredFirstData, setFilteredFirstData] = useState(null);
  const [secondQueryKey, setSecondQueryKey] = useState(null);
  const [idList, setIdList] = useState(null);
  const { isLoading, data: secondData } = useQuery({
    queryKey: secondQueryKey,
    queryFn: async () => {
      return fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${idList}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
      ).then((res) => res.json());
    },
    enabled: secondQueryKey !== null
  });

  useEffect(() => {
    if (firstSuccess) {
      const tempDataList = firstData.items.filter(
        (data) => data.id.kind === 'youtube#video'
      );
      setFilteredFirstData(tempDataList);
      setSecondQueryKey(['secondResult', tempDataList]);
      let id = '';
      tempDataList.forEach((data, idx) => {
        id += `${idx === 0 ? data.id.videoId : `%2C${data.id.videoId}`}`;
      });
      setIdList(id);
    }
  }, [firstSuccess, firstData]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      {filteredFirstData?.map((video, idx) => (
        <VideoContent
          key={video.id.videoId}
          video={video}
          videoId={video.id.videoId}
          videoInfo={secondData?.items[idx]}
        />
      ))}
    </div>
  );
}
