import React from 'react';
import styled from 'styled-components';
import Logo from '../ui/logo.tsx';

const NavSidebar = () => {
  return (
    <StyledNav>
      <Logo />
    </StyledNav>
  )
}

const StyledNav = styled.div`
  background: var(--color-MISTY);
  width: 171px;
  top: 0;
  height: 100vh;
  float: left;
  border-top-left-radius: 20;
  border-bottom-left-radius: 20;
`;

export default NavSidebar;