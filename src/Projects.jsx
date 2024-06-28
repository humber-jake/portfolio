import React from 'react';
import Project from './Project';
import './Projects.css';

const Projects = (props) => {
  let { projects, isHomePage } = props;

  let allProjects = projects.map((project) => {
    return <Project key={project.name} project={project} />;
  });

  return (
    <>
      <div className="Projects">
        <div className="ProjectsTitle">Projects</div>
        <div className="ProjectsSection">
          {isHomePage ? allProjects.splice(0, 3) : allProjects}
        </div>
      </div>
    </>
  );
};

export default Projects;
