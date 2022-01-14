import styled from 'styled-components';

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
