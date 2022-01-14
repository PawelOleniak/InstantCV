import styled from 'styled-components';

export const SectionContainer = styled.div`
  padding: 10px 5px;
  display: flex;
  flex-direction: column;

  > :nth-child(n) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    > :nth-child(1) {
      margin: ${({ isMobile }) => (isMobile ? `10px 0 17px 5px` : `10px 0 17px 15px`)};
    }
    > :nth-child(2) {
      font-style: italic;
      margin-left: ${({ isMobile }) => (isMobile ? `10px` : `30px`)};
    }
    > :nth-child(3) {
      display: flex;
      width: fit-content;
      align-self: flex-end;
      margin-right: 20px;
      border: solid 1px #272a76;
      padding: 2px;
      border-radius: 10px;
      :hover {
        transition: 0.2s;
        background-color: #272a76;
      }
    }
  }
`;
