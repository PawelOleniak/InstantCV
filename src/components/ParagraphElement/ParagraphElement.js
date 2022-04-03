import React, { useContext } from 'react';
import { DefaultSection, SkillSection } from './ParagraphElementCss';
import { Context } from 'context';

const ParagraphElement = ({ paragraphs, isSkillSection, header }) => {
  const { isMobile, isBig } = useContext(Context);
  const Section = isSkillSection ? SkillSection : DefaultSection;
  return (
    <Section isMobile={isMobile} isBig={isBig}>
      <h3>{header}</h3>
      <div>{paragraphs[0]}</div>
      <div>{isSkillSection ? <a href="tel:+48739669792">{paragraphs[1]}</a> : paragraphs[1]}</div>
    </Section>
  );
};

export default ParagraphElement;
