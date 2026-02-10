import React from 'react';
import { useSelector } from 'react-redux';
import { data } from '../mocks/data';

function Projects() {
  const darkMode = useSelector((state) => state.darkMode);
  const language = useSelector((state) => state.language);

  const projectsContent = data[language].projects;

  return (
    <section className={`projects-container flex flex-col items-center w-full h-auto transition-colors duration-300 ${darkMode ? 'bg-[#484148]' : 'bg-white'}`}>
      <div className='projects-content flex flex-col items-center pt-[50px] w-full lg:pt-[82px] lg:pb-[129px] gap-[36px] lg:w-full lg:max-w-[1064px]'>
        <h3 className={`font-Inter font-[500] text-[36px] ${darkMode ? 'text-[#FFFFFF]' : 'text-[#0A0A14]'}`}>
          {projectsContent.title}
        </h3>
        <div className='projects-info flex flex-col gap-[80px] w-full max-w-[450px] lg:flex-row lg:w-full lg:max-w-[1064px] lg:gap-[64px]'>
          {projectsContent.list.map((project, index) => (
            <div
              key={index}
              className={`project-card relative flex flex-col w-full max-w-[500px] h-[668px] pt-[46px] rounded-[12px] transition-colors duration-300
    ${darkMode ? project.darkBgColor : project.bgColor}`}
            >
              <div className="pl-[40px]">
                <h4 className={`font-['Playfair_Display'] font-[700] text-[29px] ${darkMode ? 'text-[#FFFFFF]' : 'text-[#0A0A14]'}`}>
                  {project.title}
                </h4>
                <p className={`description w-full max-w-[368px] pt-[19px] font-Inter font-[400] text-[16px] ${darkMode ? 'text-white' : 'text-black'}`}>
                  {project.description}
                </p>
                <div className='project-tags flex flex-wrap w-full max-w-[270px] h-auto pt-[27px] gap-[9px]'>
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`tag px-4 py-2 rounded-full font-['Playfair_Display'] font-[700] text-[16px] transition-colors duration-300
                        ${darkMode
                          ? 'bg-[#525252] text-white'
                          : 'bg-white text-black'
                        }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className='project-links flex justify-between w-full max-w-[370px] lg:max-w-[421px] h-auto pt-[35px] font-Inter font-[600] text-[20px]'>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className={`${darkMode ? 'text-[#FFFFFF]' : 'text-[#000000]'}`}
                  >
                    {projectsContent.viewOnGithub}
                  </a>
                  <a
                    href={project.appLink}
                    target="_blank"
                    rel="noreferrer"
                    className={`${darkMode ? 'text-[#FFFFFF]' : 'text-[#000000]'}`}
                  >
                    {projectsContent.goToApp}
                  </a>
                </div>
              </div>
              <img
                src={project.image}
                alt={project.title}
                className='project-image absolute bottom-[-50px] left-0 w-full max-w-[450px] lg:min-w-[500px] h-auto object-contain'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;