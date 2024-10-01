import React from 'react'
import './style.css'
import matierial from '../../images/metierial.png'
import faculty from '../../images/faculty.png'
import mock from '../../images/mack-interview.png'
import Projects from '../../images/project.jpg'
import recordedClasses from '../../images/recorded-lecturers.png'
import revision from '../../images/revision-session.png'
import hackathon from '../../images/hackethons.png'
import doubts from '../../images/doubt-clear.png'
import events from '../../images/events.png'
import dsa from '../../images/dsa-classes.png'
import certificate from '../../images/certificate.png'
import badge from '../../images/badg.png'

const courseOfferingData = [
    {
        title:"Learning Resources",
        image:matierial
    },
    {
        title:"Qualified Experts",
        image:faculty
    },
    {
        title:"Mock Interviews",
        image:mock
    },
    {
        title:"Recorded sessions/ classroom catchup",
        image:recordedClasses
    },
    {
        title:"Revise & Rise",
        image:revision
    },
    {
        title:"Complimentary Code Fests",
        image:hackathon
    },
    {
        title:"Marathons/ Tech Challenges",
        image:events
    },
    {
        title:"Query Resolution Meetings",
        image:doubts
    },
    {
        title:"DSA Workshops",
        image:dsa
    },
    {
        title:"Accreditation",
        image:certificate
    },
    {
        title:"Certification Exams",
        image:badge
    },
    {
        title:"Projects",
        image:Projects
    }
]
function CourseOffering() {
  return (
    <section className='course-offering'>
      <h1 className="text-center fs-1 text-900 mb-5" data-aos="fade-up">Program  <span className="text-main-danger">Highlights</span></h1>
    <div className="p-md-5 p-3 bg-texture course-offering-inner">
    <div className="row">
        {
            courseOfferingData.map((item, index)=>(
                <div className="col-4 col-md-4 col-lg-3 border d-flex flex-column justify-content-center p-2" key={index}>
                    <div className="offering-card text-center mb-5">
                        <img src={item.image} alt="image" className='mt-4 mb-3' />
                        <h5 className="fs-4 text-center text-white">{item.title}</h5>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
    </section>
  )
}

export default CourseOffering
