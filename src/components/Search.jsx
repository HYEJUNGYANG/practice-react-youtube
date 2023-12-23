import React, { useRef, useState } from 'react';
import { TfiSearch, TfiClose } from 'react-icons/tfi';
import { PiMicrophoneFill } from 'react-icons/pi';

export default function Search() {
  // 검색창 input focus 여부
  const [focus, setFocus] = useState(false);
  const [text, setText] = useState('');
  const inputRef = useRef(null);

  const handleFocus = () => {
    setFocus((prev) => !prev);
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleKeyDown = (e) => {
    const key = e.key;
    if (key === 'Escape') {
      inputRef.current.blur();
    }
  };
  const clearTextInput = (e) => {
    e.preventDefault();
    setText('');
    inputRef.current.focus();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
    alert(text.trim());
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center h-10">
        <div
          className={`${
            focus ? 'opacity-100' : 'opacity-0'
          } h-full px-4 pl-5 pr-0 flex justify-center items-center border-solid border-1 border-r-0 border-blue-800 rounded-tl-3xl rounded-bl-3xl dark:text-white dark:border-r-0 dark:border-blue-500`}
        >
          <TfiSearch />
        </div>
        <label className="h-full relative">
          <input
            type="text"
            placeholder="검색"
            className="h-full pl-4 pr-9 py-2 outline-none border-solid border-1 border-slate-300 rounded-tl-3xl rounded-bl-3xl w-100 focus:border-blue-800 focus:rounded-none focus:border-l-0 dark:bg-main-dark dark:border-slate-600 focus:dark:border-l-0 focus:dark:border-blue-500 dark:text-white"
            value={text}
            ref={inputRef}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleFocus}
            onKeyDown={handleKeyDown}
          />
          {/* close button */}
          <button
            type="button"
            className={`absolute top-0 bottom-0 right-0 p-2 flex justify-center items-center ${
              text.length || 'hidden'
            } dark:text-white`}
            onClick={clearTextInput}
          >
            <TfiClose size={'1.3rem'} />
          </button>
        </label>
        {/* search button */}
        <button
          className="h-full px-5 py-2 outline-none bg-gray-50 border-solid border-1 border-slate-300 border-l-0 rounded-tr-3xl rounded-br-3xl shadow-sm hover:bg-gray-100 dark:border-slate-600 dark:bg-dark dark:text-white hover:dark:bg-dark-hover"
          onClick={handleSubmit}
        >
          <TfiSearch size={'1.2rem'} />
        </button>

        {/* mic button */}
        <button
          type="button"
          className="aspect-square p-2.5 ml-4 bg-slate-100 rounded-full hover:bg-gray-200 dark:bg-dark dark:text-white hover:dark:bg-dark-hover"
        >
          <PiMicrophoneFill size={'1.35rem'} />
        </button>
      </div>
    </form>
  );
}
