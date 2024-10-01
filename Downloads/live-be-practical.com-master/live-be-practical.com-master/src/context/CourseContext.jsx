import React, { createContext, useContext, useState } from 'react';

const CourseContext = createContext();

export const useCourseContext = () => useContext(CourseContext);

export const CourseProvider = ({ children }) => {
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const [selectedSubCourseId, setSelectedSubCourseId] = useState(null);

  return (
    <CourseContext.Provider value={{ selectedCourseId, setSelectedCourseId, selectedSubCourseId, setSelectedSubCourseId }}>
      {children}
    </CourseContext.Provider>
  );
};
