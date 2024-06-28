import React from 'react';
import './Projects.css';

const Project = (props) => {
  const { name, tech, year, description, link } = props.project;

  console.log(props);

  return (
    <div className="ProjectCard">
      <div className="ProjectName">{name}</div>
      <div className="ProjectTech">{tech.join(', ')}</div>
      <img
        className="ProjectThumbnail"
        src={`./public/images/${name}.png`}
        alt=""
      ></img>
      <div className="ProjectDescription">{description}</div>
      <div className="ProjectLink">{link}</div>
    </div>
  );
};

export default Project;
