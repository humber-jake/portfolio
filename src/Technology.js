import React from 'react';
import { useState } from 'react';
import './Technology.css'
import { PlayArrow } from '@mui/icons-material';

function Technology(props) {

    const [toggle, setToggle] = useState(false);
    
    const tech = props.content;

    let list = tech.map((el,i) => {
            return <span key={i}>
                        <span key={el} className={`${toggle ? 'entryToggle' : ''} entry`}>

                            {toggle && 
                                <span key={i} className='toggleNum'>{i}
                                    <span key={i} className='punctuation'>: </span> 
                                </span>
                            }

                            {toggle 
                            ? `"${el}"` 
                            : [`'${el}'`, <span key={i} className='punctuation'>, </span>]
                            }
                            
                        </span>
                    </span>
            })

    function handleClick(){
        setToggle(!toggle)
    }

    return (
        <div className="Technology">
            <div className="grid">
                <div className="tech">
                    <div className="SectionTitle">Technology</div>
                    <div className='codeArea' onClick={handleClick}>
                        <div className={`${toggle ? 'dropdownToggle' : ''} dropdown`}><PlayArrow/></div>
                        <div className='techList'>
                            ({tech.length})
                            [
                                {toggle
                                ? list
                                : [list.slice(0,3), <span key='...' className='punctuation'>...</span>]
                                }

                                {toggle &&
                                <div key='punctuation'> 
                                    <span className='toggleLength'>length</span>
                                    <span className='punctuation'>:</span>
                                    <span className="length">{tech.length}</span>
                                </div>
                                }
                            ]
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Technology;