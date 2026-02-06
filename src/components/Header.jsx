import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Header() {
  const { language, darkMode } = useSelector((state) => state);
  const dispatch = useDispatch();

  const toggleLanguage = () => {
    const newLang = language === 'tr' ? 'en' : 'tr';
    dispatch({ type: 'SET_LANGUAGE', payload: newLang });
  };

  const toggleDarkMode = () => {
    dispatch({ type: 'TOGGLE_DARK_MODE' });
  };

  return (
    <header className="header-container flex flex-row w-full h-auto justify-end py-8">
      <div className="header-content-wrapper flex flex-row w-full max-w-[359px] ml-auto mr-0 items-center gap-[14px]">

        {/* Dark Mode Switch Alanı */}
        <div className="mode-switch-container flex items-center gap-[4px]">
          <input
            type="checkbox"
            id="darkModeToggle"
            onChange={toggleDarkMode}
            checked={darkMode}
            className="hidden"
          />

          <label
            htmlFor="darkModeToggle"
            className={`mode-switch-label w-[55px] h-[24px] rounded-full relative cursor-pointer flex items-center transition-colors duration-300 ${darkMode ? 'bg-[#3A3A3A]' : 'bg-[#E92577]'}`}
          >
            <div className={`mode-switch-circle absolute w-[16px] h-[16px] ml-[4.4px] rounded-full transition-all duration-300 ${darkMode ? 'translate-x-[30px] bg-[#FFE86E]' : 'translate-x-0 bg-[#FFE86E]'}`}></div>
          </label>

          <span className="font-Inter font-[700] text-[15px]">
            {darkMode ? 'LIGHT MODE' : 'DARK MODE'}
          </span>
        </div>

        <span className="font-Inter font-[700] text-[15px]">  |  </span>

        {/* Dil Değiştirme Alanı */}
        <div className="language-container font-Inter font-[700] text-[15px]">
          {language === 'tr' ? (
            <p className="language-text text-[#777777]">
              SWITCH TO{" "}
              <span
                onClick={toggleLanguage}
                role="button"
                className="language-button font-Inter font-[700] text-[15px] cursor-pointer"
              >
                ENGLISH
              </span>
            </p>
          ) : (
            <p className="language-text text-[#777777]">
              <span
                onClick={toggleLanguage}
                role="button"
                className="language-button font-Inter font-[700] text-[15px] cursor-pointer"
              >
                TÜRKÇE
              </span>
              'YE GEÇ
            </p>
          )}
        </div>

      </div>
    </header>
  );
}

export default Header;