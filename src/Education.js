import React from 'react';
import './Education.css'
import University from './University';
import Course from './Course';
import Navbar from './Navbar';
import Footer from './Footer';

function Education(props) {

    const {isHomePage} = props;
    const {university, courses} = props.content;

    let allCourses = courses.map(course => <Course key={course.title} course={course}/>)

    return (
        <>
        {!isHomePage &&
            <Navbar/>
        }
            <div className="Education">
                <div className="SectionTitle">Education</div>
            </div>
            <div className="Education">
                <University university={university}/>
                {allCourses}
            </div>

        {!isHomePage &&
            <Footer/>
        }
        </>
    );
}

export default Education;