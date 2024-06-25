import React from 'react';
import Project from './Project';

const Projects = (props) => {
  let { projects, isHomePage } = props;

  let projmap = projects.map((p) => (
    <Project
      key={p.name}
      name={p.name}
      tech={p.tech}
      year={p.year}
      description={p.description}
      link={p.link}
    />
  ));
  return (
    <div>
      <h1>Projects</h1>
      {projmap}
    </div>
  );
};

export default Projects;
