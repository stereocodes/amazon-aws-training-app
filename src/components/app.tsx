import React from "react";
import NavSidebar from "./navSidebar/navSidebar";
import CourseContainer from "./courses/courseContainer";
import { createGlobalStyle } from "styled-components";
import ProfileMenu from "./profile/profileMenu";
import CourseSidebar from "./courses/courseSidebar";
import FormCategorySelect from "./form/formCategorySelect";
import {ipcRenderer} from "electron";

const App = () => {
  function resizeDoubleClick() {
    ipcRenderer.send('maximize', 'true');
    console.log('is this working?')
  }
  return (
    <>
      <GlobalStyle />
      <div className="drag-bar" onDoubleClick={resizeDoubleClick}></div>
      <div className="container">
        <NavSidebar />
        <section>
          <header>
            <FormCategorySelect
              categories={[
                { key: "all", label: "All Courses" },
                { key: "digital", label: "Digital Training" },
                { key: "classroom", label: "Classroom Training" }
              ]}
              callback={(key:any) => (console.log(key))}
            />
            <ProfileMenu />
          </header>
          <main>
            <CourseContainer />
            <CourseSidebar  />
          </main>
        </section>
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
    width:100%;
    background: black
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
    display: flex;
    align-items: flex-start;
    & > section{
      display: grid;
      grid-template-columns: repeat(22,1fr);
      width: 100%;
    }
    main, header{
      display: grid;
      grid-template-columns: repeat(22,1fr);
      overflow: hidden;
      height: auto;
      align-content: start;
      grid-column: 1 / span 22;
    }

  }
`;
