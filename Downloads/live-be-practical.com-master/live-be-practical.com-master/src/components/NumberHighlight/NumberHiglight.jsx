import React from 'react'
import './style.css'

const numbers = [
    {
        number:"10+",
        title:"Experienced Professional trainer"
    },
    {
        number:"100%",
        title:"Job Placement Assurance"
    },
    {
        number:"11+",
        title:"Year Of Expierience"
    },
    {
        number:"100%",
        title:"Industry Based Syllubus"
    }
]
function NumberHiglight() {
  return (
    <div className="container-fluid about-highlight bg-gray2 p-3">
        <p className="text-center fs-1 text-900 text-white" data-aos="fade-up">Why You <span className="text-main-danger">Choose Us?</span></p>
    <div className="row">
       {
        numbers.map((item, index)=>(
            <div className="col-6 col-md-6 col-lg-3">
            <div className="about-h-card border-b text-center bg-gray4 rounded-5 p-3">
              <div className="d-flex justify-content-center">
              <p className="fs-1 text-900 bg-round bg-danger-2 text-white">{item.number}</p>
              </div>
                <p className="fs-4 text-900">{item.title}</p>
            </div>
        </div>
        ))
       }
        <div className="col-6 col-md-6 col-lg-3"></div>
        </div>
    </div>
  )
}

export default NumberHiglight
