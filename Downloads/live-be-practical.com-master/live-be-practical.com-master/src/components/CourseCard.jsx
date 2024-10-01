import React, { useEffect } from 'react';
import '../styles/coursecard.css';
import AOS from 'aos';


function CourseCard({data}) {
useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  return (
    <>
        <div className='course-single-card bg-gray3'>
          <div className="course-single-card-header py-4">
            <h1 className="fs-3 text-white">Apply for the <span className="text-main-danger">{data.courseName}</span>  Program</h1>
          </div>
          <ul className="list-group">
            <li className="list-group-item border-0">
                <h4 className='text-main-danger'>{data.courseName}</h4>
            </li>
            <li className="list-group-item border-0 bg-gray2">
                {/* <p className='text-white'><strong className='card-single-heading text-main-danger'>Instructor: </strong>{data.instructors.name}</p> */}
            </li>
            <li className="list-group-item border-0 bg-gray2">
                <p className='text-white'><strong className='card-single-heading text-main-danger'>Duration: </strong>{data.courseDuration} </p>
            </li>
            <li className="list-group-item border-0 bg-gray2">
                <p className='text-white'><strong className='card-single-heading text-main-danger'>Enrolled: </strong>{data.enrolledStudents}+ Students</p>
            </li>
            <li className="list-group-item border-0 bg-gray2">
                <p className='text-white'><strong className='card-single-heading text-main-danger'>Mode Of training: </strong>Online & Offline</p>
            </li>
              <button className="btn-danger w-100 mt-2 p-4 rounded-3">Join Free Demo Classes <i class="bi bi-chevron-double-right"></i></button>
          </ul>
        </div>
    </>
  );
}

export default CourseCard;
