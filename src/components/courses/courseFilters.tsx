import React,{ReactNode} from 'react';
import styled from 'styled-components';

interface ICourseFilter {
  children?: ReactNode
}

const CourseFilters = (props: ICourseFilter) => {
  return (
    <StyledCourseFilters>
      {props.children}
    </StyledCourseFilters>
  )
}

export default CourseFilters;

const StyledCourseFilters = styled.div`
  grid-column: 2 / span 16;
`;