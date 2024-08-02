import React from 'react';
import Course from './Course';

const Education = (props) => {
  const { education, isHomePage } = props;
  const { university, courses } = education;

  let allCourses = courses.map((course) => (
    <Course key={course.title} course={course} />
  ));

  // for (let i = allCourses.length; i > 0; i--) {
  //   allCourses.splice(i, 0, <div></div>);
  // }

  return (
    <>
      <div className="sectionTitleSmall">Education</div>
      <div
        className={
          isHomePage ? 'Education' : 'Education FullEducation container'
        }
      >
        <div className="sectionTitleLarge">Education</div>
        <div className="EducationSection">
          <div className="University">
            <div className="degree">{university.degree}</div>
            <div className="name">{university.name}</div>
            <div className="location">
              {university.location},{' '}
              <span className="dates">{university.dates}</span>
            </div>
            <div className="major">Major {university.major}</div>
            <div className="minor">Minor {university.minor}</div>
          </div>
          {allCourses}
        </div>
      </div>
    </>
  );
};

export default Education;
