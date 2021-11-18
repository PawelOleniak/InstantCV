import React from 'react';
import { SectionContainer } from './SkillsSectionCss';

import { IconContext } from 'react-icons';
import { skillsElements, personalData } from 'data';
import { ParagraphElement, Skills } from 'components';

const SkillsSection = ({ refD }) => {
  console.log(personalData);
  const skillsParagraphs = skillsElements.map((el) => <Skills refD={refD} title={el[0]} elements={el[1]} />);
  return (
    <IconContext.Provider value={{ size: '30px' }}>
      <SectionContainer>
        <ParagraphElement elements={personalData} skillSection={true} />
        {skillsParagraphs}
      </SectionContainer>
    </IconContext.Provider>
  );
};

export default SkillsSection;
