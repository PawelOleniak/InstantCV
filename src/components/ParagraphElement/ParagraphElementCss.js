import styled from 'styled-components';
export const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: ${({ skillSection }) => (skillSection ? '10px' : '50px')};
  font-size: ${({ skillSection }) => (skillSection ? '13px' : '20px')};

  > :nth-child(1) {
    margin-left: ${({ skillSection }) => (skillSection ? '5px' : '15px')};
  }
  > :nth-child(2) {
    margin-left: ${({ skillSection }) => (skillSection ? '5px' : ' 25px')};
    margin-bottom: 10px;
  }
  > :nth-child(3) {
    text-align: center;
    font-style: italic;
    margin-top: ${({ skillSection }) => (skillSection ? '10px' : '20px')};
    margin-left: ${({ skillSection }) => (skillSection ? '5px' : ' 35px')};
    font-weight: ${({ skillSection }) => (skillSection ? '500' : ' 600')};
  }
  > :nth-child(4) {
    text-align: center;
    margin-top: ${({ skillSection }) => (skillSection ? '10px' : '30px')};
    font-weight: ${({ skillSection }) => (skillSection ? '500' : ' 1000')};
  }
`;
