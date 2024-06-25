import React from 'react';
import './Education.css';

function Course(props) {
  const { title, instructor, host, completed } = props.course;

  return (
    <div className="Learning">
      <div className="CourseHost">{host}</div>
      <div className="CourseTitle">{title}</div>
      <div className="CourseInstructor">{instructor}</div>
      <div className="CourseCompleted">{completed}</div>
    </div>
  );
}

export default Course;
