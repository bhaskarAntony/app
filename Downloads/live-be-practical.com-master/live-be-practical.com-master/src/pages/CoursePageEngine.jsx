import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import Loading from '../Modals/Loading';
import Companies from '../components/companies/Companies';
import Adwantages from '../components/advantages/Adwantages';
import YoutubeVideos from '../components/YoutubeVideos';
import Feedback from '../components/Feedback';
import LandDreamJob from '../components/LandDreamJob';
import FaqSection from '../components/FaqSection';
import Module from '../components/Module';
import Languages from '../components/Languages';
import CourseCard from '../components/CourseCard';
import CourseCertificate from '../components/CourseCertificate';
import BookDemoCard from '../components/BookDemoCard';
import CourseOffering from '../components/Offering/CourseOffering';
import Benifits from '../components/Benifits/Benifits';
import DownloadModal from '../components/Brocher/DownloadModal';
import { useCourseContext } from '../context/CourseContext';

function CoursePageEngine() {
  const { selectedSubCourseId, selectedCourseId } = useCourseContext();
  const [courseData, setCourseData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fetchCourseByURL = async (url) => {
      try {
        const canonicalUrl = url.endsWith('/') ? url.slice(1, -1) : url.slice(1); // Remove leading slash

        const response = await axios.get('https://api.be-practical.com/api/allcourses');
        const courses = response.data.courses;

        let foundCourse = null;
        courses.some((course) => {
          if (course.seo.canonical_url === canonicalUrl) {
            foundCourse = course;
            return true;
          } else {
            const subCourse = course.subCourses.find((sub) => sub.seo.canonical_url === canonicalUrl);
            if (subCourse) {
              foundCourse = subCourse;
              return true;
            }
          }
          return false;
        });

        setCourseData(foundCourse);
      } catch (error) {
        console.error('Error fetching course data:', error);
      }
    };

    fetchCourseByURL(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    if (courseData) {
      document.title = courseData.courseName;
    }
  }, [courseData]);

  if (!courseData) {
    return <Loading />;
  }

  const { seo, courseName, heroSubtitle, coursePoints, modules, programmingLanguages, BrocherLink, faqs } = courseData;

  const messageContent = `
    *Hello!*
    _This message is from the software development training program._
    *${courseName}*
    *${seo.description}*
    *New Batch Starting:* ${courseData.details.admisionStart}
    
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

  const handleWhatsappShare = () => {
    const encodedMessage = encodeURIComponent(messageContent);
    window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <section className='overflow-hidden'>
      <Helmet>
        <title>{seo?.title}</title>
        <meta name="description" content={seo?.description} />
      </Helmet>

      <div className="course-hero container-fluid p-0 py-3 bg-texture bg-gray2 border-b">
        <div className="row align-items-center">
          <div className="col-12 col-md-7 col-lg-7">
            <div className="course-hero-left p-lg-5 p-3">
              <p className="text-main-danger fs-5 text-900">100% Placement Course</p>
              <h1 className="display-3 text-900 text-white">{courseName}</h1>
              <p className="fs-5 text-secondary my-4">{heroSubtitle}</p>
              <div className="course-ratings mt-3 d-flex align-items-center gap-2 flex-wrap">
                <p className="fs-6 text-white"><small className="p-2 bg-white rounded-1 text-black">rating <i className="bi bi-star-half text-yellow"></i><b> 4.5</b></small></p>
                <p className="fs-6 text-white"><small className="p-2 bg-white rounded-1 text-black">Batch Start: <b>{courseData.details.admisionStart}</b></small></p>
                <p className="fs-6 text-white"><small className="p-2 bg-white rounded-1 text-black">Mode: <b>Online & Offline</b></small></p>
              </div>
              <div className="course-points">
                <div className='fs-6 text-white' dangerouslySetInnerHTML={{ __html: coursePoints }} />
              </div>
              <div className="row align-items-center mt-5">
                <div className="col-12 col-md-7 mb-2">
                  <Link to={'/book-demo'}>
                    <button className=" btn-danger px-5 py-3 rounded-4 hero-btn  align-items-center gap-2 justify-content-center w-100"><span className='fs-5'>Register Now</span> <br /> <small>Get 10% Discount On This Course</small></button>
                  </Link>
                </div>
                <div className="col-12 col-md-5 mb-2">
                  <button className="btn  bg-white text-dark py-2 rounded-4 hero-btn  align-items-center gap-2 justify-content-center w-100" onClick={openModal}><span className='fs-5' >Download Syllabus</span> <br /> <small>Free Material <i className="bi bi-file-earmark-arrow-down-fill fs-4"></i></small></button>
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
          <span className="fs-4 text-white text-center w-100">Share Course On</span>
        </div>
        <div className="share-course d-flex gap-3 py-3 flex-wrap align-items-center justify-content-center">
          <button className="share-btn whatsapp-share" onClick={handleWhatsappShare}><i className='bi bi-whatsapp'></i>Whatsapp</button>
        </div>
      </div>

      <Module modules={modules} name={courseName} description={seo.description} />
      <Languages languages={programmingLanguages} course={courseName} />
      <CourseCertificate data={courseData} />
      <LandDreamJob />
      <Companies />
      <CourseOffering />
      <Benifits data={courseData} />
      <Adwantages />
      <YoutubeVideos />
      <FaqSection faq={faqs} />
      <Feedback />
      <DownloadModal showModal={showModal} hideModal={closeModal} link={BrocherLink} />
    </section>
  );
}

export default CoursePageEngine;
