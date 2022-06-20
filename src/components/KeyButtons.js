import { StyledArrowsWrapper, StyledKeyButtons } from "./styles/StyledKeyButtons";

const KeyButtons = ({ keyClick }) => (
  <div>
    <StyledKeyButtons onClick={keyClick} >
      <div className="arrow arrow-up" />
    </StyledKeyButtons>
    <StyledArrowsWrapper>
      <StyledKeyButtons onClick={keyClick} >
        <div className="arrow arrow-left" />
      </StyledKeyButtons>
      <StyledKeyButtons onClick={keyClick} >
        <div className="arrow arrow-right" />
        </StyledKeyButtons>
    </StyledArrowsWrapper>
    <StyledKeyButtons onClick={keyClick} >
      <div className="arrow arrow-down" />
    </StyledKeyButtons>
  </div>
)

export default KeyButtons;