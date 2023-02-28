import React from "react";
import styled from "styled-components";
import GaleryBigImg from "./GaleryBigImg";
import SmallImageGallery from "./SmallImageGallery";
import CloseBtnGallery from "./CloseBtnGallery";
import PreviousArrowGallery from "./PreviousArrowGallery";
import NextArrowGallery from "./NextArrowGallery";
import { useState } from "react";

const StyledFotoGalery = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.75);
  display: ${(props) => (props.opened === true ? "flex" : "none")};

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const StyledDiv = styled.div`
  position: relative;
  display: flex;
  margin-top: 40px;
  flex-direction: column;
  align-items: center;
`;

const StyledSmallImgs = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  width: 400px;
  transition: 0.3s;
`;

const StyledBigImgDiv = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
`;

function FotoGallery({ product, visibleGallery, onCloseGallery }) {
  const { images, thumbnails } = product;

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleNext = () => {
    let nextIndex = selectedImageIndex + 1;
    if (nextIndex >= images.length) {
      nextIndex = 0;
    }
    setSelectedImageIndex(nextIndex);
  };

  const handlePrevious = () => {
    let nextIndex = selectedImageIndex - 1;
    if (nextIndex < 0) {
      nextIndex = selectedImageIndex.length - 1;
    }
    setSelectedImageIndex(nextIndex);
  };

  const handleClickSmall = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <StyledFotoGalery opened={visibleGallery}>
      <StyledDiv>
        <StyledBigImgDiv>
          {images.map((image, index) => {
            return (
              <GaleryBigImg
                key={index}
                image={image}
                active={index === selectedImageIndex}
              ></GaleryBigImg>
            );
          })}
        </StyledBigImgDiv>
        <StyledSmallImgs>
          {thumbnails.map((thumbnail, index) => {
            return (
              <SmallImageGallery
                key={index}
                onChangeClickSmallGalery={() => handleClickSmall(index)}
                activeClass={index === selectedImageIndex}
                image={thumbnail}
              ></SmallImageGallery>
            );
          })}
        </StyledSmallImgs>
        <CloseBtnGallery onCloseGallery={onCloseGallery} />
        <PreviousArrowGallery
          onPreviousGallery={handlePrevious}
        ></PreviousArrowGallery>
        <NextArrowGallery onNextGallery={handleNext}></NextArrowGallery>
      </StyledDiv>
    </StyledFotoGalery>
  );
}

export default FotoGallery;
