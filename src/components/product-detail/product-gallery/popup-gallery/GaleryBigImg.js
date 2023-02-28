import React from "react";
import styled from "styled-components";
const StyledImg = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  background-size: contain;
  border-radius: 20px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 500px;
  height: 500px;
  overflow: hidden;
  transition: 0.3s;
  cursor: auto;
  opacity: ${(props) => (props.opened === true ? "1" : "0")};
`;

function GaleryBigImg({ image, active }) {
  return <StyledImg opened={active} backgroundImage={image}></StyledImg>;
}

export default GaleryBigImg;
