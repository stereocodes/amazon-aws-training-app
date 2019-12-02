import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import styled from 'styled-components';

const CourseSidebar = () => {
  const fakeMarkup = '<h1>Deep Dive into AWS IoT Authentication and Authorization</h1><img src="https://images.unsplash.com/photo-1575297991359-1d374d2e022d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"><p>Security is a central concern for all of Amazon Web Services (AWS). Security is extremely important in the field of IoT (Internet of Things) because IoT devices are physically accessible. Authentication and authorization are the foundations of a secure IoT infrastructure.</p><p>This course explores the concepts of IoT authentication and authorization within AWS IoT. You will learn about the IoT control plane and data plane and how to authenticate and authorize to both. This course is intended for students who would like to securely connect devices, mobile apps, desktop apps, web apps, or the CLI to AWS IoT. You will learn about using different authentication methods and their appropriate authorization policies.</p><p>This is an interactive course that includes hands-on exercises using AWS. This course is designed so that you can take the full course from start to finish or select individual topics that suit your interests.</p>';
  function transformer(node:any, index:number) {
    // wrap images
    if (node.name === 'img') {
      return (<div className="inline-image" key={index}><img src={node.attribs.src} /></div>);
    }
  }
  return (
    <StyledCourseSidebar>
      {ReactHtmlParser(fakeMarkup, {transform: transformer})}
    </StyledCourseSidebar>
  )
}


export default CourseSidebar;

const StyledCourseSidebar = styled.aside`
  grid-column: 15 / span 7;
  h1{
    font-family: CircularStd-Black;
    font-size: 20px;
    color: #000000;
    letter-spacing: -0.17px;
    line-height: 28px;
    margin-bottom: 30px;
  }
  p{
    margin-bottom: 30px;
    font-family: Roboto-Regular;
    font-size: 16px;
    color: #000000;
    letter-spacing: -0.1px;
    line-height: 26px;
  }
  .inline-image{
    margin-bottom: 30px;
  }
  .inline-image img{
    height: 250px;
    width: 100%;
    overflow: hidden;
    border-radius: 8px;
    object-fit: cover;
  }
`;