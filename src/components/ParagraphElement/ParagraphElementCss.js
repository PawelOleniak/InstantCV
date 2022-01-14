import styled from 'styled-components';
export const SkillSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;

  > :nth-child(1) {
    margin-left: 5px;
  }
  > :nth-child(2) {
    margin-left: 5px;
    margin-bottom: 10px;
  }
  > :nth-child(3) {
    text-align: center;
    font-style: italic;
    margin-top: 10px;
    font-weight: 500;
  }
  > :nth-child(4) {
    text-align: center;
    margin-top: 10px;
  }
`;

export const DefaultSection = styled(SkillSection)`
  > :nth-child(1) {
    margin-left: 15px;
  }
  > :nth-child(2) {
    margin-left: ${({ theme, isMobile }) => (isMobile ? `${theme.mobileMargin * 2}px` : `${theme.normalMargin * 2}px`)};
    margin-bottom: 10px;
  }
  > :nth-child(3) {
    margin-top: 20px;
    font-weight: 600;
  }
  > :nth-child(4) {
    margin-top: 30px;
    font-weight: 1000;
  }
`;
