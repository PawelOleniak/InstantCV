import { DetailsElement } from 'components';
import React, { useContext } from 'react';
import { DetailsContainer, DetailsBox } from './DetailSectionCss';
import { detailsElements, detailsHeaders } from 'data';
import { Context } from 'context';
import { useTheme } from 'styled-components';
import { IconContext } from 'react-icons/lib';
const DetailSection = ({ refD }) => {
  const { isMobile } = useContext(Context);
  const theme = useTheme();
  const iconSize = isMobile ? `${theme.bigFontSize}px` : `${theme.bigFontSize * 2}px`;
  const subSections = detailsElements.map((el, i) => (
    <>
      <div className="header">
        <span data-multiline={true} data-tip={detailsHeaders[i][1]}>
          {detailsHeaders[i][0]}
        </span>{' '}
        {isMobile & (detailsHeaders[i][0].length > 10) ? <div>skills</div> : 'skills'}
      </div>
      <>
        <DetailsElement detailsElements={el} />
      </>
    </>
  ));
  return (
    <IconContext.Provider value={{ size: iconSize }}>
      <DetailsContainer isMobile={isMobile}>
        <div ref={refD} />
        <span>Skills</span>
        <DetailsBox isMobile={isMobile}>{subSections}</DetailsBox>
      </DetailsContainer>
    </IconContext.Provider>
  );
};

export default DetailSection;
