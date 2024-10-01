// CoursesList.js
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { allCourseApi } from '../Data/DataFetcher';

const C1 = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getAllCourses = async () => {
      try {
        const response = await axios.get('http://localhost:5300/api/allcourses');
        console.log(response.courses)
        setCourses(response.data.courses); // Set courses state with fetched data
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    getAllCourses();
  }, []);

  return (
    <div>
      <h2>All Courses</h2>
      <ul>
        {courses.map(course => (
          <li key={course._id}>
            {course.courseName} - {course.duration} weeks
          </li>
        ))}
      </ul>
    </div>
  );
};

export default C1;
