import { Skills } from 'components';
import React, { useContext } from 'react';
import { DetailsContainer, DetailsBox } from './DetailSectionCss';
import { detailsElements, detailsHeaders } from 'data';
import { Context } from 'context';
import { useTheme } from 'styled-components';
import { IconContext } from 'react-icons/lib';
import ReactTooltip from 'react-tooltip';
const DetailSection = ({ refD }) => {
  const { isMobile } = useContext(Context);
  const theme = useTheme();
  const iconSize = isMobile ? `${theme.bigFontSize}px` : `${theme.bigFontSize * 2}px`;
  const subSections = detailsElements.map((el, i) => (
    <>
      <div className="header">
        <span data-multiline={true} data-tip={detailsHeaders[i].description}>
          {detailsHeaders[i].header}
        </span>{' '}
        {isMobile & (detailsHeaders[i].description.length > 10) ? <div>skills</div> : 'skills'}
      </div>
      <Skills elements={el} isDetail={true} />
    </>
  ));
  return (
    <IconContext.Provider value={{ size: iconSize }}>
      <DetailsContainer isMobile={isMobile}>
        <div ref={refD} />
        <span>Skills</span>
        <DetailsBox isMobile={isMobile}>{subSections}</DetailsBox>
        <ReactTooltip place={isMobile ? 'right' : 'top'} type="info" effect="float" />
      </DetailsContainer>
    </IconContext.Provider>
  );
};

export default DetailSection;
