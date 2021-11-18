import { useRef } from 'react';
import { MainContainer, MarginContainer } from 'AppCss';
import { DetailSection, IntroduceSection, SkillsSection } from 'sections';

function App() {
  const detailRef = useRef(null);
  return (
    <>
      <MarginContainer>
        <MainContainer>
          <SkillsSection refD={detailRef} />
          <IntroduceSection />
        </MainContainer>
      </MarginContainer>
      <DetailSection refD={detailRef}></DetailSection>
    </>
  );
}

export default App;
