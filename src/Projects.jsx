import React from 'react';
import ProjectCard from './ProjectCard';
import ProjectSlide from './ProjectSlide';
import './Projects.css';
import { Link } from 'react-router-dom';

const Projects = (props) => {
  let { projects, isHomePage } = props;

  let allProjects = projects.map((project) => {
    return isHomePage ? (
      <ProjectCard key={project.name} project={project} isHomePage />
    ) : (
      <ProjectSlide key={project.name} project={project} isHomePage />
    );
  });

  return (
    <>
      <div className={isHomePage && 'Projects'}>
        <div className={isHomePage ? 'ProjectsTitle' : 'FullProjectsTitle'}>
          Projects
        </div>
        <div
          className={isHomePage ? 'ProjectsSection' : 'FullProjects container'}
        >
          {isHomePage ? allProjects.splice(0, 3) : allProjects}
        </div>
        {isHomePage && (
          <Link className="More" to="/projects">
            More...
          </Link>
        )}
      </div>
    </>
  );
};

export default Projects;
