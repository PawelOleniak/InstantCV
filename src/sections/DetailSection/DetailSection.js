import React, { useContext } from 'react';
import ReactTooltip from 'react-tooltip';
import { Skills } from 'components';
import { DetailsContainer, DetailsBox } from './DetailSectionCss';
import { detailsElements, detailsHeaders, projectHeader, projects } from 'data';
import { Context } from 'context';
import { useTheme } from 'styled-components';
import { IconContext } from 'react-icons/lib';

const DetailSection = ({ refD }) => {
  const { isMobile } = useContext(Context);
  const theme = useTheme();
  const iconSize = isMobile ? `${theme.bigFontSize}px` : `${theme.bigFontSize * 2}px`;
  const subSections = detailsElements.map((el, i) => (
    <div key={detailsHeaders[i].header}>
      <div className="header">
        <span data-multiline={true} data-tip={detailsHeaders[i].description}>
          {detailsHeaders[i].header}
        </span>{' '}
        {isMobile & (detailsHeaders[i].description.length > 10) ? <div>skills</div> : 'skills'}
      </div>
      <Skills elements={el} isDetail={true} />
    </div>
  ));
  // const projectsElements = projects.map((el, i) => (

  //     <div className="header">
  //       <span data-multiline={true} data-tip={projectHeader.description}>
  //         {projectHeader.header}
  //       </span>
  //     </div>
  //     <Skills elements={el} isDetail={true} />
  //   </div>
  // ));
  return (
    <IconContext.Provider value={{ size: iconSize }}>
      <DetailsContainer isMobile={isMobile}>
        <div ref={refD} />
        <span>Skills</span>
        <DetailsBox isMobile={isMobile}>
          {subSections}
          <div className="header">
            <span data-multiline={true} data-tip={projectHeader.description}>
              {projectHeader.header}
            </span>
          </div>

          <Skills elements={projects} isDetail={true} haveLink={true} />
        </DetailsBox>
        <ReactTooltip place={isMobile ? 'right' : 'top'} type="info" effect="float" />
      </DetailsContainer>
    </IconContext.Provider>
  );
};

export default DetailSection;
