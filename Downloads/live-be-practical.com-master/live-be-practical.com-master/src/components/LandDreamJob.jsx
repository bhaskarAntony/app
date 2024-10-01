import React from 'react'
import ApplyNow from '../Extra/ApplyNow'
import happy_student from '../images/happy-student.avif'
import { useState } from 'react';
import DownloadModal from './Brocher/DownloadModal';

function LandDreamJob() {
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const [showModal, setShowModal] = useState(false);
  return (
   <div className='px-lg-5  p-3 py-5 container-fluid  bg-texture text-center' style={{backgroundColor:"#0c0c0c"}}>
    
    <div>
      <h1 className="fs-1 text-main-danger w-100 text-900 mb-4 mt-5">
      <span className="text-white">Download the Brochure to 
      </span>   Access Syllabus & Course Fee Details
      </h1>
      <p className="fs-5 text-secondary">At Be Practical Tech Solutions “We are the creators of coding legends”
      </p>
    <div className="mb-5">
   <div className="row">
    <div className="col-md-3 m-auto">
    <button className="btn bg-white text-dark py-2 rounded-4 hero-btn align-items-center gap-2 justify-content-center w-100" onClick={openModal}><span className='fs-5'>Download Syllabus</span> <br /> <small>Free Material <i className="bi bi-file-earmark-arrow-down-fill fs-4"></i></small></button>
    </div>
   </div>
    </div>
      </div>
    
      <DownloadModal showModal={showModal} hideModal={closeModal} />
   </div>
  )
}

export default LandDreamJob
