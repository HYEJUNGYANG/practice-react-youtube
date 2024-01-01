import React from 'react';

export default function VideoFilter({ mini }) {
  return (
    <div
      className={`fixed top-14 left-0 right-0 py-3 flex gap-3.5 z-10 ${
        mini ? 'pl-22' : 'pl-58'
      } bg-white dark:bg-main-dark`}
    >
      {filters.map((filter, idx) => (
        <div
          key={idx}
          className="cursor-pointer bg-gray-100 p-3 py-1.5 rounded-lg text-s font-medium first:bg-main-dark first:text-white hover:bg-gray-200 first:hover:bg-main-dark transition-all duration-150 dark:bg-dark/90 dark:text-white hover:dark:bg-dark-hover first:dark:bg-white first:dark:text-black first:hover:dark:bg-white"
        >
          {filter}
        </div>
      ))}
    </div>
  );
}

const filters = [
  '전체',
  '게임',
  '뉴스',
  '실시간',
  '요리',
  '최근에 업로드된 동영상'
];
