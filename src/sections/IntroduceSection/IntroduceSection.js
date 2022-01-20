import React from 'react';
import { BsGithub } from 'react-icons/bs';

import { IntroduceContainer } from './IntroduceSectionCss';
import { introSection } from 'data';
import { ParagraphElement } from 'components';
const IntroduceSection = ({ isMobile }) => {
  const { Me, paragraphs } = introSection;
  const infoParagraphs = paragraphs.map((el) => <ParagraphElement header={el.header} paragraphs={el.elements} />);
  return (
    <>
      <IntroduceContainer isMobile={isMobile}>
        <div>
          <h1>{Me}</h1>
          <a target={'blank'} href="https://github.com/PawelOleniak">
            <BsGithub size={55}></BsGithub>
          </a>
        </div>
        {infoParagraphs}
      </IntroduceContainer>
    </>
  );
};

export default IntroduceSection;
