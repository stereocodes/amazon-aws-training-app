import React from "react";
import NavSidebar from "./navSidebar/navSidebar.tsx";
import CourseContainer from "./courses/courseContainer.tsx";
import { createGlobalStyle } from "styled-components";
import ProfileMenu from "./profile/profileMenu.tsx";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <div className="drag-bar"></div>
        <NavSidebar />
        <main>
          <CourseContainer />
          <ProfileMenu />
        </main>
      </div>
    </>
  );
};

export default App;

const GlobalStyle = createGlobalStyle`
  :root{
    --color-MISTY: #F7F7F7;
    --color-HIGHLIGHT: #EC912D;
  }
  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: none;
    border: none;
  }
  html{font-size: 62.5%;}
  body{
    font-family: sans-serif;
  }
  .drag-bar{
    -webkit-app-region: drag;
    width: 100%;
    height: 16px;
    background: rgba(0,0,0,0);
    position: fixed;
    top: 0;
    left: 0;
    transition: all .4s;
    &:hover{
      background: rgba(0,0,0,.2);
    }
  }
  .container{
    border: 5px solid var(--color-HIGHLIGHT);
    height: 100vh;
    border-radius: 8px;
    background: #fff;
    overflow: hidden;
    main{
      display: grid;
      grid-template-columns: repeat(22,1fr);
      overflow: hidden;
      height: 100vh;
      align-content: start;
    }
  }
`;
