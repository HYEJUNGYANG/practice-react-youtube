import React from 'react';
import MenuLogo from './MenuLogo';
import { MdHomeFilled, MdOutlineSubscriptions } from 'react-icons/md';
import { SiYoutubeshorts } from 'react-icons/si';
import { Link } from 'react-router-dom';

export default function Menu({ isLogo, mini }) {
  console.log(mini);
  return (
    <div
      className={`${isLogo ? 'z-30' : 'z-10'} fixed top-0 bottom-0 left-0 ${
        mini ? 'w-22' : 'w-58 overflow-y-auto bg-white dark:bg-main-dark'
      }`}
    >
      {isLogo && <MenuLogo />}
      <div className={`${isLogo ? '' : 'pt-14'} mt-3`}>
        {/* 가장 상단 메뉴 */}
        <Link to="/">
          {menu.map((m, idx) => (
            <div
              className={`flex items-center gap-6 p-2 mx-3 ${
                mini
                  ? 'flex-col gap-1 ml-0 pl-0 py-4 first:-mt-2'
                  : 'first:bg-gray-100 dark:first:bg-gray-50/15'
              } rounded-xl hover:bg-gray-100 hover:dark:bg-gray-50/15`}
              title={m.title}
              key={idx}
            >
              <span className="text-2xl pl-1 dark:text-white">{m.icon}</span>
              <span
                className={`${
                  mini ? 'text-xxs ml-1' : 'text-sm'
                } dark:text-white`}
              >
                {m.title}
              </span>
            </div>
          ))}
        </Link>
      </div>
    </div>
  );
}

const menu = [
  {
    title: '홈',
    icon: <MdHomeFilled />
  },
  {
    title: 'Shorts',
    icon: <SiYoutubeshorts />
  },
  {
    title: '구독',
    icon: <MdOutlineSubscriptions />
  }
];
