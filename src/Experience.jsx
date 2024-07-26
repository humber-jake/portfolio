import React from 'react';
import Company from './Company';
import './Experience.css';
const Experience = (props) => {
  const { experience, isHomePage } = props;

  let bgPalette = ['#5BDED5', '#A0DE5B', '#5BDE7C', '#5BDEA8', '#69DE5B'];

  Math.floor(Math.random() * bgPalette.length);

  let body = experience.map((company, i) => (
    <Company
      key={i}
      company={company}
      isHomePage={isHomePage}
      bgColour={bgPalette[Math.floor(Math.random() * bgPalette.length)]}
    />
  ));

  // Reverse middle three for treasure map effect
  [body[3], body[5]] = [body[5], body[3]];

  return (
    <>
      <div className="ExperienceTitle">Work Experience</div>
      <div className="Experience">{body}</div>
    </>
  );
};

export default Experience;
