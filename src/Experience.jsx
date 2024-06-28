import React from 'react';
import Company from './Company';
import './Experience.css';
const Experience = (props) => {
  const { experience, isHomePage } = props;

  let body = experience.map((company, i) => (
    <Company key={i} company={company} isHomePage={isHomePage} />
  ));

  // Reverse middle three for treasure map effect
  [body[3], body[5]] = [body[5], body[3]];

  return (
    <>
      <div className="sectionTitle">Experience</div>
      <div className="Experience">{body}</div>
    </>
  );
};

export default Experience;
