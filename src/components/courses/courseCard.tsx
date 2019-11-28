import React from "react";
import styled from "styled-components";
import CourseCardTag from './courseCardTag.tsx';
import CourseBookmarkButton from './courseBookmarkButton.tsx';

type postMetaObject = {
  title: string;
  data: string;
};

type courseMeta = {
  language: string;
  duration: string;
  skill: string;
  type: string;
}

interface ICard {
  title?: string;
  image?: string;
  averageColor: string;
  postMeta?: postMetaObject[];
  courseMeta?: courseMeta;
}

interface IStyledCard {
  backgroundImage?: string;
  backgroundColor?: string;
}

interface IStyledDrawer {
  backgroundColor: string;
}

const CourseCard = (props: ICard) => {
  function tagGroup(metadata: courseMeta) {
    const metaRef = metadata;
    return Object.keys(metadata).map((e:string, i:number) => {
      //@ts-ignore
      return (<CourseCardTag type={e} label={metaRef[e]} key={i}/>)
    });
  }

  function metaGroup(metadata: postMetaObject[]) {
    return metadata.map((e: postMetaObject, i: number) => (
      <span key={i}>
        <span>
          {e.title} {e.data}
        </span>
        {i < metadata.length - 1 && " - "}
      </span>
    ));
  }

  return (
    <StyledCard
      backgroundImage={props.image}
      backgroundColor={props.averageColor}
    >
      <div>
        <CourseBookmarkButton />
        <div>
          <h4>{props.title}</h4>
          <p>{metaGroup(props.postMeta)}</p>
        </div>
      </div>
      <StyledCardDrawer>
        {tagGroup(props.courseMeta)}
      </StyledCardDrawer>
    </StyledCard>
  );
};

CourseCard.defaultProps = {
  title: "testing title",
  averageColor: "black",
  postMeta: [
    {
      title: "Videos",
      data: "20"
    },
    {
      title: "Updated",
      data: "10/12/19"
    }
  ],
  courseMeta: {
    language: "english",
    skill: "advanced",
    type: "curriculum",
    duration: "4 hours"
  }
};


export default CourseCard;

const StyledCardDrawer = styled.aside`
  position: absolute;
  left: 0;
  bottom: -100%;
  width: 100%;
  align-self: none;
  padding: 16px;
  z-index: 2;
  padding-bottom: 16px;
  transition: bottom 0.4s;
  span {
    display: inline-block;
    background: white;
    padding: 5px 15px;
    border-radius: 100px;
    font-size: 1.2rem;
    font-family: Roboto-Regular;
    margin-right: 16px;
    margin-bottom: 16px;
    img {
      margin-right: 5px;
    }
  }
`;

const StyledCard = styled.div`
  
  border-radius: 8px;
  background-image: url(${(p: IStyledCard) => p.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${(p: IStyledCard) => p.backgroundColor};
  height: 384px;
  position: relative;
  overflow: hidden;
  padding: 16px;
  display: block;
  width: 100%;
  grid-column: span 1;
  &:before {
    content: "";
    display: block;
    background-image: url(${(p: IStyledCard) => p.backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: ${(p: IStyledCard) => p.backgroundColor};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    filter: blur(10px);
    opacity: 0;
    transition: opacity 0.4s;
  }
  &:after {
    content: "";
    background: linear-gradient(
      rgba(255, 255, 255, 0) 50%,
      ${(p: IStyledCard) => p.backgroundColor} 90%
    );
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 0;
    border-radius: 8px;
  }
  & > div {
    position: absolute;
    z-index: 1;
    top: 16px;
    left: 16px;
    height: calc(100% - 32px);
    width: calc(100% - 32px);
    display: flex;
    align-items: flex-end;
    div {
      position: relative;
      bottom: 0;
      opacity: 1;
      transition: all 0.4s;
    }
  }
  h4 {
    color: white;
    font-family: "CircularStd-Black", sans-serif;
    font-size: 1.4rem;
    color: #ffffff;
    letter-spacing: -0.1px;
    line-height: 20px;
    margin-bottom: 15px;
    text-transform: capitalize;
  }
  p {
    letter-spacing: 0;
    font-family: Roboto-Regular;
    font-size: 1.2rem;
    color: #ffffff;
    text-transform: capitalize;
    padding-bottom: 8px;
  }
  &:hover {
    & > div div {
      bottom: 60px;
      opacity: 0;
    }
    aside {
      bottom: 0%;
    }
    &:before {
      opacity: 1;
    }
  }
`;

