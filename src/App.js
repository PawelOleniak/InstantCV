import React, { useRef, useContext } from 'react';
import DeviceContextProvider, { Context } from 'context';
import theme from 'utils/theme';
import { GlobalStyle, MainContainer, MarginContainer } from 'AppCss';
import { DetailSection, IntroduceSection, SkillsSection } from 'sections';
import { ThemeProvider } from 'styled-components';

function App() {
  const detailRef = useRef(null);
  const { isMobile, isBig } = useContext(Context);
  return (
    <>
      <GlobalStyle isMobile={isMobile} isBig={isBig} />

      <MarginContainer isMobile={isMobile}>
        <MainContainer>
          <SkillsSection refD={detailRef} />
          <IntroduceSection />
        </MainContainer>
        <DetailSection refD={detailRef}></DetailSection>
      </MarginContainer>
    </>
  );
}
function RootApp() {
  return (
    <ThemeProvider theme={theme}>
      <DeviceContextProvider>
        <App />
      </DeviceContextProvider>
    </ThemeProvider>
  );
}

export default RootApp;
