import { useState } from "react";
import styled from "styled-components";
import AddToCardButton from "./AddToCardButton";

const StyledAddToCard = styled.div`
  display: flex;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const ChangePiecesNumberDiv = styled.div`
  display: flex;

  > * {
    max-width: 50px;
    border: none;
    background-color: hsl(223, 64%, 98%);
  }

  button {
    cursor: pointer;
    padding: 20px 20px;
    border-radius: 10px;
  }

  input {
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    display: block;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input:focus {
    outline: none;
  }

  input:focus::placeholder {
    color: transparent;
  }

  @media screen and (max-width: 900px) {
    justify-content: space-between;
    background-color: hsl(223, 64%, 98%);
  }
`;

function AddToCard({ onAddToCard }) {
  const [numberOfPieces, setNumberOfPieces] = useState(0);

  const handleChangeInput = (number) => {
    setNumberOfPieces(number);
  };

  const handleMinus = () => {
    if (numberOfPieces > 0) {
      let number = parseInt(numberOfPieces) - 1;
      setNumberOfPieces(number);
    }
  };

  const handlePLus = () => {
    let number = parseInt(numberOfPieces) + 1;
    setNumberOfPieces(number);
  };

  const handleAddToCard = (number) => {
    onAddToCard(number);
    setNumberOfPieces(0);
  };
  return (
    <StyledAddToCard>
      <ChangePiecesNumberDiv>
        <button onClick={handleMinus}>
          <img src="/images/icon-minus.svg" alt="" />
        </button>
        <input
          onChange={(e) => handleChangeInput(e.target.value)}
          type="number"
          value={numberOfPieces}
        />
        <button onClick={handlePLus}>
          <img src="/images/icon-plus.svg" alt="" />
        </button>
      </ChangePiecesNumberDiv>
      <AddToCardButton
        numberOfPieces={numberOfPieces}
        onAddToCard={handleAddToCard}
      ></AddToCardButton>
    </StyledAddToCard>
  );
}

export default AddToCard;
