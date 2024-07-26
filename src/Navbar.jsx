import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

const Navbar = (props) => {
  const { resume } = props;

  const socials = resume.socialmedia;

  const links = Object.keys(resume);

  const navLinks = links.map((link, index) => {
    return (
      <div className="NavLink" key={index}>
        {link}
      </div>
    );
  });

  return (
    <>
      <div className="SocialMediaBookmarks">
        <div className="container">
          <a href={socials.LinkedIn}>
            <LinkedInIcon htmlColor="white" />
          </a>
          <a href={socials.Instagram}>
            <InstagramIcon htmlColor="white" />
          </a>
          <a href={socials.GitHub}>
            <GitHubIcon htmlColor="white" />
          </a>
        </div>
      </div>
      <div className="Navbar">
        <div className="container">
          <div className="NavbarElements">
            <div className="Name">{resume.website}</div>
            <div className="NavLinks">{navLinks.slice(5, 8)}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
