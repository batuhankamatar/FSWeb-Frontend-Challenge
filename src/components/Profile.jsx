import React from 'react';
import { useSelector } from 'react-redux';
import { data } from '../mocks/data';

function Profile() {
  const darkMode = useSelector((state) => state.darkMode);
  const language = useSelector((state) => state.language);

  const profileContent = data[language].profile;

  return (
    <section className={`profile-container flex flex-col items-center lg:w-full lg:h-auto transition-colors duration-300 ${darkMode ? 'bg-[#2A262B]' : 'bg-[#F4F4F4]'}`}>
      <img
        src="/images/profile-rectangle.png"
        alt="background-decoration"
        className="absolute hidden lg:block right-[830px] top-[1433px] w-[90px] h-[18px] z-0 object-contain"
      />
      <div className='profile-content z-10 flex flex-col items-center w-full max-w-[400px] md:min-w-full gap-[36px] pt-[50px] pb-[50px] lg:pt-[72px] lg:w-full lg:max-w-[1031px] lg:gap-[36px] '>
        <h2 className={`font-Inter font-[500] text-[36px] ${darkMode ? 'text-[#FFFFFF]' : 'text-[#000000]'}`}>
          {profileContent.title}
        </h2>
        <div className='profile-info flex flex-col gap-[36px] md:items-center md:gap-[65px] lg:flex-row lg:w-full lg:max-w-[1031px] lg:h-auto lg:gap-[47px] lg:pb-[81px] '>
          <div className={`basic-info flex flex-col p-8 rounded-[12px] gap-[33px] md:w-full md:max-w-[400px] lg:w-full lg:min-w-[508px] lg:h-auto shadow-[10px_10px_0px_0px_#52525280] ${darkMode ? 'bg-[#525252]' : 'bg-white'}`}>
            <h3 className={`font-['Playfair_Display'] font-[400] text-[24px] ${darkMode ? 'text-[#EA2678]' : 'text-[#EA2678]'}`}>
              {profileContent.basicInfoTitle}
            </h3>
            <div className="flex flex-col gap-4">
              {profileContent.basicInfo.map((info, index) => (
                <div key={index} className="flex flex-row gap-[22px]">
                  <span className={`font-Inter font-[600] text-[18px] w-full max-w-[139px] ${darkMode ? 'text-white' : 'text-black'}`}>
                    {info.label}
                  </span>
                  <span className={`font-Inter font-[400] text-[18px] w-full ${darkMode ? 'text-white' : 'text-black'}`}>
                    {info.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className='about-me flex flex-col gap-4 md:px-[75px] lg:px-0'>
            <h3 className={`font-Inter text-[24px] font-[600] ${darkMode ? 'text-white' : 'text-[#000000]'}`}>
              {profileContent.aboutMeTitle}
            </h3>
            <div className="flex flex-col space-y-4">
              <p className={`font-Inter font-[400] text-[18px] leading-[28px] ${darkMode ? 'text-white' : 'text-black'}`}>
                {profileContent.aboutMe1}
              </p>
              <p className={`font-Inter font-[400] text-[18px] leading-[28px] ${darkMode ? 'text-white' : 'text-black'}`}>
                {profileContent.aboutMe2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile;