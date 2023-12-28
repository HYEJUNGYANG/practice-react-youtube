import React, { useEffect, useState } from 'react';
import { MdOutlineNightlight, MdOutlineLightMode } from 'react-icons/md';
import Search from './Search';
import MenuLogo from './MenuLogo';
import { useSearchParams } from 'react-router-dom';

export default function Header({ onClick, darkMode, onDarkMode }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleDarkMode = () => {
    // 현재 darkMode가 true면 라이트 모드로 변경해줘야 함
    if (darkMode) {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
      document.documentElement.style.backgroundColor = '#fff';
    } else {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
      document.documentElement.style.backgroundColor = '#0f0f0f';
    }
    onDarkMode((prev) => !prev);
  };

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.style.backgroundColor = '#0f0f0f';
      onDarkMode(true);
    }
  }, []);

  return (
    <div className="top-0 inset-x-0 z-40 h-14 flex justify-between items-center fixed">
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
