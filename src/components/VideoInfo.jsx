import React from 'react';
import style from './VideoInfo.module.css';
import { DateTime } from 'luxon';

export default function VideoInfo({ video, darkMode }) {
  const { title, channelTitle, publishedAt } = video.snippet;
  const { licensedContent } = video.contentDetails;
  const { viewCount } = video.statistics;

  // 나중에 day단위 말고 week, month, year도 구분 넣어주기
  // 조회수 구분 하기
  return (
    <div className={`w-full flex flex-col`}>
      <p
        className={`w-fit text-base font-medium mb-1 dark:text-white ${style.title}`}
        title={title}
      >
        {title}
      </p>
      {/* 채널명, 인증여부 */}
      <div className="flex items-center gap-1">
        <p
          className="w-fit text-s font-normal text-black/70 hover:text-black dark:text-white/80 hover:dark:text-white"
          title={channelTitle}
        >
          {channelTitle}
        </p>
        {licensedContent && (
          <div className="w-3.5">
            {darkMode ? (
              <img src="img/license-dark.svg" alt="licensedContent" />
            ) : (
              <img src="img/license.svg" alt="licensedContent" />
            )}
          </div>
        )}
      </div>
      {/* 조회수, 업로드 날짜 */}
      <div className={`text-s font-normal text-black/70 dark:text-white/80`}>
        <span>{viewCount}</span>
        <span className={`before:content-['•'] before:mx-0.5`}>
          {Math.abs(
            DateTime.fromISO(publishedAt)
              .diffNow()
              .shiftTo('day')
              .as('day')
              .toFixed(0)
          )}
          일 전
        </span>
      </div>
    </div>
  );
}
