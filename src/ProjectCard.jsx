import React from 'react';
import './Projects.css';

const Project = (props) => {
  const { name, tech, year, description, link } = props.project;

  return (
    <a className="ProjectLink ProjectCard" href={link}>
      <div className="ProjectName">{name}</div>
      <div className="ProjectTech">{tech.join(', ')}</div>
      <img
        className="ProjectThumbnail"
        src={`./images/${name}.png`}
        alt=""
      ></img>
      <div className="ProjectDescription">{description}</div>
    </a>
  );
};

export default Project;
