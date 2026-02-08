import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Skills() {
  const { language, darkMode } = useSelector((state) => state);

  return (
    <section className={`skills-container flex flex-col items-center lg:w-full lg:h-[490px] transition-colors duration-300 ${darkMode ? 'bg-[#2A2A2A]' : 'bg-white'}`}>
      <nav className='skills-content flex items-center flex-col pt-[50px] lg:flex-col lg:w-full lg:max-w-[942px] lg-h-auto lg:pt-[80px] lg:pb-[130px] lg:gap-[56px] '>

        <h1 className={`font-Inter font-[500] text-[48px] ${darkMode ? 'text-[#AEBCCF]' : 'text-[#0A0A14]'}`}>Skills</h1>

        <div className='skills flex w-full max-w-[327px] h-auto pt-[50px] pb-[50px] flex-wrap justify-between gap-y-[35px] lg:flex-row lg:flex-nowrap lg:w-full lg:max-w-[942px] lg-h-auto lg:gap-[35px] '>

          <div className='skill-box flex flex-col gap-[10px] lg:flex-col lg:w-[146px] lg:h-[166px] lg:gap-[10px] lg:items-center'>
            <img
              className="w-[120px] h-[120px] object-contain rounded-[6px]"
              src="./src/images/js-logo.png"
              alt="javascript-logo"
            />
            <h2 className={`font-Inter font-[500] text-[24px] ${darkMode ? 'text-[#B7AAFF]' : 'text-[#777777]'}`}>JAVASCRIPT</h2>
          </div>

          <div className='skill-box flex flex-col gap-[10px] lg:flex-col lg:w-[146px] lg:h-[166px] lg:gap-[10px] items-center'>
            <img
              className="w-[120px] h-[120px] object-contain rounded-[6px]"
              src="./src/images/react-logo.png"
              alt="react-logo"
            />
            <h2 className={`font-Inter font-[500] text-[24px] ${darkMode ? 'text-[#B7AAFF]' : 'text-[#777777]'}`}>REACT</h2>
          </div>

          <div className='skill-box flex flex-col gap-[10px] lg:flex-col lg:w-[146px] lg:h-[166px] lg:gap-[10px] items-center'>
            <img
              className="w-[120px] h-[120px] object-contain rounded-[6px]"
              src="./src/images/redux-logo.png"
              alt="redux-logo"
            />
            <h2 className={`font-Inter font-[500] text-[24px] ${darkMode ? 'text-[#B7AAFF]' : 'text-[#777777]'}`}>REDUX</h2>
          </div>

          <div className='skill-box flex flex-col gap-[10px] lg:flex-col lg:w-[146px] lg:h-[166px] lg:gap-[10px] items-center'>
            <img
              className="w-[120px] h-[120px] object-contain rounded-[6px]"
              src="./src/images/tanStack-logo.png"
              alt="tanStack-logo"
            />
            <h2 className={`font-Inter font-[500] text-[24px] ${darkMode ? 'text-[#B7AAFF]' : 'text-[#777777]'}`}>TANSTACK</h2>
          </div>

          <div className='skill-box flex flex-col gap-[10px] lg:flex-col lg:w-[146px] lg:h-[166px] lg:gap-[10px] items-center'>
            <img
              className="w-[120px] h-[120px] object-contain rounded-[6px]"
              src="./src/images/vs-logo.png"
              alt="vs-logo"
            />
            <h2 className={`font-Inter font-[500] text-[24px] ${darkMode ? 'text-[#B7AAFF]' : 'text-[#777777]'}`}>VS CODE</h2>
          </div>

          <div className='skill-box flex flex-col gap-[10px] lg:flex-col lg:w-[146px] lg:h-[166px] lg:gap-[10px] items-center'>
            <img
              className="w-[120px] h-[120px] object-contain rounded-[6px]"
              src="./src/images/figma-logo.png"
              alt="figma-logo"
            />
            <h2 className={`font-Inter font-[500] text-[24px] ${darkMode ? 'text-[#B7AAFF]' : 'text-[#777777]'}`}>FIGMA</h2>
          </div>

        </div>
      </nav>
    </section>
  )
}

export default Skills;