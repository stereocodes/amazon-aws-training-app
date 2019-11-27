import React from 'react';
import Card from './course/card/card.tsx';
import NavSidebar from './navSidebar/navSidebar.tsx';
import { createGlobalStyle } from 'styled-components';


const App = () => {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <div className="drag-bar"></div>
        <NavSidebar />
        
        <Card
          title="Exam Readiness: AWS Certified SysOps Administrator - Associate (Japanese)"
          image="http://www.nasa.gov/sites/default/files/images/756752main_20130620-m2.9flare-orig_full.jpg"
          averageColor="#B01C06"
        />
      </div>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  :root{
    --color-MISTY: #F7F7F7;
    --color-HIGHLIGHT: #EC912D;
  }
  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  html{font-size: 62.5%;}
  body{
    font-family: sans-serif;
  }
  .drag-bar{
    -webkit-app-region: drag;
    width: 100%;
    height: 16px;
    background: transparent;
    position: fixed;
    top: 0;
    left: 0;
  }
  .container{
    border: 5px solid var(--color-HIGHLIGHT);
    height: 100vh;
    border-radius: 8px;
    overflow: hidden;
    background: #fff;
  }
`;

export default App;