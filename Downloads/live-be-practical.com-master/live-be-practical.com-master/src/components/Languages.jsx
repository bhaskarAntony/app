import React, { useEffect } from 'react';
import '../styles/languages.css';
import AOS from 'aos';

function Languages({languages, course}) {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  return (
    <section className='languages container-fluid p-3 p-md-5 m-0'>
        <h3 className="fs-1 text-dark text-900" data-aos="fade-up">Master These Technologies At Be Practical Tech Solutions- Best Institute for 
        <span className="text-main-danger">
          Java Full Stack Developer Course in Bangalore</span></h3>
          <p className="fs-4 text-dark">
          Our course covers everything from the basics to advanced concepts, including:
          </p>
          {
            course==='Java Full Stack Development Courses'?(
              <div className="lang">
                <ul className='row'>
                  <div className="col-md-3 mb-3">
                  <li>
                    <h6 className="fs-5 fw-bold">Java Programming Fundamentals</h6>
                    <p className="fs-6">Master Java syntax, object-oriented programming, and core principles.</p>
                  </li>
                  </div>
                  <div className="col-md-3 mb-3">
                  <li>
                    <h6 className="fs-5 fw-bold">Front-End Development</h6>
                    <p className="fs-6">Learn HTML, CSS, JavaScript, and frameworks like Angular or React.
                    </p>
                  </li>
                  </div>
                  <div className="col-md-3 mb-3">
                  <li>
                    <h6 className="fs-5 fw-bold">Back-End Development</h6>
                    <p className="fs-6">Gain expertise in server-side technologies using Java Spring Boot.
                    </p>
                  </li>
                  </div>
                  <div className="col-md-3 mb-3">
                  <li>
                    <h6 className="fs-5 fw-bold">Database Management</h6>
                    <p className="fs-6"> Understand relational databases, SQL, and integration techniques.
                    </p>
                  </li>
                  </div>
                  <div className="col-md-3 mb-3">
                  <li>
                    <h6 className="fs-5 fw-bold">Full Stack Integration</h6>
                    <p className="fs-6"> Build end-to-end applications and integrate front-end with back-end systems.
                    </p>
                  </li>
                  </div>                  
                
                
                 
                 
                </ul>
              </div>
            ):(null)
          }
      <div className="languages-items">
        <div className="row">
          {languages.map((item, index) => (
            <div className="col-6 col-md-2  m-0 p-1 mb-2" key={index}>
              <div className="language-card  h-100 d-flex flex-column justify-content-between" data-aos="zoom-in">
                <div className="language-card-header">
                  <img src={item.image} alt="technology" className='w-100' />
                </div>
                <div className="language-card-body">
                  <h4 className='text-dark text-900 fs-5'>{item.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Languages;
