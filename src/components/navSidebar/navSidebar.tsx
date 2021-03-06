import React from "react";
import styled from "styled-components";
import Logo from "../ui/logo";
import library from "~/static/icons/nav/library.svg";
import cert from "~/static/icons/nav/cert.svg";
import support from "~/static/icons/nav/support.svg";
import training from "~/static/icons/nav/training.svg";
import NavButton from "./navButton";

const NavSidebar = () => {
  return (
    <StyledNav>
      <Logo />
      <div>
        <NavButton image={library} label="Training Library" />
        <NavButton image={cert} label="Certification" />
        <NavButton image={training} label="Partner Training" />
        <NavButton image={support} label="Support" />
      </div>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  background: var(--color-MISTY);
  width: 171px;
  top: 0;
  height: 100vh;
  float: left;
  border-top-left-radius: 20;
  border-bottom-left-radius: 20;
  text-align: center;
  padding-top: 50px;
  svg {
    display: inline-block;
    margin-bottom: 150px;
  }
  div {
    display: flex;
    text-align: center;
    flex-direction: column;
    & > button {
      margin-bottom: 50px;
    }
  }
`;

export default NavSidebar;
