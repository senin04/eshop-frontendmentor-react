import { createGlobalStyle } from "styled-components";
import { useState } from "react";
import Header from "./components/header/Header";
import ProductDetail from "./components/product-detail/ProductDetail";

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Kumbh Sans', sans-serif;
    padding: 0 20px;
}

@media screen and (max-width: 900px) {
  body {
        padding: 0;
    }
}
`;

const App = () => {
  const product = {
    brandName: "SNEAKER COMPANY",
    name: "Fall Limited Edition Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring durable rubber outer sole, they´ll withstand everything the weather can offer.",
    price: 125.0,
    beforePrice: "$250.00",
    discount: "50%",

    images: [
      "./images/image-product-1.jpg",
      "./images/image-product-2.jpg",
      "./images/image-product-3.jpg",
      "./images/image-product-4.jpg",
    ],
    thumbnails: [
      "./images/image-product-1-thumbnail.jpg",
      "./images/image-product-2-thumbnail.jpg",
      "./images/image-product-3-thumbnail.jpg",
      "./images/image-product-4-thumbnail.jpg",
    ],
  };

  const [piecesInCart, setPiecesInCart] = useState(0);

  const handleAddToCard = (number) => {
    const countInCart = piecesInCart + number;
    setPiecesInCart(countInCart);
  };

  const handleDeleteItem = () => {
    setPiecesInCart(0);
  };

  return (
    <>
      <Global />
      <Header handleDeleteItem={handleDeleteItem}
        piecesInCart={piecesInCart}>
      </Header>
      <ProductDetail
        handleAddToCard={handleAddToCard}
        product={product}
      ></ProductDetail>
    </>
  );
};

export default App;
