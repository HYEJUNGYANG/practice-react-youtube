import React, { useEffect, useState } from 'react';
import { MdOutlineNightlight, MdOutlineLightMode } from 'react-icons/md';
import Search from './Search';
import MenuLogo from './MenuLogo';

export default function Header({ onClick }) {
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

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
      setDark(true);
    }
  }, []);

  return (
    <div className="top-0 inset-x-0 z-20 h-14 flex justify-between items-center bg-white fixed dark:bg-main-dark">
      <MenuLogo darkMode={darkMode} onClick={onClick} />
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
