import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

export default function Header() {
  return (
    <div className="fixed top-0 inset-x-0 z-10 h-14 flex justify-between items-center shadow-md bg-white">
      <div className="w-auto flex gap-4 items-center ml-3">
        <nav
          className="w-15 aspect-square flex items-center justify-center cursor-pointer rounded-full p-3 hover:bg-gray-100 font-thin"
          onClick={() => {
            alert('HAMBURGER CLICK');
          }}
        >
          <RxHamburgerMenu size={'1.5rem'} color="#777" />
        </nav>
        {/* logo */}
        <div
          className="w-24 relative cursor-pointer after:content-['KR'] after:absolute after:-top-2 after:-right-5 after:text-xs"
          title="YouTube 홈"
        >
          <img className="w-full" src="img/logo.svg" alt="youtube logo" />
        </div>
      </div>
      <div>test</div>
    </div>
  );
}
