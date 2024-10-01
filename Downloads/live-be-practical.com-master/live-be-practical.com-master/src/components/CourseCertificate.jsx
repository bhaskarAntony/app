import React from 'react'

function CourseCertificate({data}) {
  return (
    <section className='course-cartificate  py-5 bg-white ' id='c-certificate'>
        <h1 className="fs-1 text-900 text-center"><span className="text-main-danger">Certification</span> accredited by the industry</h1>
        <p className="fs-3 text-center">Showcase your expertise with our prestigious certification.</p>
        <div className="certificate-img container p-lg-5">
            <div className="row align-items-center">
                <div className="col-md-12 col-12 col-lg-6">
                <img src="https://img.freepik.com/free-vector/award-medal-with-red-ribbon_1284-42828.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709078400&semt=ais" alt="hero image"  className='w-100'/>
                </div>
                <div className="col-md-12 col-12 col-lg-6">
                  <div className="">
                      <div className="course-certification mb-3">
                        <h3 className="fs-3 mb-2 text-main-danger text-900">Course Certification</h3>
                        <div className='fs-6 text-secondary' dangerouslySetInnerHTML={{ __html: data.certification}} />
                        <h3 className="fs-3 mb-2 text-main-danger text-900">Who Should Enroll?                        </h3>
                        <p className="fs-6 text-secondary">This course is suitable for individuals with a basic understanding of programming concepts and a keen interest in {data.courseName.split(" ")[0]} development. It is ideal for:
                        </p>
                        <div className='fs-6 text-secondary' dangerouslySetInnerHTML={{ __html: data.courseFor}} />
                      </div>
                      <div className="course-for mb-3">
                        {/* <h3 className="fs-3 mb-2 text-main-danger text-900">Who This Course For</h3>
                        <div className='fs-6 text-secondary' dangerouslySetInnerHTML={{ __html: data.courseFor}} /> */}
                      </div>
                  </div>
                  </div>
            </div>
        </div>
    </section>
  )
}

export default CourseCertificate
