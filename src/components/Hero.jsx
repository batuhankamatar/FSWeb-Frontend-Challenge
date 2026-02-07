import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Hero() {
  const { darkMode, language } = useSelector((state) => state);

  return (
    <section className={`hero-container flex w-full h-auto lg:w-full justify-center lg:h-[578px] lg:pt-[50px] transition-colors duration-300 ${darkMode ? 'bg-[#2A2A2A]' : 'bg-[#F4F4F4]'}`}>

      <div className='hero-content flex flex-col w-full max-w-[400px] h-auto gap-[40px] lg:w-full lg:max-w-[1107px] lg:h-[493px] lg:flex-row lg:justify-between'>

        <div className='left-content-top w-full h-auto gap-[50px] flex flex-col lg:w-full lg:max-w-[666px] lg:h-auto lg:gap-[21px]'>
          <div className='left-content-top flex flex-col'>
            <span className={`font-Inter font-[400] text-[30px] ${darkMode ? 'text-[#AEBCCF]' : 'text-[#1F2937]'}`}>Hi! 👋</span>
            <h1 className={`font-Inter font-[500] text-[42px] ${darkMode ? 'text-[#AEBCCF]' : 'text-[#1F2937]'}`}>
              I’m Almila. I’m a full-stack developer. I can craft solid and scalable frontend products. Let’s meet!
            </h1>
          </div>

          <div className='left-content-bottom flex flex-col w-full h-auto gap-[30px] lg:w-full lg:max-w-[540px] lg:mt-[51.5px] lg:gap-[21px]'>
            <nav className='bottom-logos flex flex-row gap-[20px] justify-center items-center lg:justify-start'>
              <img src="./src/images/linkedIn.png" alt="linkedin-logo" className={darkMode ? 'brightness-200' : ''} />
              <img src="./src/images/github.png" alt="github-logo" className={darkMode ? 'brightness-200' : ''} />
            </nav>

            <div className={`bottom-info font-Inter font-[400] text-[18px] ${darkMode ? 'text-white' : 'text-black'}`}>
              <p className='lg:w-auto lg:max-w[540px]'>
                Currently <span className={darkMode ? 'text-[#E1E1E1]' : 'text-[#AF0C48]'}>Freelancing</span> for <span className={darkMode ? 'text-[#E1E1E1]' : 'text-[#AF0C48]'}>UX, UI, & Web Design</span> Project. <br />
                Invite me to join your team: <span className="text-[#AF0C48] dark:text-[#AF0C48] underline">pratamaiosi@gmail.com</span>
              </p>
            </div>
          </div>
        </div>

        <div className='hero-pic relative w-[361px] h-[361px]'>
          <div className={`absolute top-0 left-0 w-[341px] h-[341px] rounded-[22px] transition-colors ${darkMode ? 'bg-[#525252]' : 'bg-[#E92577]'}`}></div>
          <img
            className="absolute bottom-0 right-0 w-[341px] h-[341px] rounded-[22px]"
            src="./src/images/selfpic.png"
            alt="self-picture"
          />
        </div>

      </div>
    </section>
  )
}

export default Hero;