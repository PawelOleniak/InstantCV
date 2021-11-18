import React from 'react';
import { Section } from './ParagraphElementCss';

const ParagraphElement = ({ elements, skillSection }) => {
  const paragraph = elements.map((el) => (
    <Section skillSection={skillSection}>
      <h3>{el[0]}</h3>
      <span>{el[1]}</span>
      {el[2] ? (
        skillSection ? (
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
  return <>{paragraph}</>;
};

export default ParagraphElement;
