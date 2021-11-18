import styled from 'styled-components';
export const MarginContainer = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  justify-items: center;
  background-color: #333;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

export const MainContainer = styled.div`
  display: grid;
  grid-auto-columns: 1.4fr 3fr;
  grid-auto-flow: column;
  width: 90%;
  height: 95%;
  column-gap: 5px;

  > * {
    font-family: 'Montserrat', sans-serif;
    transition: 1s;
    color: whitesmoke;
  }
  > :nth-child(1) {
    background-color: #373a86;
  }
  > :nth-child(2) {
    background-color: white;
  }
`;
