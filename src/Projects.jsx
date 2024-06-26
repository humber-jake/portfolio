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
      <div className="sectionTitle">Projects</div>
      {projmap}
    </div>
  );
};

export default Projects;
