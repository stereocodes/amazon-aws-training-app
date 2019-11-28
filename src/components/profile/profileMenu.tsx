import React from "react";
import styled from "styled-components";
import ProfileImage from "./ProfileImage.tsx";

interface IProfileMenu {
  image?: string;
}

const ProfileMenu = (props: IProfileMenu) => {
  function showProfileSidebar() {
    console.log("profile tab open");
  }
  return (
    <StyledProfileMenu>
      <div>
        <span></span>
        <button onClick={() => showProfileSidebar}>
          <ProfileImage image="https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1834&q=80" />
        </button>
      </div>
    </StyledProfileMenu>
  );
};

export default ProfileMenu;

const StyledProfileMenu = styled.div`
  grid-row: 1;
  grid-column: 21 / span 2;
  align-self: center;
  width: 100%;
  text-align: center;
  position: relative;
  & > div {
    display: inline-block;
    display: flex-inline;
    align-items: flex-end;
    span {
      display: block;
      background: red;
      height: 20px;
      width: 20px;
    }
  }
`;
