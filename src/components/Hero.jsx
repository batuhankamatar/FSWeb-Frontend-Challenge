import React from 'react';
import { useSelector } from 'react-redux';
import { data } from '../mocks/data';
import { toast } from 'react-toastify';

function Hero() {
  const darkMode = useSelector((state) => state.darkMode);
  const language = useSelector((state) => state.language);

  const heroContent = data[language].hero;

  return (
    <section className={`hero-container flex w-full h-auto pt-[30px] pb-[50px] justify-center md:pt-[50px] lg:w-full lg:h-auto lg:pt-[50px] transition-colors duration-300 ${darkMode ? 'bg-[#2A262B]' : 'bg-[#F4F4F4]'}`}>
      <img
        src="/images/hero-rectangle-two.png"
        alt="background-decoration"
        className="absolute hidden lg:block right-[-45px] top-[600px] w-[217px] h-[59px] z-0 object-contain"
      />
      <img
        src="/images/hollow-circle.png"
        alt="background-decoration"
        className="absolute hidden lg:block right-[520px] top-[700px] w-[121px] h-[121px] z-0 object-contain"
      />
      <div className='hero-content flex flex-col w-full max-w-[400px] h-auto gap-[40px] md:w-full md:max-w-[700px] md:h-auto md:items-center lg:w-full lg:max-w-[1107px] lg:h-auto lg:flex-row lg:justify-between'>
        <div className='left-content w-full h-auto gap-[50px] flex flex-col order-last items-center lg:items-start lg:order-first lg:w-full lg:max-w-[666px] lg:h-auto lg:gap-[50px]'>
          <div className='left-content-top flex flex-col gap-[15px] lg:gap-[30px] '>
            <img
              src="/images/hero-rectangle-one.png"
              alt="background-decoration"
              className="absolute hidden lg:block left-95 top-[243px] w-[148px] h-[31px] z-0 object-contain"
            />
            <span className={`relative font-Inter text-center font-[400] text-[25px] md:font-[400] md:text-[30px] lg:font-[400] lg:text-[30px] lg:text-left ${darkMode ? 'text-[#FFFFFF]' : 'text-[#000000]'}`}>
              {heroContent.greeting}
            </span>
            <h1 className={`font-Inter z-10 font-[500] text-[30px] lg:text-[35px] text-center lg:text-left ${darkMode ? 'text-[#FFFFFF]' : 'text-[#0A0A14]'}`}>
              {heroContent.introduction}
            </h1>
          </div>
          <div className='left-content-bottom flex flex-col w-full h-auto gap-[30px] lg:w-full lg:max-w-[540px] lg:mt-[51.5px] lg:gap-[21px]'>
            <nav className='bottom-logos flex flex-row gap-[20px] justify-center items-center lg:justify-start'>
              {heroContent.description.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-[31px] h-[34px] object-contain"
                    src={darkMode ? link.imgDark : link.img}
                    alt={`${link.name}-logo`}
                  />
                </a>
              ))}
            </nav>
            <div className={`bottom-info font-Inter font-[400] text-[16px] lg:text-[18px] ${darkMode ? 'text-[#FFFFFF]' : 'text-[#000000]'}`}>
              <p className='lg:w-auto lg:max-w[540px] text-center lg:text-left'>
                {heroContent.description.status}
                <span className={darkMode ? 'text-[#EA2678]' : 'text-[#AF0C48]'}>
                  {heroContent.description.job}
                </span>
                {heroContent.description.for}
                <span className={darkMode ? 'text-[#EA2678]' : 'text-[#AF0C48]'}>
                  {heroContent.description.project}
                </span>
                <br />
                {heroContent.description.invite}
                <span
                  onClick={() => {
                    navigator.clipboard.writeText(heroContent.description.email);

                    toast.success(language === 'tr' ? "E-posta adresi kopyalandı!" : "Email address copied!");
                  }}
                  role="button"
                  className="text-[#AF0C48] dark:text-[#EA2678] underline cursor-pointer hover:opacity-80 transition-opacity"
                >
                  {heroContent.description.email}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className='hero-pic relative w-[361px] h-[361px] order-first lg:order-last'>
          <div className={`absolute top-0 left-0 w-[341px] h-[341px] rounded-[22px] transition-colors ${darkMode ? 'bg-[#E92577]' : 'bg-[#E92577]'}`}></div>
          <img
            className="absolute bottom-0 right-0 w-[341px] h-[341px] rounded-[22px]"
            src="/images/selfpic.png"
            alt="self-picture"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero;