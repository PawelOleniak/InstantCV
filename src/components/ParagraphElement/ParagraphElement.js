import React, { useContext } from 'react';
import { DefaultSection, SkillSection } from './ParagraphElementCss';
import { Context } from 'context';
const ParagraphElement = ({ elements, isSkillSection }) => {
  const { isMobile, isBig } = useContext(Context);

  const Section = isSkillSection ? SkillSection : DefaultSection;
  const paragraph = elements.map((el) => (
    <Section isMobile={isMobile} isBig={isBig}>
      <h3>{el[0]}</h3>
      <span>{el[1]}</span>
      {el[2] ? (
        isSkillSection ? (
          <span>{el[2]}</span>
        ) : (
          <span>
            {el[2][0]}
            <br />
            {el[2][1]}
            <br />
            {el[2][2]}
          </span>
        )
      ) : null}
      {el[3] ? (
        <span>
          {el[3][0]}
          <br />
          {el[3][1]}
        </span>
      ) : null}
    </Section>
  ));
  return paragraph;
};

export default ParagraphElement;
