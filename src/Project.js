import React from 'react';
import EastIcon from '@mui/icons-material/East';

function Project(props) {

    const {name, tech, description, link } = props;

    return (
        <a className='ProjectLink' href={link}>
        <div className='Project'>
            <div className='ProjectName'>{name}</div>
            <div className='ProjectTech'>{tech.join(', ')}</div>
                <img className='ProjectThumbnail' src={`thumbnails/${name}.png`} alt=''></img>
            <div className='ProjectDescription'>{description}</div>
                <EastIcon/>
        </div>
        </a>
    );
}

export default Project;