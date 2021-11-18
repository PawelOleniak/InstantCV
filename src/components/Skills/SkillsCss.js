import styled from 'styled-components';
export const SkillsContainer = styled.div`
  .sectionHeader {
    background-color: ${({ details }) => (details ? '#ba0356' : '')};
    width: fit-content;
    font-style: italic;
  }
  span {
    //padding: 2px 25px 2px 5px;
  }
`;
export const Inline = styled.div`
  display: flex;
  align-items: center;
  justify-self: center;
  margin-bottom: 10px;
`;
