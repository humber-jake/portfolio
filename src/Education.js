import React from 'react';
import './Education.css'

function Education(props) {

    const {university, courses} = props.content;

    let courseContent = courses.map(course => 
        <div key={course.title} className="grid">
            <div className='title'>{course.title}</div>
            <div className='host'>{course.host}</div>
            <div className='instructor'>{course.instructor}</div>
            <div className='completed'>{course.completed}</div>
        </div>
    )
    return (
        <div className='grid'>
            <div className="Education">
                <div className='SectionTitle'>Degree</div>
                <div className='row'>
                    <div className='name'>{university.name}</div>
                    <div className='location'>{university.location}</div>
                </div>
                <div className="row">
                    <div className='degree'>{university.degree}</div>
                    <div className='dates'>{university.dates}</div>
                </div>
                <div className='major'>{university.major}</div>
                <div className='minor'>{university.minor}</div>
            </div>
            <div className="Education">
                <div className='SectionTitle'>Courses</div>
                {courseContent}
            </div>

        </div>
    );
}

export default Education;