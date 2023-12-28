import React, { useState } from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

export default function Root() {
  // true일 때는 navbar부분 다 보여지도록 false면 간소화
  const [mini, setMini] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleChange = () => {
    setMini((mini) => !mini);
  };
  return (
    <>
      <Header
        onClick={handleChange}
        darkMode={darkMode}
        onDarkMode={setDarkMode}
      />
      <Outlet context={{ mini, darkMode }} />
    </>
  );
}
