import React from 'react';
import { useSelector } from 'react-redux';
import { data } from '../mocks/data';

function Footer() {
  const darkMode = useSelector((state) => state.darkMode);
  const language = useSelector((state) => state.language);

  const footerContent = data[language].footer;

  return (
    <section className={`footer-container flex justify-center w-full h-auto transition-colors duration-300 ${darkMode ? 'bg-[#2A2A2A]' : 'bg-white'}`}>
      <div className='footer-content flex justify-between w-full max-w-[400px] lg:max-w-[758px] lg:h-auto lg:gap-[58.5px] pt-[100px] md:pt-[100px] lg:pt-0 pb-[180px]'>
        <p className={`pt-[7px] w-full max-w-[300px] lg:max-w-[541px] lg:h-auto lg:text-right font-Inter font-[500] text-[24px] lg:text-[42px] ${darkMode ? 'text-[#AEBCCF]' : 'text-[#0A0A14]'}`}>
          {footerContent.message}
        </p>
        <div className='links flex flex-col pt-[10px] lg:pt-[20px] lg:w-full lg:max-w-[158px] lg:h-auto'>
          {footerContent.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className={`font-Inter font-[500] text-[18px] ${darkMode ? 'text-[#E1E1E1]' : link.color}`}
            >
              {link.name}
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Footer;