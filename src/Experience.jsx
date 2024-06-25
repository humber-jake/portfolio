import React from 'react';
import Company from './Company';

const Experience = (props) => {
  const { experience } = props;

  let body = experience.map((company, i) => (
    <Company key={i} company={company} />
  ));

  return (
    <>
      <div className="Experience">
        <h1>Experience</h1>
        {body}
      </div>
    </>
  );
};

export default Experience;
