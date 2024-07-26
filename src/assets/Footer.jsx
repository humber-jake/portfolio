import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = (props) => {
  const { resume } = props;

  const links = Object.keys(resume);

  const socials = resume.socialmedia;

  const navLinks = links
    .map((link, index) => {
      return (
        <div className="" key={index}>
          {link}
        </div>
      );
    })
    .slice(5, 8);

  return (
    <div className="Footer">
      <div className="container">
        <div className="PageLinks">{navLinks}</div>
        <div className="SocialLinks">
          <div className="SocialMediaBookmarks">
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
      </div>
    </div>
  );
};

export default Footer;
