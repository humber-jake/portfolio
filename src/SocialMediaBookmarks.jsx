import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

const SocialMediaBookmarks = (props) => {
  const { socials } = props;

  return (
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
  );
};

export default SocialMediaBookmarks;
