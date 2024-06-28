import React from 'react';
import './Education.css';

function Course(props) {
  const { title, instructor, host, completed } = props.course;

  return (
    <div className="Learning">
      <div className="name">{title}</div>
      <div className="">by {instructor}</div>
      <div className="location">
        {host}, <span className="dates">{completed}</span>
      </div>
    </div>
  );
}

export default Course;
