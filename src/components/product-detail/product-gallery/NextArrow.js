import React from "react";
import styled from "styled-components";

const StyledNextArrow = styled.img`
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

function NextArrow({ onNext }) {
  return (
    <StyledNextArrow
      onClick={onNext}
      src="images/icon-next.svg"
    ></StyledNextArrow>
  );
}

export default NextArrow;
