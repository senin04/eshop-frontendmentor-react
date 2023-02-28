import React from "react";
import styled from "styled-components";

const NextArrow = styled.img`
  right: 0;
  transform: translateX(50%);
  position: absolute;
  top: 220px;
  padding: 22px;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
`;

function NextArrowGallery({ onNextGallery }) {
  return (
    <NextArrow onClick={onNextGallery} src="images/icon-next.svg"></NextArrow>
  );
}

export default NextArrowGallery;
