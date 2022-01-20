import styled from 'styled-components';

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #333;
  color: white;
  > span {
    font-size: ${({ isMobile }) => (isMobile ? `2rem` : `4rem`)};
    font-style: italic;
  }
`;
export const DetailsBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #678;
  border-radius: 30px;
  border: solid 2px #111;
  box-shadow: 2px 2px 8px 1px #222;
  .header {
    margin-left: ${({ isMobile }) => (isMobile ? '10px' : '20px')};
    font-size: ${({ isMobile }) => (isMobile ? '1.3rem' : '2rem')};
    > span {
      font-style: italic;
      color: #ccccff;
    }
  }
`;
