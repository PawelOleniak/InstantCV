import React, { useContext } from 'react';
import { SectionContainer } from './SkillsSectionCss';
import { useTheme } from 'styled-components';
import { IconContext } from 'react-icons';
import { skillsElements, personalData } from 'data';
import { ParagraphElement, Skills } from 'components';
import { Context } from 'context';
const SkillsSection = ({ refD }) => {
  const { isMobile } = useContext(Context);
  const theme = useTheme();
  const iconSize = isMobile ? `${theme.normalFontSize}px` : `${theme.normalFontSize * 2}px`;
  console.log(iconSize);
  const skillsParagraphs = skillsElements.map((el) => <Skills refD={refD} title={el[0]} elements={el[1]} />);
  return (
    <IconContext.Provider value={{ size: iconSize }}>
      <SectionContainer isMobile={isMobile}>
        <ParagraphElement elements={personalData} isSkillSection={true} />
        {skillsParagraphs}
      </SectionContainer>
    </IconContext.Provider>
  );
};

export default SkillsSection;
