import React from "react";
import "./Education.css";

function Course(props) {
  const { title, instructor, host, completed } = props.course;

  return (
    <div className="Learning">
      <div className="name">{title}</div>
      <div className="">{instructor}</div>
      <div className="location">{host}</div>
      <span className="dates">{completed}</span>
    </div>
  );
}

export default Course;
