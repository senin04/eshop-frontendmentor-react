import React from "react";
import styled from "styled-components";

const CloseBtn = styled.img`
  position: absolute;
  right: 0;
  transform: translateY(-180%);
  cursor: pointer;
  width: 20px;
`;

function CloseBtnGallery({ onCloseGallery }) {
  return (
    <CloseBtn onClick={onCloseGallery} src="/images/icon-close.svg"></CloseBtn>
  );
}

export default CloseBtnGallery;
