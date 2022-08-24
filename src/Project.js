import React from 'react';
import EastIcon from '@mui/icons-material/East';

function Project(props) {

    const {name, tech, description, link } = props;

    return (
        <div className='Project'>
            <div className='ProjectName'>{name}</div>
            <div className='ProjectTech'>{tech.join(', ')}</div>
            <a className='ProjectLink' href={link}>
                <img className='ProjectThumbnail' src={`thumbnails/${name}.png`} alt=''></img>
            </a>
            <div className='ProjectDescription'>{description}</div>
            <a className='ProjectLink' href={link}>
                <EastIcon/>
            </a>
        </div>
    );
}

export default Project;