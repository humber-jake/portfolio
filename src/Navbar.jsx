import React from 'react';

const Navbar = (props) => {
  const { resume } = props;

  const links = Object.keys(resume);

  const navLinks = links.map((link) => {
    return <div className="NavLink">{link}</div>;
  });

  return (
    <div className="Navbar">
      <div className="NavbarElements">
        <div className="Name">{resume.name}</div>
        <div className="NavLinks">{navLinks.slice(4, 7)}</div>
      </div>
    </div>
  );
};

export default Navbar;
