import React, { useContext } from 'react';
import { SkillsContainer, InlineSkill, Detail } from './SkillsCss';
import { MdReadMore } from 'react-icons/md';
import { Context } from 'context';

const Skills = ({ title, elements, refD, isDetail }) => {
  const executeScroll = () => refD.current.scrollIntoView({ behavior: 'smooth' });
  const { isMobile, isBig } = useContext(Context);
  const TypeOfElement = isDetail ? Detail : InlineSkill;
  const skillRows = elements.length
    ? elements.map((el) => (
        <TypeOfElement isMobile={isMobile} isBig={isBig}>
          <div>{el.icon}</div>
          <div>{el.skillName}</div>
        </TypeOfElement>
      ))
    : null;

  return (
    <SkillsContainer details={isDetail}>
      {title ? <span className="sectionHeader">{title}</span> : null}
      <div className={isDetail ? 'detailSection' : null}>{skillRows}</div>
      {title === 'Software Skills' ? <MdReadMore data-tip="More Details" onClick={executeScroll} /> : null}
    </SkillsContainer>
  );
};

export default Skills;
