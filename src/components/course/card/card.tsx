import React from "react";
import styled from "styled-components";

type MetaObject = {
  title: string;
  data: string;
};

interface ICard {
  title?: string;
  image?: string;
  averageColor: string;
  meta?: MetaObject[];
}

interface IStyledCard {
  backgroundImage?: string;
  backgroundColor?: string;
}

interface IStyledDrawer {
  backgroundColor: string;
}

interface ITag {
  label: string;
  type: string;
}

const Card = (props: ICard) => {
  const Tag = (props: { label: string }) => {
    return (
      <span>
        <svg
          width="9px"
          height="9px"
          viewBox="0 0 9 9"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g
            id="Symbols"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g id="tag/icon/curriculum" stroke="#000000">
              <polygon id="Triangle" points="4.5 0.875 8 7.875 1 7.875" />
            </g>
          </g>
        </svg>
        {props.label}
      </span>
    );
  };
  function metaGroup(metadata: MetaObject[]) {
    return metadata.map((e: MetaObject, i: number) => (
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
        <span className="icon">
          <svg
            width="32px"
            height="32px"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g
              id="Symbols"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g id="icon/bookmark/unchecked">
                <polygon
                  id="Rectangle"
                  stroke="#000000"
                  points="11 8 21 8 21 23 16 20.7832031 11 23"
                />
              </g>
            </g>
          </svg>
        </span>

        <div>
          <h4>{props.title}</h4>
          <p>{metaGroup(props.meta)}</p>
        </div>
      </div>
      <StyledCardDrawer>
        <Tag label="English" />
        <Tag label="Curriculum" />
        <Tag label="Advanced" />
        <Tag label="4 Hours" />
      </StyledCardDrawer>
    </StyledCard>
  );
};

Card.defaultProps = {
  title: "testing title",
  averageColor: "black",
  meta: [
    {
      title: "Videos",
      data: "20"
    },
    {
      title: "Updated",
      data: "10/12/19"
    }
  ]
};



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
    svg {
      margin-right: 5px;
    }
  }
`;

const StyledCard = styled.div`
  width: 288px;
  border-radius: 8px;
  background-image: url(${(p: IStyledCard) => p.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${(p: IStyledCard) => p.backgroundColor};
  height: 384px;
  position: relative;
  overflow: hidden;
  padding: 16px;
  display: inline-block;
  &:before {
    content: "";
    display: block;
    background-image: url(${(p: IStyledCard) => p.backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
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
  span.icon {
    display: inline-block;
    width: 32px;
    height: 32px;
    border-radius: 100px;
    background: white;
    position: absolute;
    top: 0;
    right: 0;
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

export default Card;