import React from 'react';
import './Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer(props) {
    return (
        <div className='Footer'>
            <div className="Links">
                <a href='/'>Home</a>
                <a href='/Projects'>Projects</a>
                <a href='/Education'>Education</a>
                <a href='/Experience'>Experience</a>

            </div>
                <div className='SocialMedia'>
                    <a href="https://www.instagram.com/humberjak/"><InstagramIcon/></a>
                    <a href="https://www.linkedin.com/in/jacob-humber/"><LinkedInIcon/></a>
                    <a href="https://github.com/humber-jake"><GitHubIcon/></a>
                    <a href="https://www.youtube.com/channel/UCH2q9q-58znrFNGVg5J-x1w"><YouTubeIcon/></a>
                </div>
        </div>
    );
}

export default Footer;