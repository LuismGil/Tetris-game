import styled from "styled-components";

export const StyledStage = styled.div`
  background: #111;
  border: 2px solid #333;
  display: grid;
  grid-template-rows: repeat(
    ${props => props.height},
    calc(25vw / 7)
  );
  grid-template-columns: repeat(${props => props.width}, 1fr);
  grid-gap: 1px;
  margin: 10px auto;
  max-width: 50vw;
  width: 100%;

  @media(min-width: 768px) {
    grid-template-rows: repeat(
      ${props => props.height},
      calc(25vw / ${props => props.width})
    );
    margin: 0;
    max-width: 25vw;
  }
`