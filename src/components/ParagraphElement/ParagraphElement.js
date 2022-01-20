import React, { useContext } from 'react';
import { DefaultSection, SkillSection } from './ParagraphElementCss';
import { Context } from 'context';

const ParagraphElement = ({ paragraphs, isSkillSection, header }) => {
  const { isMobile, isBig } = useContext(Context);

  const Section = isSkillSection ? SkillSection : DefaultSection;
  const restOfParagraphs = paragraphs.slice(1);

  const paragraph = (
    <>
      <span>{paragraphs[0]}</span>
      {paragraphs.length ? (
        isSkillSection ? (
          <span>{paragraphs[1]}</span>
        ) : (
          restOfParagraphs.map((el) => <div>{el}</div>)
        )
      ) : null}
    </>
  );

  return (
    <Section isMobile={isMobile} isBig={isBig}>
      <h3>{header}</h3>
      {paragraph}
    </Section>
  );
};

export default ParagraphElement;
