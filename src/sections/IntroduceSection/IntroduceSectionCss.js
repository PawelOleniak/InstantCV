import styled from 'styled-components';
export const IntroduceContainer = styled.div`
  color: black;
  font-style: italic;
  > :nth-child(1) {
    display: flex;
    margin-top: 5px;
    a:link,
    a:visited {
      color: inherit;
    }
  }
  h1 {
    margin: 15px 30px 10px 20px;
  }
`;
