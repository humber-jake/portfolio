import React from 'react';

const Navbar = (props) => {
  const { resume } = props;

  const links = Object.keys(resume);

  const navLinks = links.map((link) => {
    return <div>{link}</div>;
  });

  return (
    <div className="Navbar">
      <div className="Name">{resume.name}</div>
      <div className="NavLinks">{navLinks.slice(3, 6)}</div>
    </div>
  );
};

export default Navbar;
