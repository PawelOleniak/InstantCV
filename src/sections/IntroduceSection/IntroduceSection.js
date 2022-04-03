import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { IntroduceContainer } from './IntroduceSectionCss';
import { introSection } from 'data';
import { ParagraphElement } from 'components';

const IntroduceSection = ({ isMobile }) => {
  const { Me, introduction, availability, education } = introSection;

  return (
    <IntroduceContainer isMobile={isMobile}>
      <div>
        <h1>{Me}</h1>
        <a target={'blank'} href="https://github.com/PawelOleniak">
          <BsGithub size={55}></BsGithub>
        </a>
      </div>
      <ParagraphElement header={introduction.header} paragraphs={introduction.elements} />
      <ParagraphElement header={availability.header} paragraphs={availability.elements} />
      <h3>{education.header}</h3>
      {education.elements.map(([el, el2, el3]) => {
        return (
          <div className="educationWrapper" key={el}>
            <div className="eduElement">{el}</div>
            <div className="eduElement">{el2}</div>
            <div className="eduElement">{el3}</div>
          </div>
        );
      })}
    </IntroduceContainer>
  );
};

export default IntroduceSection;
