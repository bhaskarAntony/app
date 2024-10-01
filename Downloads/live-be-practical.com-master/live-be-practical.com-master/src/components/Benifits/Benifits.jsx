import React, { useState } from 'react'
import './style.css'
import DownloadModal from '../Brocher/DownloadModal';

function Benifits(props) {
    const [showModal, setShowModal] = useState(false);
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);
  return (
    <section className='py-5 container'>
        <h1 className="text-center fs-1 mb-2 text-900" data-aos="fade-up">Benefits Of <span className="text-main-danger">Technology</span></h1>
        <div className='fs-6 mb-4 text-justify' dangerouslySetInnerHTML={{ __html: props.data.Benifits}} />

        <center>
            <button className="btn-danger w-auto m-auto text-white py-2 rounded-4 hero-btn align-items-center gap-2 justify-content-center w-100" onClick={openModal}><span className='fs-5'>Download Syllabus</span> <br /> <small>Free Material <i className="bi bi-file-earmark-arrow-down-fill fs-4"></i></small></button>
            </center>
        <div className="row">
            <div className="col-12 col-sm-12 col-md-12 p-0 m-0 bg-blue-light p-4">
                <div className="designation w-100 p-0 benifits-card overflow-hidden d-flex flex-column justify-content-between overflow-hidden">
                <div className="benifits-heading w-100 bg-dark text-center p-2">
                        <span className="fs-4 text-white">Designation</span>
                    </div>
              <div className=" p-2">
               
              <div className='fs-5 ul' dangerouslySetInnerHTML={{ __html: props.data.Designation}} />
              </div>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 m-0 m-0 bg-blue-light p-4">
                <div className="salary w-100 p-0 benifits-card h-100  d-flex flex-column justify-content-between overflow-hidden">
                    <div className="benifits-heading w-100 bg-dark p-2 text-center">
                        <span className="fs-4 text-white">Annual Salary</span>
                    </div>
                    <img src="d-flex flex-column justify-content-between overflow-hidden" alt="" className="w-100 rounded" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY-1oR8UnXW8CYzhP-kh33KUoCJQHvzdl4GQ&s" alt="" className="w-100 salary-image" />
               <div className=" p-2">
               <div className='fs-5' dangerouslySetInnerHTML={{ __html: props.data.AnnualSalary}} />
               </div>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 p-0 m-0 bg-blue-light p-4">
                <div className="enifits-companies w-100 benifits-card h-100 p-0 overflow-hidden m-0">
                <div className="benifits-heading w-100 bg-dark p-2 text-center d-flex flex-column justify-content-between p-0">
                        <span className="fs-4 text-white">Leading Global Companies Seeking {props.data.courseName.split(" ")[0]} Developers Globally</span>
                    </div>
                 <div className=" p-2">
                 <img src="https://bepractical.s3.us-east-2.amazonaws.com/company2.png" alt="companies" className="w-100" />
                 </div>
                </div>
            </div>
        </div>
        <DownloadModal showModal={showModal} hideModal={closeModal}  />
    </section>
  )
}

export default Benifits
