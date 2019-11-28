import React from "react";
import styled from "styled-components";

interface INavButton {
  image: string;
  label: string;
}

const NavButton = (props: INavButton) => {
  return (
    <StyledButton>
      <img src={props.image} alt="" />
      <span>{props.label}</span>
    </StyledButton>
  );
};

export default NavButton;

const StyledButton = styled.button`
  background: none;
  text-align: center img {
    display: inline-block;
    margin-bottom: 15px;
  }
  span {
    display: block;
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    word-spacing: 100px;
    line-height: 20px;
    font-size: 1.4rem;
  }
`;
