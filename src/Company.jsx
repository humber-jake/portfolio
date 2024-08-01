import React from 'react';
import './Experience.css';

const Company = (props) => {
  const { company, isHomePage, bgColour } = props;
  return (
    <>
      {company.position.map((pos, i) => (
        <div
          key={pos.title}
          className={isHomePage ? 'ExperienceCard' : 'FullCompany'}
          style={isHomePage ? { background: bgColour } : { background: 'none' }}
        >
          {!isHomePage && (
            <img className="CompanyLogo" src={`./images/${company.name}.png`} />
          )}
          <div className="CompanyText">
            <div className="PositionTitle">{pos.title}</div>
            <div className={isHomePage ? '' : 'ExperienceByline'}>
              <div className="Company">{company.name}</div>
              <div className="ExperienceDates">{pos.dates}</div>
            </div>
            {!isHomePage && (
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
        </div>
      ))}
    </>
  );
};

export default Company;
