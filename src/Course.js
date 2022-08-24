import React from 'react';
import ComputerIcon from '@mui/icons-material/Computer';

function Course(props) {

    const {title, instructor, host, completed } = props.course;

    return (
        <div className='Learning'>
            <div className='CourseHost'>{host}</div>
            <ComputerIcon/>
            <div className='CourseTitle'>{title}</div>
            <div className='CourseInstructor'>{instructor}</div>
            <div className='CourseCompleted'>{completed}</div>
        </div>
    );
}

export default Course;