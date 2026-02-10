import React from 'react';
import { useSelector } from 'react-redux';
import { data } from '../mocks/data';
import { toast } from 'react-toastify';

function Footer() {
  const darkMode = useSelector((state) => state.darkMode);
  const language = useSelector((state) => state.language);

  const footerContent = data[language].footer;

  const handleEmailClick = (e, link) => {
    const isEmail = link.name.toLowerCase() === 'email' || link.name.toLowerCase() === 'e-posta';

    if (isEmail) {
      e.preventDefault();
      const emailToCopy = link.url.replace('mailto:', '');
      navigator.clipboard.writeText(emailToCopy);
      toast.success(language === 'tr' ? "E-posta adresi kopyalandı!" : "Email address copied!");
    }
  };

  return (
    <section className={`footer-container flex justify-center w-full h-auto transition-colors duration-300 ${darkMode ? 'bg-[#484148]' : 'bg-white'}`}>
      <div className='footer-content flex justify-between w-full max-w-[400px] lg:max-w-[758px] lg:h-auto lg:gap-[58.5px] pt-[100px] md:pt-[100px] lg:pt-0 pb-[180px]'>
        <p className={`pt-[7px] w-full max-w-[300px] lg:max-w-[541px] lg:h-auto lg:text-right font-Inter font-[500] text-[24px] lg:text-[42px] ${darkMode ? 'text-[#FFFFFF]' : 'text-[#0A0A14]'}`}>
          {footerContent.message}
        </p>
        <div className='links flex flex-col pt-[10px] lg:pt-[20px] lg:w-full lg:max-w-[158px] lg:h-auto'>
          {footerContent.links.map((link, index) => {
            const isEmailLink = link.name.toLowerCase().includes('email') || link.name.toLowerCase().includes('e-posta');

            return (
              <a
                key={index}
                href={isEmailLink ? 'javascript:void(0)' : link.url}
                target={isEmailLink ? '_self' : '_blank'}
                rel="noreferrer"
                onClick={(e) => handleEmailClick(e, link)}
                className={`font-Inter font-[500] text-[18px] cursor-pointer ${darkMode ? link.darkColor : link.color}`}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Footer;