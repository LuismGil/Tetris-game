import styled from "styled-components";

import bgImage from '../../img/bg.png';

export const StyledTetrisWrapper = styled.div`
  background: url(${bgImage}) #000;
  background-size: cover;
  height: 100vh;
  overflow: hidden;
  width: 100vw;
`

export const StyledTetris = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 900px;
  padding: 40px 20px 10px 20px;

  aside {
    display: block;
    margin: 0 auto;
    max-width: 200px;
    padding: 0 20px;
    width: 100%;

    @media (min-width: 769px) {
      margin: 0;
    }
  }

  @media(min-width: 768px) {
    flex-direction: row;
    padding: 40px;
  }
`