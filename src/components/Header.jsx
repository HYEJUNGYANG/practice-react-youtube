import React, { useEffect, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { MdOutlineNightlight, MdOutlineLightMode } from 'react-icons/md';
import Search from './Search';

export default function Header() {
  // default 라이트 모드, localStorage에 저장된 게 있으면 그 값 반영되도록 useEffect안에서 세팅
  const [darkMode, setDark] = useState(false);

  const handleDarkMode = () => {
    // 현재 darkMode가 true면 라이트 모드로 변경해줘야 함
    if (darkMode) {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    } else {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    }
    setDark((prev) => !prev);
  };

  // darkMode 관련 설정할 예정
  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
      setDark(true);
    }
  }, []);

  return (
    <div className="top-0 inset-x-0 z-10 h-14 flex justify-between items-center bg-white fixed dark:bg-main-dark">
      <div className="w-auto flex gap-4 items-center ml-4">
        <nav
          className="w-15 aspect-square flex items-center justify-center cursor-pointer rounded-full p-2.5 hover:bg-gray-200/85 font-thin  hover:dark:bg-gray-200/10"
          onClick={() => {
            alert('MENU CLICK');
          }}
        >
          <RxHamburgerMenu
            size={'1.4rem'}
            color={darkMode ? 'white' : '#777'}
          />
        </nav>
        {/* logo */}
        <div
          className="w-22 relative cursor-pointer after:content-['KR'] after:absolute after:-top-2 after:-right-5 after:text-xxs after:dark:text-white"
          title="YouTube 홈"
        >
          <img
            className="w-full"
            src={`img/logo${darkMode ? '-dark' : ''}.svg`}
            alt="youtube logo"
          />
        </div>
      </div>
      <Search />
      <button className="mr-6 flex" onClick={handleDarkMode}>
        {darkMode ? (
          <MdOutlineLightMode size={'1.7rem'} className="text-white" />
        ) : (
          <MdOutlineNightlight size={'1.7rem'} className={`text-black`} />
        )}
      </button>
    </div>
  );
}
