import styled from "styled-components";
import React from "react";

const StyledAvatar = styled.div`
  background-image: url("images/image-avatar.png");
  background-size: contain;
  background-repeat: no-repeat;
  margin-left: 50px;
  width: 50px;
  border-radius: 30px;
  height: 50px;
  border: 2px solid transparent;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    border: 2px solid hsl(26, 100%, 55%);
  }

  @media screen and (max-width: 900px) {
    width: 40px;
    height: 40px;
    margin-left: 20px;
    background-size: cover;
    background-position: center;
  }
`;

function Avatar() {
  return <StyledAvatar></StyledAvatar>;
}

export default Avatar;
