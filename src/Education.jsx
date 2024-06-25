import React from 'react';
import Course from './Course';
import University from './University';

const Education = (props) => {
  const { education } = props;
  const { university, courses } = education;

  let allCourses = courses.map((course) => (
    <Course key={course.title} course={course} />
  ));

  return (
    <div className="Education">
      <h1>Education</h1>
      <University university={university} />
      <div className="subTitle">Auxiliary Courses</div>
      {allCourses}
    </div>
  );
};

export default Education;
