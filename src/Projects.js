import React from 'react';
import Project from './Project.js'
import './Projects.css'
import { Link } from 'react-router-dom';
import Navbar from './Navbar.js';


function Projects(props) {

    let { projects, isHomePage } = props;

    let projmap = projects.map(p => 
                    <Project 
                    key={p.name}
                    name={p.name}
                    tech={p.tech}
                    year={p.year}
                    description={p.description}
                    link={p.link}
                    />
                )

    return (
        <>
            {!isHomePage &&
            <Navbar/>
            }
            <div className="Projects">
                <div className="SectionTitle">Projects</div>
                <div className='ProjectGallery'>

                    {isHomePage
                    ? projmap.slice(0,3) 
                    : projmap
                    }
                </div>
                {isHomePage &&
                <Link to='Projects' className='More'>More...</Link>
                }
        </div>
        </>
    );
}

export default Projects;