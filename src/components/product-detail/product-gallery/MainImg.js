import React from "react";
import styled from "styled-components";
import PreviousArrow from "./PreviousArrow";
import NextArrow from "./NextArrow";

const StyledMainImg = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  background-size: contain;
  overflow: auto;
  height: 400px;
  width: 400px;
  border-radius: 20px;
  cursor: pointer;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.3s;
  opacity: ${(props) => (props.opened === true ? "1" : "0")};

  @media screen and (max-width: 900px) {
    border-radius: 0%;
    width: 400px;
    height: 310px;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    cursor: auto;
  }
`;

function MainImg({ image, active, onPrevious, onNext, onOpenGallery }) {
  return (
    <StyledMainImg
      opened={active}
      onClick={onOpenGallery}
      backgroundImage={image}
    >
      <PreviousArrow onPrevious={onPrevious}></PreviousArrow>
      <NextArrow onNext={onNext}></NextArrow>
    </StyledMainImg>
  );
}

export default MainImg;
