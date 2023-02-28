import React from "react";
import styled from "styled-components";

const StyledPricesDiv = styled.div`
  @media screen and (max-width: 900px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
`;

const StyledBeforePrice = styled.div`
  color: hsl(220, 14%, 75%);
  text-decoration: line-through;
  margin-bottom: 30px;
  @media screen and (max-width: 900px) {
    margin: 0;
  }
`;

const ActualPrice = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  .discount {
    color: hsl(26, 100%, 55%);
    background-color: hsl(25, 100%, 94%);
    font-weight: 700;
    padding: 3px 7px;
    border-radius: 7px;
  }
  .actual-price {
    margin-right: 20px;
    font-weight: 700;
    font-size: 30px;
  }
  @media screen and (max-width: 900px) {
    margin: 0;
  }
`;

function ProductPrice({ product }) {
  const { price, beforePrice, discount } = product;
  return (
    <StyledPricesDiv>
      <ActualPrice>
        <div className="actual-price">$ {price.toFixed(2)}</div>
        <div className="discount">{discount}</div>
      </ActualPrice>
      <StyledBeforePrice>{beforePrice}</StyledBeforePrice>
    </StyledPricesDiv>
  );
}

export default ProductPrice;
