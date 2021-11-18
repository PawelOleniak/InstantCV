import { Skills } from 'components';
import React from 'react';
import { IconContext } from 'react-icons/lib';
import { Detail } from './DetailsElementCss';
import ReactTooltip from 'react-tooltip';
const DetailsElement = ({ detailsElements }) => {
  console.log(detailsElements);
  const elements = detailsElements.map((el) => (
    <IconContext.Provider value={{ size: '45px' }}>
      <Detail>
        <Skills elements={el[1]} />
        <div>{el[0]}</div>
      </Detail>
      <ReactTooltip place="top" type="info" effect="float" />
    </IconContext.Provider>
  ));
  return <div>{elements}</div>;
};

export default DetailsElement;
