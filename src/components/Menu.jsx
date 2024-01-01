import React from 'react';
import MenuLogo from './MenuLogo';
import { MdHomeFilled, MdOutlineSubscriptions } from 'react-icons/md';
import { SiYoutubeshorts } from 'react-icons/si';
import { Link } from 'react-router-dom';

export default function Menu({ isLogo, mini, darkMode }) {
  return (
    <div
      className={`${isLogo ? 'z-40' : 'z-20'} fixed top-0 bottom-0 left-0 ${
        mini ? 'w-22' : 'w-58'
      } overflow-y-auto`}
    >
      {isLogo && <MenuLogo />}
      <div className={`${isLogo ? '' : 'pt-14'} mt-3 ml-1`}>
        {/* 가장 상단 메뉴 */}
        <Link to="/">
          {menu.map((m, idx) => (
            <div
              className={`flex items-center p-2 mx-3 ${
                mini
                  ? 'flex-col gap-2 ml-0 pl-0 py-4 mr-1 first:-mt-2'
                  : 'gap-6 first:bg-gray-100 dark:first:bg-gray-50/15'
              } rounded-xl hover:bg-gray-100 hover:dark:bg-gray-50/15`}
              title={m.title}
              key={idx}
            >
              {/* <span className="text-2xl pl-1 dark:text-white">{m.icon}</span> */}
              <div className="pl-1">
                {darkMode ? (
                  <img src={`${m.darkICon}`} alt="icon" />
                ) : (
                  <img src={`${m.icon}`} alt="icon" />
                )}
              </div>
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
    icon: 'img/icon/home-fill.svg',
    darkICon: 'img/icon/home-dark-fill.svg'
  },
  {
    title: 'Shorts',
    icon: 'img/icon/shorts.svg',
    darkICon: 'img/icon/shorts-dark.svg'
  },
  {
    title: '구독',
    icon: 'img/icon/subscription.svg',
    darkICon: 'img/icon/subscription-dark.svg'
  }
];
