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
        <div className="sectionTitle">Experience</div>
        {body}
      </div>
    </>
  );
};

export default Experience;
