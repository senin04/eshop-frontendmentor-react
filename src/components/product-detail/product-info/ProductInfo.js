import React from "react";
import styled from "styled-components";
import ProductPrice from "./ProductPrice";
import AddToCard from "./AddToCard";

const StyledTextPart = styled.div`
  max-width: 420px;

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    max-width: 340px;
  }
  h1 {
    font-size: 43px;

    @media screen and (max-width: 900px) {
      font-size: 30px;
    }
  }

  p {
    font-size: 16px;
    color: hsl(219, 9%, 45%);
    margin: 30px 0;
    line-height: 1.5;

    @media screen and (max-width: 900px) {
      margin-top: 15px;
      margin-bottom: 20px;
    }
  }
`;

const StyledBrandName = styled.div`
  font-size: 13px;
  color: hsl(26, 100%, 55%);
  font-weight: 700;
  margin-bottom: 15px;
  letter-spacing: 2px;

  @media screen and (max-width: 900px) {
    margin: 15px 0;
  }
`;

function ProductInfo({ onAddToCard, product }) {
  const { brandName, name, description } = product;

  return (
    <StyledTextPart>
      <StyledBrandName>{brandName}</StyledBrandName>
      <h1>{name}</h1>
      <p>{description}</p>
      <ProductPrice product={product}></ProductPrice>
      <AddToCard onAddToCard={onAddToCard}></AddToCard>
    </StyledTextPart>
  );
}

export default ProductInfo;
