import React from "react";
import styled from "styled-components";

const BlackBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2;
`;

const HiddenMenuBackground = () => {
  return <BlackBackground></BlackBackground>;
};

export default HiddenMenuBackground;
