import React from 'react';
import { useSelector } from 'react-redux';
import { data } from '../mocks/data';

function Skills() {
  const darkMode = useSelector((state) => state.darkMode);
  const language = useSelector((state) => state.language);

  const skillsContent = data[language].skills;

  return (
    <section className={`skills-container flex flex-col items-center lg:w-full lg:h-[490px] transition-colors duration-300 ${darkMode ? 'bg-[#484148]' : 'bg-white'}`}>
      <img
        src="./src/images/skills-rectangle.png"
        alt="background-decoration"
        className="absolute hidden lg:block left-[-45px] top-[1150px] w-[181px] h-[49px] z-0 object-contain"
      />
      <img
        src="./src/images/hollow-circle-pink.png"
        alt="background-decoration"
        className="absolute hidden lg:block right-[-25px] top-[1200px] w-[121px] h-[121px] z-0 object-contain"
      />
      <nav className='skills-content flex items-center flex-col pt-[50px] lg:flex-col lg:w-full lg:max-w-[942px] lg-h-auto lg:pt-[80px] lg:pb-[130px]'>
        <h1 className={`font-Inter font-[500] text-[48px] ${darkMode ? 'text-[#F4F4F4]' : 'text-[#0A0A14]'}`}>
          {skillsContent.title}
        </h1>
        <div className='skills flex w-full max-w-[327px] h-auto pt-[50px] pb-[50px] flex-wrap justify-between gap-y-[35px] lg:flex-row lg:flex-nowrap lg:w-full lg:max-w-[942px] lg-h-auto lg:gap-[35px] '>
          {skillsContent.list.map((skill, index) => (
            <div key={index} className='skill-box flex flex-col gap-[10px] lg:flex-col lg:w-[146px] lg:h-[166px] lg:gap-[10px] lg:items-center'>
              <img
                className="w-[120px] h-[120px] object-contain rounded-[6px]"
                src={skill.icon}
                alt={`${skill.name}-logo`}
              />
              <h2 className={`font-Inter font-[500] text-[24px] ${darkMode ? 'text-[#B7AAFF]' : 'text-[#777777]'}`}>
                {skill.name}
              </h2>
            </div>
          ))}
        </div>
      </nav>
    </section>
  )
}

export default Skills;