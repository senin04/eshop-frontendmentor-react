import styled from "styled-components";

const StyledLi = styled.li`
  overflow: hidden;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: space-between;

  .cart-img {
    width: 50px;
  }

  .text-price-cart {
    display: flex;
    flex-direction: column;
  }

  p {
    margin: 0;
  }

  span {
    font-weight: 700;
    color: hsl(220, 13%, 13%);
  }

  .trash {
    width: 15px;
  }
`;

function CartItem({ piecesInCart, onDeleteItem }) {
  return (
    <StyledLi>
      <img
        className="cart-img"
        src="images/image-product-1-thumbnail.jpg"
        alt=""
      />
      <div className="text-price-cart">
        <p>Fall Limited Edition Sneakers</p>
        <p>
          $125.00 x {piecesInCart}{" "}
          <span>${(piecesInCart * 125).toFixed(2)}</span>
        </p>
      </div>
      <img
        onClick={onDeleteItem}
        className="trash"
        src="images/icon-delete.svg"
        alt=""
      />
    </StyledLi>
  );
}

export default CartItem;
