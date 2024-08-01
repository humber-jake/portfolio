import React from 'react';
import './Projects.css';

const ProjectSlide = (props) => {
  const { name, tech, year, description, link } = props.project;

  return (
    <div className="ProjectSlide" href={link}>
      <div className="ProjectName">{name}</div>
      <div className="ProjectBody">
        <div className="ProjectLeft">
          <img
            className="ProjectThumbnail"
            src={`./images/${name}.png`}
            alt=""
          ></img>
        </div>
        <div className="ProjectRight">
          <div className="ProjectTech">{tech.join(', ')}</div>
          <div className="ProjectDescription">{description}</div>
          <a href={link} className="ProjectLink">
            {'GO>'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectSlide;
