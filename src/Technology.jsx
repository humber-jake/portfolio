import React from 'react';

const Technology = (props) => {
  const tech = props.content;

  let list = tech.map((el, i) => {
    return i !== tech.length - 1 ? (
      <span key={i}>{el}, </span>
    ) : (
      <span key={i}>{el}. </span>
    );
  });

  return (
    <div className="Technology">
      <div className="sectionTitle">Technology</div>
      <div className="TechList">{tech.join(', ')}.</div>
    </div>
  );
};

export default Technology;
