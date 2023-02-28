import React from "react";
import styled from "styled-components";

const StyledPreviousArrow = styled.img`
  padding: 12px 14px;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
  margin: 0 10px;
  display: none;

  @media screen and (max-width: 900px) {
    display: flex;
  }
`;

function PreviousArrow({ onPrevious }) {
  return (
    <StyledPreviousArrow
      onClick={onPrevious}
      src="images/icon-previous.svg"
    ></StyledPreviousArrow>
  );
}

export default PreviousArrow;
