import React from 'react';
import styled from 'styled-components';
import Logo from '../ui/logo.tsx';
import library from '~/static/icons/nav/library.svg';
import NavButton from './navButton.tsx';

const NavSidebar = () => {
  console.log(library);
  return (
    <StyledNav>
      <Logo />
      <NavButton 
        image={library}
        label="Training"
      />
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