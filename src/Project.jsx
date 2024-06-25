import React from 'react';

const Project = (props) => {
  const { name, tech, year, description, link } = props;

  return (
    <div>
      <div>{name}</div>
      <div>{tech}</div>
      <div>{year}</div>
      <div>{description}</div>
      <div>{link}</div>
    </div>
  );
};

export default Project;
