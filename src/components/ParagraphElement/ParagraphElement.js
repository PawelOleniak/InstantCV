import React from 'react';
import { Section } from './ParagraphElementCss';

const ParagraphElement = ({ elements, skillSection }) => {
  const paragraph = elements.map((el) => (
    <Section skillSection={skillSection}>
      <h3>{el[0]}</h3>
      <span>{el[1]}</span>
      {el[2] ? <span>{el[2]}</span> : null}
    </Section>
  ));
  return <>{paragraph}</>;
};

export default ParagraphElement;
