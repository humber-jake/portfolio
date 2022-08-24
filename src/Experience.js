import React, { useState, createRef } from 'react';
import { Link } from 'react-router-dom';
import './Experience.css'
import Navbar from './Navbar';
import Footer from './Footer';
import Company from './Company';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

function Experience(props) {

    const {experience, isHomePage} = props;
    let collapseRefs = {};

    const [toggle, setToggle] = useState(true)

    for (let i = 0; i < experience.length; i++) {
        collapseRefs[i] = createRef()
    }

    console.log(collapseRefs)

    let body = experience.map((company, i) =>
        <Company key={i} ref={collapseRefs[i]} i={i} company={company}/>
    )

    function collapseAll(){
        setToggle(!toggle)
        experience.forEach((company, i) => {
            collapseRefs[i].current.collapse();
        })
    }
    function expandAll(){
        setToggle(!toggle)
        experience.forEach((company, i) => {
            collapseRefs[i].current.expand();
        })
    }

    return (
        <>
        {!isHomePage &&
            <Navbar/>
        }

        <div className='Experience'>
            <div className="SectionTitle">Experience</div>

            {!isHomePage &&
                <div className='Buttons'>
                    { toggle
                        ? <div onClick={collapseAll}><RemoveCircleIcon/></div>
                        : <div onClick={expandAll}><AddCircleIcon/></div>
                    }
                </div>
            }

            { isHomePage
                ? [body.slice(0,3), <Link key='link' to='/Experience' className='More'>More...</Link>]
                : body
            }
        </div>

        {!isHomePage &&
                <div className='Buttons'>
                    { toggle
                        ? <div onClick={collapseAll}><RemoveCircleIcon/></div>
                        : <div onClick={expandAll}><AddCircleIcon/></div>
                    }
                </div>
            }

        {!isHomePage &&
            <Footer/>
        }
        </>
    );
}

export default Experience;