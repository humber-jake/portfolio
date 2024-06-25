import React from 'react';
import './Education.css';

function University(props) {
  const { name, location, dates, degree, major, minor } = props.university;
  return (
    <div className="Learning">
      <div className="subTitle">
        {name} - {degree}
      </div>
      <div className="UniversityLocation">{location}</div>
      <div className="UniversityDates">{dates}</div>
      <div className="UniversityMajor">Major {major}</div>
      <div className="UniversityMinor">Minor {minor}</div>
    </div>
  );
}

export default University;
