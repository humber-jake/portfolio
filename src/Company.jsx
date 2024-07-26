import React from 'react';
import './Experience.css';

const Company = (props) => {
  const { company, isHomePage, bgColour } = props;
  return (
    <>
      {company.position.map((pos, i) => (
        <div
          key={pos.title}
          className="ExperienceCard"
          style={{ background: bgColour }}
        >
          <div className="PositionTitle">{pos.title}</div>
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
