import React from 'react'
import { Link } from 'react-router-dom'

function Ourcoursecard(props) {
  return (
   <div className="course-card-container container">
    <div className="row">
        {
            props.data.map((item, index)=>(
                <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                     <div className='course-card'>
                    <div className="course-card-header">
                        <img src={item.CourseImage} alt="course-image" className="w-100" />
                    </div>
                    <div className="course-card-body">
                        <h1 className="fs-3">{item.courseName}</h1>
                        {/* <p>{item.course}</p> */}
                        <Link to={`/course/${item.courseName}/${item.CourseId}`}>Learn More..</Link>
                    </div>
                    </div>
                </div>
            ))
        }
    </div>
   </div>
  )
}

export default Ourcoursecard
