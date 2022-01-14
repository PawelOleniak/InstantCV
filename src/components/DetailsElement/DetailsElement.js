import { Skills } from 'components';
import React, { useContext } from 'react';
import { Context } from 'context';
import { Detail } from './DetailsElementCss';
import ReactTooltip from 'react-tooltip';
const DetailsElement = ({ detailsElements }) => {
  const { isMobile, isBig } = useContext(Context);
  const elements = detailsElements.map((el) => (
    <>
      <Detail isMobile={isMobile} isBig={isBig}>
        <Skills elements={el[1]} />
        <div>{el[0]}</div>
      </Detail>
      <ReactTooltip place="top" type="info" effect="float" />
    </>
  ));
  return <div>{elements}</div>;
};

export default DetailsElement;
