import { createContext } from 'react';
import { useMediaQuery } from 'react-responsive';

export const Context = createContext();

const Provider = ({ children, theme }) => {
  const isBig = useMediaQuery({ minWidth: 1200 });
  const isMobile = useMediaQuery({ maxWidth: 650 });
  const ContextValue = {
    isBig,
    isMobile,
  };
  return <Context.Provider value={ContextValue}>{children}</Context.Provider>;
};

export default Provider;
