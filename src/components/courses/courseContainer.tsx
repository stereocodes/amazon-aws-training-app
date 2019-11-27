import React from 'react';
import Card from './courseCard.tsx';
import courses from '../../store/courses.ts';
import styled from 'styled-components';
import FormSearch from '../form/formSearch.tsx';
import CourseFilters from './courseFilters.tsx';
import FormSelect from '../form/formSelect.tsx';


type Course = {
  title: string
  image: string
  color: string
}

const CourseContainer = () => {
  function formatCourses(data:Course[]) {
    return data.map((e:Course,i:number) => 
      (
        <Card 
          key={i}
          title={e.title}
          image={e.image}
          averageColor={e.color}
        />
      )
    )
  }
  return (
    <>
    <CourseFilters>
      <FormSearch 
        callback={
          (value:string) => {console.log(value)}
        }
      />
      <FormSelect 
        options={['one', 'two']}
        name="sort"
        defaultIndex={0}
        label="Sort By:"
        callback={
          (value:string) => {console.log(value)}
        }
      />
    </CourseFilters>
    <StyledContainer>
      {formatCourses(courses)}
    </StyledContainer>
    </>
  );
}

export default CourseContainer;


const StyledContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  grid-column: 2 / span 14;
`;