import styled from "styled-components";

export const StyledDisplay = styled.div`
  align-items: center;
  background: #000;
  border: 4px solid #333;
  border-radius: 20px;
  box-sizing: border-box;
  color: ${props => (props.gameOver ? 'red' : '#999')};
  display: flex;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 0.7rem;
  margin: 0 auto 10px;
  min-height: 30px;
  padding: 15px;
  width: 80%;

  @media(min-width: 768px) {
    font-size: 0.8rem;
    margin: 0 0 20px 0;
    padding: 20px;
    width: 100%;
  }
`