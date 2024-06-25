import React from 'react';

const Company = (props) => {
  const { company } = props;
  return (
    <div>
      {company.position.map((pos, i) => (
        <div key={pos.title}>
          <div className={`ExperienceIcon`}></div>
          <div className="ExperienceTitleContainer">
            <div className="ExperienceTitle">{pos.title}</div>
            <div className="ExperienceDates">{pos.dates}</div>
          </div>
          <div className="ExperiencePoints">
            {pos.points.map((point, i) => (
              <div key={i} className="ExperiencePoint">
                {`->`}
                {point}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Company;
