import { useRef, useContext } from 'react';
import { GlobalStyle, MainContainer, MarginContainer } from 'AppCss';
import { DetailSection, IntroduceSection, SkillsSection } from 'sections';
import { ThemeProvider } from 'styled-components';
import DeviceContextProvider, { Context } from 'context';
import theme from 'utils/theme';

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
      </MarginContainer>
      <DetailSection refD={detailRef}></DetailSection>
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
