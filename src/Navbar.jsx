import React from 'react';

const Navbar = (props) => {
  const { name } = props;
  return (
    <div>
      <div className="Navbar">
        <div className="Name">{name}</div>
        <div className="NavLinks">
          <span>Technology</span>
          <span>Education</span>
          <span>Projects</span>
          <span>Experience</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
