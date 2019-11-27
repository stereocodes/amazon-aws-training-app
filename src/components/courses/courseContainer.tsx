import React from 'react';
import Card from './card.tsx';
import courses from '../../store/courses.ts';

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
    <section>
      {formatCourses(courses)}
    </section>
  );
}

export default CourseContainer;