import React, { useContext } from 'react';
import { SkillsContainer, InlineSkill, Detail } from './SkillsCss';
import { MdReadMore } from 'react-icons/md';
import { Context } from 'context';

const Skills = ({ title, elements, refD, isDetail, haveLink }) => {
  const executeScroll = () => refD.current.scrollIntoView({ behavior: 'smooth' });
  const { isMobile, isBig } = useContext(Context);
  const TypeOfElement = isDetail ? Detail : InlineSkill;

  const skillRows = elements.length
    ? elements.map((el) => (
        <TypeOfElement key={el.skillName} isMobile={isMobile} isBig={isBig}>
          <a href={el.link ? el.link : null} target={'blank'}>
            <div>{el.icon}</div>
            <div>{el.skillName}</div>
          </a>
        </TypeOfElement>
      ))
    : null;

  return (
    <SkillsContainer details={isDetail} isMobile={isMobile} isBig={isBig}>
      {title ? <span className="sectionHeader">{title}</span> : null}
      <div className={isDetail ? 'detailSection' : null}>{skillRows}</div>
      {title === 'Software Skills' ? <MdReadMore data-tip="More Details" onClick={executeScroll} /> : null}
    </SkillsContainer>
  );
};

export default Skills;
