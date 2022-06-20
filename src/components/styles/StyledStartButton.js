import styled from "styled-components";

export const StyledStartButton = styled.button`
  background: #333;
  border: none;
  border-radius: 20px;
  box-sizing: border-box;
  cursor: pointer;
  color: #fff;
  display: flex;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
  justify-content: center;
  margin: 0 auto;
  min-height: 30px;
  outline: none;
  padding: 20px;
  width: 80%;

  @media(min-width: 768px) {
    font-size: 1rem;
    width: 100%;
  }
`