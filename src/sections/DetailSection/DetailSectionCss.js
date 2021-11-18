import styled from 'styled-components';
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #333;
  color: white;
  > span {
    font-size: 4rem;
    font-style: italic;
  }
`;
export const DetailsBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  width: 810px;
  background-color: #678;
  border-radius: 30px;
  border: solid 2px #111;
  box-shadow: 2px 2px 8px 1px #222;
  > :nth-child(even) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    text-align: center;
  }
  .header {
    margin-left: 20px;
    font-size: 2rem;
    > span {
      font-style: italic;
      color: #ccccff;
    }
  }
`;
