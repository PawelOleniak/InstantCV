import React from 'react';
import { SkillsContainer, Inline } from './SkillsCss';
import { MdReadMore } from 'react-icons/md';

const Skills = ({ title, elements, refD, details }) => {
  const executeScroll = () => refD.current.scrollIntoView({ behavior: 'smooth' });
  const rows = elements.length
    ? elements.map((el) => (
        <Inline>
          <span>{el[1]}</span>
          <div>{el[0]}</div>
        </Inline>
      ))
    : elements;
  return (
    <SkillsContainer details>
      {details ? (
        <>
          <div>{rows}</div>
          <div>{title}</div>
        </>
      ) : (
        <>
          <span className="sectionHeader">{title}</span>
          <div>{rows}</div>
        </>
      )}
      {title === 'Software Skills' ? (
        <>
          <MdReadMore data-tip="More Details" onClick={executeScroll} />
        </>
      ) : null}
    </SkillsContainer>
  );
};

export default Skills;
