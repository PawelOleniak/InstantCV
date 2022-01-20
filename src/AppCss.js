import styled, { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  body{
    font-size: ${({ theme, isMobile, isBig }) =>
      isBig ? `${theme.bigFontSize}px` : isMobile ? `${theme.mobileFontSize}px` : `${theme.normalFontSize}px`};
    font-family: 'Montserrat', sans-serif;
    color: whitesmoke;
  }
 `;

export const MarginContainer = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  justify-items: center;
  background-color: #333;
  flex-direction: column;
`;

export const MainContainer = styled.div`
  display: grid;
  grid-auto-columns: 1.4fr 3fr;
  grid-auto-flow: column;
  margin-top: 15px;
  column-gap: 5px;
  max-width: 1100px;
  margin-bottom: 60px;
  > :nth-child(1) {
    background-color: #373a86;
  }
  > :nth-child(2) {
    color: black;
    background-color: white;
  }
`;
