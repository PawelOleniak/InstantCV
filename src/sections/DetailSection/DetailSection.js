import { DetailsElement } from 'components';
import React from 'react';
import { DetailsContainer, DetailsBox } from './DetailSectionCss';
import { detailsElements, detailsHeaders } from 'data';
const DetailSection = ({ refD }) => {
  const subSections = detailsElements.map((el, i) => (
    <>
      <div className="header">
        <span data-multiline={true} data-tip={detailsHeaders[i][1]}>
          {detailsHeaders[i][0]}
        </span>{' '}
        skills
      </div>
      <>
        <DetailsElement detailsElements={el} />
      </>
    </>
  ));
  return (
    <DetailsContainer>
      <div ref={refD} />
      <span>Skills</span>
      <DetailsBox>{subSections}</DetailsBox>
    </DetailsContainer>
  );
};

export default DetailSection;
