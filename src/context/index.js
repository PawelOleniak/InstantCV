import { createContext, useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

export const Context = createContext();

const Provider = ({ children, theme }) => {
  const isBig = useMediaQuery({ minWidth: 1200 });
  const isMobile = useMediaQuery({ maxWidth: 650 });

  //const [uiSizeindex, setuiSizeindex] = useState();

  //const selectedUiSize = uiSizes[uiSizeindex];

  useEffect(() => {
    //setuiSizeindex(0);
    // setDarkMode(false);
    // setIsLogged(false);
  }, []);

  // const handleChangeUiSize = () => {
  //   uiSizes[uiSizeindex + 1] ? setuiSizeindex(uiSizeindex + 1) : setuiSizeindex(0);
  // };

  const ContextValue = {
    isBig,
    isMobile,
  };
  return <Context.Provider value={ContextValue}>{children}</Context.Provider>;
};

export default Provider;
