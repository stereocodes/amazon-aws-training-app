import React from "react";
import Card from "./courseCard.tsx";
import courses from "../../store/courses.ts";
import styled from "styled-components";
import FormSearch from "../form/formSearch.tsx";
import CourseFilters from "./courseFilters.tsx";
import FormSelect from "../form/formSelect.tsx";
import FormToggleButton from "../form/formToggleButton.tsx";
import iconOrder from "~/static/icons/ui/order.svg";
import FormCategorySelect from "../form/formCategorySelect.tsx";
import { Scrollbars } from 'react-custom-scrollbars';


type Course = {
  title: string;
  image: string;
  color: string;
};

const CourseContainer = () => {
  function formatCourses(data: Course[]) {
    return data.map((e: Course, i: number) => (
      <Card key={i} title={e.title} image={e.image} averageColor={e.color} />
    ));
  }
  return (
    <>
      <FormCategorySelect
        categories={[
          { key: "all", label: "All Courses" },
          { key: "digital", label: "Digital Training" },
          { key: "classroom", label: "Classroom Training" }
        ]}
      />
      <CourseFilters>
        <FormSearch
          callback={(value: string) => {
            console.log(value);
          }}
        />
        <FormSelect
          options={["Latest", "Language", "Skill"]}
          name="sort"
          defaultIndex={0}
          label="Sort By:"
          callback={(value: string) => {
            console.log(value);
          }}
        />
        <FormToggleButton
          toggleValues={{ on: true, off: false }}
          icon={iconOrder}
          callback={(value: string) => {
            console.log(value);
          }}
        />
        <StyledCoursetotal>{`${courses.length} Courses`}</StyledCoursetotal>
      </CourseFilters>
      <StyledContainer>
        <Scrollbars
          autoHeight
          autoHeightMax={800}
        >
          <div className="scrollarea">
            {formatCourses(courses)}
          </div>
          
        </Scrollbars>
        
      </StyledContainer>
    </>
  );
};

export default CourseContainer;

const StyledCoursetotal = styled.span`
  align-self: center;
  font-size: 1.4rem;
  white-space: nowrap;
`;

const StyledContainer = styled.section`
  grid-column: 2 / span 14;
  overflow: hidden;
  .scrollarea {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 32px;
    padding-bottom: 50px;
    overflow: hidden;
  }
`;
