import React,{useState} from 'react';
import styled from 'styled-components';
import iconBookmark from '~/static/icons/ui/bookmark.svg';

interface IStyledButton {
  active: boolean
} 

const CourseBookmarkButton = () => {
  const [toggle, setToggle] = useState(false)
  function toggleButton() {
    if (toggle) {
      setToggle(false)
    } else {
      setToggle(true)
    }
  }
  return (
    <StyledButton onClick={(e) => toggleButton()} active={toggle}>
      <img src={iconBookmark} alt="" />
    </StyledButton>
  )
}


export default CourseBookmarkButton;


const StyledButton = styled.button`
  background: ${(p: IStyledButton) => p.active ? 'var(--color-HIGHLIGHT)' : 'white'};
  display: inline-block;
  width: 32px;
  height: 32px;
  border-radius: 100px;
  position: absolute;
  top: 0;
  right: 0;
  transform-origin: center;
  transform: scale(1);
  transition: all .4s;
  &:hover{
    transform: scale(1.2)
  }
`;