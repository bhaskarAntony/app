import React, { useEffect, useState } from 'react';
import { mernstack } from '../../Data/DataFetcher';
import Loading from '../../Modals/Loading';
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

function MernCourse() {
    const [loading, setLoading] = useState(true);
    const [courseData, setCourseData] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [brocher, setBrocher] = useState(null)

    useEffect(() => {
        mernstack
          .then((data) => {
            setCourseData(data);
            setLoading(false);
            console.log("courses", data);
          })
          .catch((error) => console.error('Error fetching courses:', error));
    }, []);

    useEffect(() => {
      setBrocher(courseData.BrocherLink)
        if (courseData.courseName) {
            document.title = courseData.courseName;
        }
    }, [courseData]);
    console.log(brocher);


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

    if (loading) {
        return <Loading />;
    }

    const { seo, courseName, heroSubtitle, coursePoints, programmingLanguages, BrocherLink, faqs } = courseData;

  

    return (
        <section className='overflow-hidden'>
          <Helmet>
          <title>Mern Stack Course | Mern Stack Developer Course | Mern Stack Training</title>
          <meta name="description" content="Learn Mern Stack Developer Course Enroll for the comprehensive mern stack course at Be-Practical.com to get mern stack training from industry expert." />
          <meta name="keywords" content="Mern Stack Developer Course" />
          <link rel="canonical" href="https://be-practical.com/mern-stack-development-training" />
        </Helmet>
    
          <CourseHero 
            coursename={courseName} 
            coursesubtitle={heroSubtitle} 
            admisionStart={courseData.details.admisionStart} 
            coursePoints={coursePoints} 
            courseData={courseData} 
            brocherLink={BrocherLink} 
            download={openModal} 
            share={handleWhatsappShare}
          />
    
          <Modules courseData={courseData} />
        
          <Languages languages={programmingLanguages} course={courseName} />
          {/* <CountDown date={courseData.details.admisionStart} /> */}
          <CourseCertificate data={courseData} />
          <LandDreamJob />
          <section className="p-3 p-md-5">
          <h1 className="fs-1 fw-bold">Why Choose Be Practical Tech Solutions
          </h1>
            <p className="fs-5">MERN- short for MongoDB, Express.js, React.js and Node.js is an open source JavaScript software stack and is used extensively in mobile and web application development. The MERN Stack is a popularly used framework in the tech industry, which has a high demand for developers that are proficient in this tech stack.By taking the MERN Stack Development nt Training at Be Practical Tech Solutions, learners will acquire the relevant skills and will be able to grab the opportunities in the field of IT or business organizations (such as Information Technology, Banking, Financial Services, and Retail) that use such technologies. Our MERN Stack Developement Course is designed to equip you with practical skills and in-depth knowledge:
            </p>
          
            <p className="fs-5">  world of web development with a game-changing stack? At Be Practical Tech Solutions, we believe in empowering you with the tools to transform your ideas into dynamic web applications. Our comprehensive MERN Stack Developer Course is a gateway to mastering the essentials of modern web development!
            </p>
          </section>
          <div className="row p-3 p-md-5 py-2">
            <div className="col-md-3 mb-2">
              <div className="card shodow p-3 h-100">
                <h1 className="fs-5">Job-Oriented Training</h1>
                <p className="fs-6">Tailored to make you job-ready with real-world skills.</p>
              </div>
            </div>

            <div className="col-md-3 mb-2">
              <div className="card shodow p-3 h-100">
                <h1 className="fs-5">Support and Guidance</h1>
                <p className="fs-6">Dedicated mentorship throughout the course, ensuring you stay on track.</p>
              </div>
            </div>

            <div className="col-md-3 mb-2">
              <div className="card shodow p-3 h-100">
                <h1 className="fs-5">Networking Opportunities:</h1>
                <p className="fs-6">Connect with industry professionals and fellow developers to enhance your career prospects</p>
              </div>
            </div>

            <div className="col-md-3 mb-2">
              <div className="card shodow p-3 h-100">
                <h1 className="fs-5">Placement Assistance</h1>
                <p className="fs-6">Access to our recruitment partners and interview preparation sessions to secure your future as a MERN Stack Developer.</p>
              </div>
            </div>


            <div className="col-md-3 mb-2">
              <div className="card shodow p-3 h-100">
                <h1 className="fs-5">Flexible Learning Modes</h1>
                <p className="fs-6">Choose between ‘online’ or ‘classroom sessions’ to fit your schedule.</p>
              </div>
            </div>


            <div className="col-md-3 mb-2">
              <div className="card shodow p-3 h-100">
                <h1 className="fs-5">Access to Premium Tools</h1>
                <p className="fs-6">Hands-on experience with the latest software and development tools used in the industry.
                </p>
              </div>
            </div>


            <div className="col-md-3 mb-2">
              <div className="card shodow p-3 h-100">
                <h1 className="fs-5">Dedicated Career Support:</h1>
                <p className="fs-6">Resume building, interview coaching, and career counseling to help you stand out from the competition.</p>
              </div>
            </div>
          </div>
          <Companies />
          <div className="row p-3 p-md-5">
            <h1 className="fs-1 text-center fw-bold">Demand Of MERN Stack Developers            </h1>
            <div className="col-md-6 mb-3">
              <div className="card h-100 p-3 shadow ">
                <h1 className="fs-4 fw-bold">34% Surge in job postings between 2020 and 2023</h1>
                <p className="fs-6">Full Stack Developers are in high demand, evidenced by a 34% surge in job postings, particularly in the thriving tech sector in India. With 75% of companies actively seeking Full Stack expertise, startups and enterprises recognize the strategic advantage these professionals bring, especially in the e-commerce sector where 54% prioritize their recruitment. With over 65% of hiring managers expressing a preference for Full Stack development skills, professionals find themselves well-positioned to contribute to India's digital transformation, meeting the evolving needs of the industry. 
                </p>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="card p-3 h-100 shadow">
                <h1 className="fs-4 fw-bold">Empower your Workforce                </h1>
                <p className="fs-6">
                Accelerate your path to becoming a full stack developer with our comprehensive, industry-aligned program. We'll equip you with the in-demand skills, practical experience, and personalized support you need to thrive in the fast-paced tech world.
                Ready to take your web development skills to the next level? Dive into the <b>MERN Stack Developer Course</b> with Be Practical Tech Solutions and start building the future of web technology.
                </p>
              </div>
            </div>

            <div className="card text-center p-3">
              <h1 className="fs-4">Join Us Today!              </h1>
              <p className="fs-5"><b>Get Started Now—</b> Your journey to becoming a MERN Stack pro begins here!
              </p>
           
              <h2 className="fs-2 fw-bold">Get in Touch for a Free Masterclass!</h2>
              <center>
            <button className="btn-danger w-auto m-auto text-white py-2 rounded-4 hero-btn align-items-center gap-2 justify-content-center w-100" onClick={openModal}><span className='fs-5'>Download Syllabus</span> <br /> <small>Free Material <i className="bi bi-file-earmark-arrow-down-fill fs-4"></i></small></button>
            </center>
            </div>
          </div>
          <CourseOffering />
          <Benifits data={courseData} />
          <Adwantages />
          <FaqSection faq={faqs} />
          <Feedback />
          <DownloadModal showModal={showModal} hideModal={closeModal} link={courseData} />
        </section>
    );
}

export default MernCourse;
