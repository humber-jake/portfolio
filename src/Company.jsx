import React from 'react';
import './Experience.css';

const Company = (props) => {
  const { company, isHomePage } = props;
  return (
    <>
      {company.position.map((pos, i) => (
        <div key={pos.title} className="ExperienceCard">
          <div className="ExperienceTitle">{pos.title}</div>
          <div className="Company">{company.name}</div>
          <div className="ExperienceDates">{pos.dates}</div>
          {isHomePage ? (
            <></>
          ) : (
            <div className="ExperiencePoints">
              {pos.points.map((point, i) => (
                <div key={i} className="ExperiencePoint">
                  {`•`}
                  {point}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default Company;
