import React from "react";
import styled from "styled-components";

const StyledA = styled.a`
  border: 2px solid transparent;
  transition: 0.3s;

  &.active {
    border: 2px solid hsl(26, 100%, 55%);
    border-radius: 12px;
  }
`;

const StyledImg = styled.img`
  width: 80px;
  border-radius: 10px;
  display: block;
  &:hover {
    opacity: 0.6;
  }

  &.active {
    opacity: 0.6;
  }
`;

function SmallImageGallery({ image, activeClass, onChangeClickSmallGalery }) {
  let mainClass = "inactive";
  if (activeClass) {
    mainClass = "active";
  }

  return (
    <StyledA className={mainClass} onClick={onChangeClickSmallGalery} href="#">
      <StyledImg className={mainClass} src={image} alt="" />
    </StyledA>
  );
}

export default SmallImageGallery;
