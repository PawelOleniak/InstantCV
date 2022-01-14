import styled from 'styled-components';
export const IntroduceContainer = styled.div`
  color: black;
  font-style: italic;
  > :nth-child(1) {
    display: flex;
    margin: 5px 10px 0 0;
    a:link,
    a:visited {
      color: inherit;
    }
  }
  h1 {
    margin: ${({ isMobile }) => (isMobile ? `15px 10px 10px 10px` : `15px 30px 10px 20px`)};
  }
`;
