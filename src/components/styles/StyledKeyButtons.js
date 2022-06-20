import styled from "styled-components";

export const StyledKeyButtons = styled.button`
  background: #333;
  border: none;
  border-radius: 20px;
  box-sizing: border-box;
  cursor: pointer;
  color: #fff;
  display: flex;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 1rem;
  margin: -8px auto;
  min-height: 30px;
  outline: none;
  padding: 20px;
  width: 60px;

  @media(min-width: 768px) {
    display: none;
  }

  .arrow {
    border: 12px solid;
    border-color: 
      darkcyan
      darkcyan
      transparent
      transparent;
    position: relative;
  }

  .arrow:before {
    background-color: darkcyan;
    content: '';
    display: block;
    height: 12px; 
    position: absolute;
    transform: 
      rotate(-45deg) 
      translate(2px, 1px);
    top: 0;
    right: 0;
    width: 16px;
  }

  .arrow-right {
    transform: rotate(45deg);
  }

  .arrow-left {
    transform: rotate(225deg); 
  }

  .arrow-up {
    transform: rotate(315deg); 
  }

  .arrow-down {
    transform: rotate(135deg); 
  }  
`

export const StyledArrowsWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  width: 210px;
`