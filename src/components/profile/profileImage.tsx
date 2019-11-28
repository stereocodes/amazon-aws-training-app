import React from "react";
import styled from "styled-components";

interface IProfileImage {
  image?: string;
}

const ProfileImage = (props: IProfileImage) => {
  return <StyledProfileImage image={props.image}></StyledProfileImage>;
};

export default ProfileImage;

const StyledProfileImage = styled.div`
  background: url(${(p: IProfileImage) => p.image}) center / cover
    var(--color-MISTY) no-repeat no-repeat;
  border-radius: 100px;
  width: 100%;
  height: 100%;
  min-height: 50px;
  min-width: 50px;
`;
