import React, { useEffect, useState } from 'react';
import { digitalmarketing, fullstack, javastack } from '../../Data/DataFetcher';
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

function DigitalMarketing() {
    const [loading, setLoading] = useState(true);
    const [courseData, setCourseData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [activeSubCourseIndex, setActiveSubCourseIndex] = useState(null);
    const [activeModuleIndex, setActiveModuleIndex] = useState(null);

    useEffect(() => {
        digitalmarketing
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

    const toggleModuleAccordion = (index) => {
        setActiveModuleIndex(index === activeModuleIndex ? null : index);
    };

    if (loading) {
        return <Loading />;
    }

    const { seo, courseName, heroSubtitle, coursePoints, programmingLanguages, BrocherLink, faqs } = courseData;

    return (
        <section className='overflow-hidden'>
          <Helmet>
          <title>Digital Marketing Courses in Bangalore | Digital Marketing Training Institute</title>
          <meta name="description" content="Want to learn Digital Marketing Courses in Bangalore? Be-Practical is the Digital Marketing training institute with program for all aspect of digital marketing." />
          <meta name="keywords" content="Digital Marketing Courses in Bangalore" />
          <link rel="canonical" href="https://be-practical.com/advanced-digital-marketing-program" />
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
          
          <Modules courseData={courseData}/>
          <Languages languages={programmingLanguages} course={courseName} />
          {/* <CountDown date={courseData.details.admisionStart}/> */}
          <CourseCertificate data={courseData} />
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

export default DigitalMarketing;
