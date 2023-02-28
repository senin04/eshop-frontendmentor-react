import React, { useState } from "react";
import styled from "styled-components";
import MainImg from "./MainImg";
import SmallImage from "./SmallImage";
import FotoGallery from "./popup-gallery/FotoGallery";
import useWindowSize from "../../../hooks/useWindowSize";

const StyledImgDiv = styled.div`
  position: relative;
  height: 400px;
  width: 400px;

  @media screen and (max-width: 900px) {
    height: 310px;
  }
`;

const StyledSmallImgs = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

function ProductGallery({ product }) {
  const { images, thumbnails } = product;

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [visibleGallery, setvisibleGallery] = useState(false);

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

  const windowSize = useWindowSize();
  const onOpenGallery = () => {
    if (windowSize.width < 900) {
      setvisibleGallery(false);
    } else {
      setvisibleGallery(true);
    }
  };

  const handleCloseGallery = () => {
    setvisibleGallery(false);
  };

  return (
    <div>
      <StyledImgDiv>
        {images.map((image, index) => {
          return (
            <MainImg
              key={index}
              onOpenGallery={onOpenGallery}
              onPrevious={handlePrevious}
              onNext={handleNext}
              image={image}
              active={index === selectedImageIndex}
            ></MainImg>
          );
        })}
      </StyledImgDiv>
      <StyledSmallImgs>
        {thumbnails.map((thumbnail, index) => {
          return (
            <SmallImage
              key={index}
              onClickSmall={() => handleClickSmall(index)}
              activeClass={index === selectedImageIndex}
              image={thumbnail}
            ></SmallImage>
          );
        })}
      </StyledSmallImgs>
      <FotoGallery
        onCloseGallery={handleCloseGallery}
        visibleGallery={visibleGallery}
        product={product}
      ></FotoGallery>
    </div>
  );
}

export default ProductGallery;
