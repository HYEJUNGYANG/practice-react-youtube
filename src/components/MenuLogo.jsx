import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';

export default function MenuLogo({ darkMode, onClick }) {
  return (
    <>
      <div className="w-auto flex gap-4 items-center ml-4">
        <nav
          className="w-15 aspect-square flex items-center justify-center cursor-pointer rounded-full p-2.5 hover:bg-gray-200/85 font-thin  hover:dark:bg-gray-200/10"
          onClick={onClick}
        >
          <RxHamburgerMenu
            size={'1.4rem'}
            color={darkMode ? 'white' : '#777'}
          />
        </nav>
        {/* logo */}
        <Link
          to="/"
          className="w-22 relative cursor-pointer after:content-['KR'] after:absolute after:-top-2 after:-right-5 after:text-xxs after:dark:text-white"
          title="YouTube 홈"
        >
          <img
            className="w-full"
            src={`img/logo${darkMode ? '-dark' : ''}.svg`}
            alt="youtube logo"
          />
        </Link>
      </div>
    </>
  );
}
