import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useLocalStorage from '../hooks/useLocalStorage';
import { toast } from 'react-toastify';

function Header() {
  const darkMode = useSelector((state) => state.darkMode);
  const language = useSelector((state) => state.language);
  const content = useSelector((state) => state.content);
  const dispatch = useDispatch();

  const [, setLangStorage] = useLocalStorage('language', 'en');
  const [, setDarkStorage] = useLocalStorage('darkMode', false);

  if (!content) return null;

  const toggleLanguage = () => {
    const newLang = language === 'tr' ? 'en' : 'tr';
    setLangStorage(newLang);
    dispatch({ type: 'SET_LANGUAGE', payload: newLang });

    toast(content.toast.langChange);
  };

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkStorage(newDarkMode);
    dispatch({ type: 'TOGGLE_DARK_MODE', payload: newDarkMode });

    toast(newDarkMode ? content.toast.darkOn : content.toast.darkOff);
  };

  return (
    <header className={`header-container flex flex-row w-full h-auto py-8 justify-end transition-colors duration-300 ${darkMode ? 'bg-[#2A262B]' : 'bg-[#F4F4F4]'}`}>
      <img
        src="./src/images/header-circle.png"
        alt="header-desktop-img"
        className="hidden lg:block absolute w-[111px] h-[111px] object-contain left-[600px] top-[-40px]"
      />
      <div className="header-content-wrapper flex flex-row w-full max-w-max items-center gap-[14px] px-4">
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
            className={`mode-switch-label w-[55px] h-[24px] rounded-full relative cursor-pointer flex items-center transition-colors duration-300 ${darkMode ? 'bg-[#000000]' : 'bg-[#E92577]'}`}
          >
            <div className={`mode-switch-circle absolute w-[16px] h-[16px] ml-[4.4px] rounded-full transition-all duration-300 
            ${darkMode
                ? 'translate-x-[30px] bg-transparent shadow-[inset_-5px_-1px_0_0_#FFE86E]'
                : 'translate-x-0 bg-[#FFE86E]'
              }`}
            ></div>
          </label>
          <span className={`font-Inter font-[700] text-[15px] ${darkMode ? 'text-[#D9D9D9]' : 'text-[#777777]'}`}>
            {darkMode ? content.header.lightMode : content.header.darkMode}
          </span>
        </div>
        <span className={`font-Inter font-[700] text-[15px] ${darkMode ? 'text-[#D9D9D9]' : 'text-[#777777]'}`}>  |  </span>
        <div className="language-container font-Inter font-[700] text-[15px]">
          {language === 'tr' ? (
            <p className={`language-text ${darkMode ? 'text-[#D9D9D9]' : 'text-[#777777]'}`}>
              SWITCH TO{" "}
              <span
                onClick={toggleLanguage}
                role="button"
                className={`language-button font-Inter font-[700] text-[15px] cursor-pointer ${darkMode ? 'text-[#B7AAFF]' : 'text-[#E92577]'}`}
              >
                ENGLISH
              </span>
            </p>
          ) : (
            <p className={`language-text ${darkMode ? 'text-[#D9D9D9]' : 'text-[#777777]'}`}>
              <span
                onClick={toggleLanguage}
                role="button"
                className={`language-button font-Inter font-[700] text-[15px] cursor-pointer ${darkMode ? 'text-[#B7AAFF]' : 'text-[#E92577]'}`}
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