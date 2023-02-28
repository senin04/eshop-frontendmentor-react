import React from "react";
import styled from "styled-components";

const PreviousArrow = styled.img`
  left: 0;
  transform: translateX(-50%);
  position: absolute;
  top: 220px;
  padding: 22px;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
`;

function PreviousArrowGallery({ onPreviousGallery }) {
  return (
    <PreviousArrow
      onClick={onPreviousGallery}
      src="images/icon-previous.svg"
    ></PreviousArrow>
  );
}

export default PreviousArrowGallery;
