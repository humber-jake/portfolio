import React from 'react';

function Section(props) {

    const {title, body} = props;
    
    return (
        <div className='Section'>
            <h1 className='SectionTitle'>{title}</h1>
            <div className="SectionContent">
                <div className="body">{body}</div>
            </div>
        </div>
    );
}

export default Section;