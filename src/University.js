import React from 'react';
import SchoolIcon from '@mui/icons-material/School';

function University(props) {

    const {name, location, dates, degree, major, minor} = props.university;
    return (
        <div className='Learning'>
            <div className="UniversityName">{name}</div>
            <div className='UniversityLocation'>{location}</div>
            <SchoolIcon/>
            <div className='UniversityDegree'>{degree}</div>
            <div className='UniversityDates'>{dates}</div>
            <div className='UniversityMajor'>Specialization {major}</div>
            <div className='UniversityMinor'>Minor {minor}</div>
        </div>
    );
}

export default University;