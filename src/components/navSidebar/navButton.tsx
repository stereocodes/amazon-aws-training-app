import React from 'react';
import styled from 'styled-components';


interface INavButton {
  image: string
  label: string
}

const NavButton = (props: INavButton) => {
  return (
    <button>
      <img src={props.image} alt=""/>
    </button>
  )
}

export default NavButton;