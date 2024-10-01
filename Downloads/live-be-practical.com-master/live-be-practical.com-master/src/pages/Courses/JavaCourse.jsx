import React, { useEffect, useState } from 'react';
import { fullstack, javastack } from '../../Data/DataFetcher';
import Loading from '../../Modals/Loading';
import BookDemoCard from '../../components/BookDemoCard';
import Languages from '../../components/Languages';
import CourseCertificate from '../../components/CourseCertificate';
import LandDreamJob from '../../components/LandDreamJob';
import Companies from '../../components/companies/Companies';
import CourseOffering from '../../components/Offering/CourseOffering';
import Benifits from '../../components/Benifits/Benifits';
import Adwantages from '../../components/advantages/Adwantages';
import FaqSection from '../../components/FaqSection';
import Feedback from '../../components/Feedback';
import DownloadModal from '../../components/Brocher/DownloadModal';
import { formatDate } from '../../js/utils';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import CourseHero from './CourseHero';
import Modules from './Modules';
import CountDown from '../../Extra/countdown/CountDown';
import { Accordion } from 'react-bootstrap';
import StudentsPlaced from '../../components/YoutubeVideos';

function JavaCourse() {
    const [loading, setLoading] = useState(true);
    const [courseData, setCourseData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [activeSubCourseIndex, setActiveSubCourseIndex] = useState(null);
    const [activeModuleIndex, setActiveModuleIndex] = useState(null);

    
   

    const toggleModuleAccordion = (index) => {
        setActiveModuleIndex(index === activeModuleIndex ? null : index);
    };

    useEffect(() => {
        javastack
          .then((data) => {
            setCourseData(data);
            setLoading(false);
            console.log("courses", data);
          })
          .catch((error) => console.error('Error fetching courses:', error));
    }, []);

    useEffect(() => {
        if (courseData.courseName) {
            document.title = courseData.courseName;
        }
    }, [courseData]);

    const handleWhatsappShare = () => {
        const messageContent = `
        *Hello!*
        _This message is from the software development training program._
        *${courseData.courseName}*
        *${courseData.seo?.description}*
        *New Batch Starting:* ${formatDate(courseData.details?.admisionStart)}

        [Click Here to Explore This Course](https://be-practical.com)

        *You may also like these courses:*
        - Mern Fullstack Development
        - Python Fullstack Development
        - Java Fullstack Development
        - Cloud Computing
        - Digital Marketing
        - Job Oriented Courses
        - ...and more

        [Explore More Courses](https://be-practical.com)

        _Thank You_
        `;
        const encodedMessage = encodeURIComponent(messageContent);
        window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
    };

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const toggleSubCourseAccordion = (index) => {
        setActiveSubCourseIndex(index === activeSubCourseIndex ? null : index);
    };

    

    if (loading) {
        return <Loading />;
    }

    const { seo, courseName, heroSubtitle, coursePoints, programmingLanguages, BrocherLink, faqs } = courseData;

    return (
        <section className='overflow-hidden'>
          <Helmet>
          <title>Java Full Stack Developer in Bangalore | Full Stack Java Developer Course</title>
          <meta name="description" content="Be-Practical.com is Best Institute for Java Full Stack Developer in Bangalore. Full Stack Java Developer Course taught by industry experts. Enroll now." />
          <meta name="keywords" content="Java Full Stack Developer in Bangalore" />
          <link rel="canonical" href="https://be-practical.com/java-fullstack-developer-course" />
        </Helmet>
          {/* Hero section */}
          {/* <div className="course-hero container-fluid p-0 py-3 bg-texture bg-gray2 border-b">
            <div className="row align-items-center">
              <div className="col-12 col-md-7 col-lg-7">
                <div className="course-hero-left p-lg-5 p-3">
                  <p className="text-main-danger fs-5 text-900">100% Placement Course</p>
                  <h1 className="display-3 text-900 text-white">{courseName}</h1>
                  <p className="fs-5 text-secondary my-4">{heroSubtitle}</p>
                  <div className="course-ratings mt-3 d-flex align-items-center gap-2 flex-wrap">
                    <p className="fs-6 text-white"><small className="p-2 bg-white rounded-1 text-black">rating <i className="bi bi-star-half text-yellow"></i><b> 4.5</b></small></p>
                    <p className="fs-6 text-white">
                    <small className="p-2 bg-white rounded-1 text-black">
                      Batch Start: <b>{formatDate(courseData.details?.admisionStart)}</b>
                    </small>
                  </p>
                    <p className="fs-6 text-white"><small className="p-2 bg-white rounded-1 text-black">Mode: <b>Online & Offline</b></small></p>
                  </div>
                  <div className="course-points">
                    <div className='fs-6 text-white' dangerouslySetInnerHTML={{ __html: coursePoints }} />
                  </div>
                  <div className="row align-items-center mt-5">
                    <div className="col-12 col-md-7 mb-2">
                      <Link to={'/book-demo'}>
                        <button className="btn-danger px-5 py-3 rounded-4 hero-btn align-items-center gap-2 justify-content-center w-100"><span className='fs-5'>Register Now</span> <br /> <small>Get 10% Discount On This Course</small></button>
                      </Link>
                    </div>
                    <div className="col-12 col-md-5 mb-2">
                      <button className="btn bg-white text-dark py-2 rounded-4 hero-btn align-items-center gap-2 justify-content-center w-100" onClick={openModal}><span className='fs-5'>Download Syllabus</span> <br /> <small>Free Material <i className="bi bi-file-earmark-arrow-down-fill fs-4"></i></small></button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-5 col-lg-5">
                <div className="course-hero-right p-lg-5 p-3">
                  <BookDemoCard />
                </div>
              </div>
            </div>
            <div className="text-center">
              <span className="fs-4 text-white text-center w-100">Share Course On.</span>
            </div>
            <div className="share-course d-flex gap-3 py-3 flex-wrap align-items-center justify-content-center">
              <button className="share-btn whatsapp-share" onClick={handleWhatsappShare}><i className='bi bi-whatsapp'></i>Whatsapp</button>
            </div>
          </div> */}

    <CourseHero coursename={courseName} coursesubtitle={heroSubtitle} admisionStart={courseData.details.admisionStart} coursePoints={coursePoints} courseData={courseData} brocherLink={BrocherLink} download={openModal} share={handleWhatsappShare}/>
    
    
          {/* Additional sections */}
          {/* <div className="modules p-lg-5 p-md-3 p-2">
            <h3 className="fs-1 text-900">{courseData.courseName} <span className="text-main-danger">Program Curriculum</span></h3>
        
            <p className="fs-md-5 fs-6 text-secondary" dangerouslySetInnerHTML={{ __html: courseData.courseDescription }}></p>
            <div className="container mt-4">
              {courseData.subCourses?.length > 0 ? (
                courseData.subCourses.map((subCourse, subCourseIndex) => (
                  <div className="card p-3 mt-3" key={subCourseIndex}>
                    <div className="faq-question d-flex align-items-center" onClick={() => toggleSubCourseAccordion(subCourseIndex)}>
                      <span className="faq-question-text text-black">
                        <span className="fw-bold text-main-danger">{subCourse.courseName}</span>
                      </span>
                      <div className="faq-icon ms-auto">
                        {activeSubCourseIndex === subCourseIndex ? (
                          <i className="bi bi-caret-up-fill"></i>
                        ) : (
                          <i className="bi bi-caret-down-fill"></i>
                        )}
                      </div>
                    </div>
                    {activeSubCourseIndex === subCourseIndex && (
                      <div className="mt-3">
                        {subCourse.modules?.map((item, index) => (
                          <div className={`faq-item ${activeModuleIndex === index ? 'active' : ''} rounded-4 mb-3`} key={index}>
                            <div className="faq-question d-flex align-items-center" onClick={() => toggleModuleAccordion(index)}>
                              <span className="count p-2 text-900 fs-5 text-dark mx-3">{index + 1}</span>
                              <span className="faq-question-text text-black">
                                <span className="fw-bold text-main-danger">Module {index + 1}:</span> 
                                <span className="text-dark text-900">{item.title}</span>
                              </span>
                              <div className="faq-icon">
                                {activeModuleIndex === index ? (
                                  <i className="bi bi-caret-up-fill"></i>
                                ) : (
                                  <i className="bi bi-caret-down-fill"></i>
                                )}
                              </div>
                            </div>
                            {activeModuleIndex === index && (
                              <div className="faq-answer">
                                <h5 className="mt-4 text-main-danger text-decoration-underline">About</h5>
                                <p className="fs-5 text-dark">{item.title}</p>
                                <h5 className="mt-4 text-main-danger text-decoration-underline">Topics Covered</h5>
                                <p className="fs-6 text-dark">{item.description}</p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <p>No subcourses available</p>
              )}
            </div>
          </div> */}
          
          {/* <Modules courseData={courseData}/> */}
          <div className="java container p-3">
            <h1 className="fs-1 fw-bold my-4">Java Training Program <span className="text-main-danger">Curriculum Breakdown</span>
            </h1>
            <p className='fs-6'>Our curriculum is meticulously crafted to provide a hands-on learning experience, ensuring you gain practical skills that are highly valued in the industry. You will learn how to build dynamic, responsive web applications from scratch, mastering technologies like HTML, CSS, JavaScript, React, Java, Spring Boot, SQL, and more. But we don’t just stop at technical skills; we also focus on essential soft skills and real-world project experience to make sure you’re fully prepared to excel in the workplace.
            </p>
            <p className="fs-6">At BePractical, we believe in learning by doing, which is why our course includes numerous projects, live coding sessions, and interactive workshops led by industry experts. Here’s what you will learn in 6 months-  </p>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="text-dark fw-bold"><h1 className="fs-4 m-0"> <span className="text-main-danger">Month 1: </span>Introduction to Web Development & Java Programming
                </h1></Accordion.Header>
                <Accordion.Body>
                    <p className="fs-5">Kickstart your journey with a solid foundation in web development and Java programming:
                    </p>
                    <ul className="fs-6">
                      <li>Kickstart your journey with a solid foundation in web development and Java programming:
                      </li>
                      <li>Java Basics: Dive into Java programming, understanding syntax, variables, data types, and basic operations.
                      </li>
                      <li>Java IDEs: Get hands-on experience with Integrated Development Environments (IDEs) like Eclipse and IntelliJ.</li>
                    </ul>
                    </Accordion.Body>
                    </Accordion.Item >

                    <Accordion.Item eventKey="1">
                <Accordion.Header className="text-dark fw-bold"><h1 className="fs-4 m-0"> <span className="text-main-danger">Month 2: </span>JavaScript & Advanced Java Programming
                </h1></Accordion.Header>
                <Accordion.Body>
                    <p className="fs-5">Strengthen your programming skills with JavaScript and advanced Java concepts:

                    </p>
                    <ul className="fs-6">
                      <li>JavaScript Essentials: Learn how to make web pages interactive with JavaScript basics, including DOM manipulation and event handling
                      </li>
                      <li>Advanced Java: Explore object-oriented programming (OOP), exception handling, and Java collections.
                      </li>
                      <li>Version Control with Git: Master the essentials of Git and GitHub for version control and collaborative coding.
                      </li>
                    </ul>
                    </Accordion.Body>
                    </Accordion.Item >

                    <Accordion.Item eventKey="2">
                <Accordion.Header className="text-dark fw-bold"><h1 className="fs-4 m-0"> <span className="text-main-danger">Month 3: </span>Front-End Frameworks & Tools

                </h1></Accordion.Header>
                <Accordion.Body>
                    <p className="fs-5">Develop professional-grade user interfaces using popular frameworks and tools:


                    </p>
                    <ul className="fs-6">
                      <li>React.js: Build dynamic user interfaces with React.js, a powerful JavaScript library for building UI components.
                      </li>
                      <li>Responsive Design with Bootstrap: Create mobile-friendly web pages that look great on any device.
                      </li>
                      {/* <li>Responsive Design with Bootstrap: Create mobile-friendly web pages that look great on any device.
                      </li> */}
                    </ul>
                    </Accordion.Body>
                    </Accordion.Item >
                    <Accordion.Item eventKey="3">
                <Accordion.Header className="text-dark fw-bold"><h1 className="fs-4 m-0"> <span className="text-main-danger">Month 4: </span>Back-End Development with Java

                </h1></Accordion.Header>
                <Accordion.Body>
                    <p className="fs-5">Learn to build robust server-side applications using Java:



                    </p>
                    <ul className="fs-6">
                      <li>Java Servlets & JSP: Discover how to build dynamic web applications using Java Servlets and JavaServer Pages (JSP).

                      </li>
                      <li>Spring Framework: Get to grips with the Spring Framework, focusing on Spring Boot for creating stand-alone, production-grade Spring applications.

                      </li>
                      <li>APIs and RESTful Services: Learn to design, build, and integrate RESTful APIs with Java.
                      </li>
                    </ul>
                    </Accordion.Body>
                    </Accordion.Item >
                    <Accordion.Item eventKey="4">
                <Accordion.Header className="text-dark fw-bold"><h1 className="fs-4 m-0"> <span className="text-main-danger">Month 5: </span>Database Management & Full Stack Integration

                </h1></Accordion.Header>
                <Accordion.Body>
                    <p className="fs-5">Integrate front-end and back-end seamlessly with databases and full-stack tools:
                 </p>
                    <ul className="fs-6">
                      <li>Database Concepts & SQL: Understand relational databases, SQL, and JDBC for Java-based database interaction.

                      </li>
                      <li>NoSQL with MongoDB: Introduction to NoSQL databases and working with MongoDB.


                      </li>
                      <li>Full Stack Integration: Combine your front-end and back-end knowledge to develop full-stack applications
                      </li>
                    </ul>
                    </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="5">
                <Accordion.Header className="text-dark fw-bold"><h1 className="fs-4 m-0"> <span className="text-main-danger">Month 6: </span>DevOps, Testing, & Deployment

                </h1></Accordion.Header>
                <Accordion.Body>
                    <p className="fs-5">Prepare for real-world scenarios with DevOps practices, testing, and deployment:

                 </p>
                    <ul className="fs-6">
                      <li>DevOps Fundamentals: Learn the principles of DevOps and automation with tools like Jenkins and Docker.

                      </li>
                      <li>Testing & Debugging: Master unit testing, integration testing, and debugging techniques to ensure code quality.



                      </li>
                      <li>Cloud Deployment: Get hands-on experience deploying your applications to cloud platforms like AWS and Azure. 
                      </li>
                    </ul>
                    </Accordion.Body>
                    </Accordion.Item >
            </Accordion>
          <center className="mt-4">
          <button className="btn-danger w-auto m-auto text-white py-2 rounded-4 hero-btn align-items-center gap-2 justify-content-center w-100" onClick={openModal}><span className='fs-5'>Download Syllabus</span> <br /> <small>Free Material <i className="bi bi-file-earmark-arrow-down-fill fs-4"></i></small></button>
          </center>
          </div>

        
          <Languages languages={programmingLanguages} course={courseName} />
          {/* <CountDown date={courseData.details.admisionStart}/> */}
       
          <CourseCertificate data={courseData} />
          <StudentsPlaced/>
          <section className="p-3 p-md-5">
            <h1 className="fs-1 fw-bold">Best Java Full Stack Developer Course with Placement in Bangalore            </h1>
            <p className="fs-5">
            In a world driven by technology, being a specialist is not enough—you need to be versatile. Be Practical Tech Solutions’ Full Stack Java Developer Course is your path to becoming a highly sought-after Java developer with expertise across the entire tech stack.
            </p>
            <p className="fs-5">
            Are you ready to turn your passion for coding into a high-flying career? At Be Practical Tech Solutions, our 6-month Java Full Stack Development Course is your ticket to mastering the art of web development.
            </p>

            <center>
            <button className="btn-danger w-auto m-auto text-white py-2 rounded-4 hero-btn align-items-center gap-2 justify-content-center w-100" onClick={openModal}><span className='fs-5'>Download Syllabus</span> <br /> <small>Free Material <i className="bi bi-file-earmark-arrow-down-fill fs-4"></i></small></button>
            </center>
          </section>
          <LandDreamJob />
          <Companies />
          <CourseOffering />
          <Benifits data={courseData} />
          <Adwantages />
          <FaqSection faq={faqs} />
          <Feedback />
          <DownloadModal showModal={showModal} hideModal={closeModal} link={BrocherLink} />
        </section>
    );
}

export default JavaCourse;
