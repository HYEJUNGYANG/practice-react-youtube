import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

export default function Header() {
  return (
    <div className="top-0 inset-x-0 z-10 h-14 flex justify-between items-center shadow-md bg-white fixed">
      <div className="w-auto flex gap-4 items-center ml-4">
        <nav
          className="w-15 aspect-square flex items-center justify-center cursor-pointer rounded-full p-2.5 hover:bg-gray-200/85 font-thin"
          onClick={() => {
            alert('MENU CLICK');
          }}
        >
          <RxHamburgerMenu size={'1.4rem'} color="#777" />
        </nav>
        {/* logo */}
        <div
          className="w-22 relative cursor-pointer after:content-['KR'] after:absolute after:-top-2 after:-right-5 after:text-xxs"
          title="YouTube 홈"
        >
          <img className="w-full" src="img/logo.svg" alt="youtube logo" />
        </div>
      </div>
      <div>test</div>
    </div>
  );
}
