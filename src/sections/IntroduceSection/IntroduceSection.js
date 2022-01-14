import React from 'react';
import { BsGithub } from 'react-icons/bs';

import { IntroduceContainer } from './IntroduceSectionCss';
import { introSection } from 'data';
import { ParagraphElement } from 'components';
const IntroduceSection = ({ isMobile }) => {
  const paragraphs = introSection.slice(1);

  return (
    <>
      <IntroduceContainer isMobile={isMobile}>
        <div>
          <h1>{introSection[0]}</h1>
          <a target={'blank'} href="https://github.com/PawelOleniak">
            <BsGithub size={55}></BsGithub>
          </a>
        </div>
        <ParagraphElement elements={paragraphs} />
      </IntroduceContainer>
    </>
  );
};

export default IntroduceSection;
