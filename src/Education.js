import React from 'react';
import './Education.css'
import University from './University';
import Course from './Course';

function Education(props) {

    const {university, courses} = props.content;

    let allCourses = courses.map(course => <Course course={course}/>)

    return (
        <>
            <div className="Education">
                <div className="SectionTitle">Education</div>
            </div>
            <div className="Education">
                <University university={university}/>
                {allCourses}
            </div>
        </>
    );
}

export default Education;