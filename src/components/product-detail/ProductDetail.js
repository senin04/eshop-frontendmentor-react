import React from "react";
import styled from "styled-components";
import ProductGallery from "./product-gallery/ProductGallery";
import ProductInfo from "./product-info/ProductInfo";

const MainContainer = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 980px;
  display: flex;
  margin-top: 90px;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    margin-top: 0;
  }
`;

function ProductDetail({ product, handleAddToCard }) {
  return (
    <MainContainer>
      <ProductGallery product={product}></ProductGallery>
      <ProductInfo
        product={product}
        onAddToCard={handleAddToCard}
      ></ProductInfo>
    </MainContainer>
  );
}

export default ProductDetail;
