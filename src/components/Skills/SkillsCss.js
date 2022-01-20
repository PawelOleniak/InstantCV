import styled from 'styled-components';
export const SkillsContainer = styled.div`
  span {
    background-color: ${({ details }) => (details ? '' : '#ba0356')};
    width: fit-content;
    font-style: italic;
    padding: 0 5px;
  }
  .detailSection {
    display: grid;
    padding: ${({ isMobile }) => (isMobile ? '10px' : '10px 25px')};
    grid-template-columns: ${({ isMobile }) => (isMobile ? 'repeat(3, 1fr)' : 'repeat(5, 1fr)')};
    grid-row-gap: calc(1vw + 20px);
    grid-column-gap: calc(1vw + 10px);
    text-align: center;
  }
`;
export const InlineSkill = styled.div`
  display: flex;
  align-items: center;
  justify-self: center;
  margin-bottom: 10px;
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #333;
  border-radius: 10px;
  width: ${({ isMobile, isBig }) => (isMobile ? `60px` : isBig ? `130px` : `88px`)};
  height: ${({ isMobile, isBig }) => (isMobile ? `60px` : isBig ? `120px` : `85px`)};
  padding: 7px;
  border: 1px solid black;
`;
