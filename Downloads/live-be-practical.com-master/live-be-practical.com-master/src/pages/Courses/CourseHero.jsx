import React, { useState } from 'react'
import DownloadModal from '../../components/Brocher/DownloadModal';
import BookDemoCard from '../../components/BookDemoCard';
import { Link } from 'react-router-dom';
import { formatDate } from '../../js/utils';

function CourseHero({coursename, coursesubtitle, admisionStart, coursePoints, courseData, BrocherLink, download ,share }) {
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);
    const [showModal, setShowModal] = useState(false);
  return (
    <div>
           <div className="course-hero container-fluid p-0 py-3 bg-texture bg-gray2 border-b">
            <div className="row align-items-center">
              <div className="col-12 col-md-7 col-lg-7">
                <div className="course-hero-left p-lg-5 p-3">
                  <p className="text-main-danger fs-5 text-900">100% Placement Assistance</p>
                  <h1 className="display-3 text-900 text-white">{coursename}</h1>
                  {/* <p className="fs-5 text-secondary my-4">{coursesubtitle}</p> */}
                  <div className="course-ratings mt-3 d-flex align-items-center gap-2 flex-wrap">
                    <p className="fs-6 text-white"><small className="p-2 bg-white rounded-1 text-black">rating <i className="bi bi-star-half text-yellow"></i><b> 4.5</b></small></p>
                    <p className="fs-6 text-white">
                    {/* <small className="p-2 bg-white rounded-1 text-black">
                      Batch Start: <b>{formatDate(admisionStart)}</b>
                    </small> */}
                  </p>
                    <p className="fs-6 text-white"><small className="p-2 bg-white rounded-1 text-black">Mode: <b>Online and Offline both</b></small></p>
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
              <button className="share-btn whatsapp-share" onClick={share}><i className='bi bi-whatsapp'></i>Whatsapp</button>
            </div>
          </div>
          <DownloadModal showModal={showModal} hideModal={closeModal} link={BrocherLink} />
    </div>
  )
}

export default CourseHero