import React, { useState, useRef } from "react";
import styled from "styled-components";

interface IFormToggleButton {
  toggleValues: { on: any; off: any };
  callback?: (value: string | boolean | number) => void;
  icon: string;
}

// aka styled checkbox
const FormToggleButton = (props: IFormToggleButton) => {
  const [toggle, setToggle] = useState(false);
  function changeCallback() {
    if(typeof props.callback === 'function') {
      if (toggle) {
        setToggle(false)
        props.callback(props.toggleValues.off)
      } else {
        setToggle(true);
        props.callback(props.toggleValues.on)
      }
    }
  }
  return (
    <StyledFormToggleButton>
      <input type="checkbox" id="testing" onChange={changeCallback}/>
      <img src={props.icon} />
      <label htmlFor="testing"></label>
    </StyledFormToggleButton>
  );
};

export default FormToggleButton;

const StyledFormToggleButton = styled.div`
  position: relative;
  text-align: center;
  align-items: center;
  align-self: center;
  transform-origin: center;
  transform: scale(1);
  transition: all 0.4s;
  img {
    transform-origin: center;
    transform: rotate(0deg);
    transition: all 0.4s;
  }

  input[type="checkbox"],
  label {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    z-index: 1;
    top: 0;
    left: 0;
    opacity: 0;
  }

  input:checked ~ img {
    transform: rotate(180deg);
  }
  &:hover {
    transform: scale(1.2);
  }
`;
