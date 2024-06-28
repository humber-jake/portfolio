import React from 'react';

const Navbar = (props) => {
  const { resume } = props;

  const links = Object.keys(resume);

  const navLinks = links.map((link, index) => {
    return (
      <div className="NavLink" key={index}>
        {link}
      </div>
    );
  });

  return (
    <div className="Navbar">
      <div className="container">
        <div className="NavbarElements">
          <div className="Name">{resume.website}</div>
          <div className="NavLinks">{navLinks.slice(5, 8)}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
