import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Form, Modal } from 'react-bootstrap'
import { toast } from 'react-toastify';
import Loading from '../../Modals/Loading';
import SuccessDialog from '../../Modals/SuccessDialog';
import leadsquared from '../../js/api';
import { Register } from '../../js/register';

function DownloadModal({link, hideModal, showModal}) {
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState("")
    const [isSend, setIsSend] = useState(false)
    // const handleClose = () => setShowModal(false);
 
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        downloadLink:link,
        course: 'MERN', // Default course
      });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        setIsLoading(true);
        e.preventDefault();
        const result = await leadsquared(formData.name,formData.email,formData.phone, formData.course);
        if(result.success){
          const registerResult = await Register(formData);

          if(registerResult.status){
            setIsLoading(false)
            setSuccess(true)
            setIsSend(true)
            hideModal()
            setMessage("registration successful, browcher has been sent to registered email.")
          }else{
              // Handle error
              setIsLoading(false);
              setSuccess(true);
              setIsSend(false);
              setMessage("Brochure registration failed");
              alert('Brochure registration failed');
              toast.error("registration failed");
          }
        }else{
          setIsLoading(false);
          setSuccess(true);
          setIsSend(false);
          setMessage("Brochure registration failed")
          console.log(result.data);
        }
      };
      if(isLoading){
        return <Loading image="https://i.pinimg.com/originals/e4/07/8e/e4078ee793884101e4620078f979d2dc.gif"/>
      }
      
  return (
    <div>
         <Modal show={showModal} onHide={hideModal}>
              <Modal.Header closeButton className='border-0'>
                {/* <Modal.Title className='fs-5 fw-bold'>Download free Browcher</Modal.Title> */}
              </Modal.Header>
              <Modal.Body>
                <h1 className="fs-2">Please enter your Details to get the Program Brochure</h1>
                <h6 className="fs-5">This Brochure contains all the details from Program Curriculum to Placement Assistance.</h6>
                <Form>  
                <div className="r-card  bg-white rounded-3">
            <form className='form mt-3'>
              <div className="form-group">
              <label htmlFor="nameInput">Student Name <span className="text-danger">*</span></label>
                  <input
                    type="text"
                    className="form-control"
                    id="nameInput"
                    name="name"
                    // placeholder="Enter your name"
                    onChange={handleChange}
                    required
                  />
                
              </div>
              <div className="form-group mt-3">
                <label htmlFor="emailInput">Email address<span className="text-danger">*</span></label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailInput"
                    name="email"
                    // placeholder="name@example.com"
                    onChange={handleChange}
                    required
                  />
                
              </div>
              <div className="form-group mt-3">
                <label htmlFor="phoneInput">Phone number<span className="text-danger">*</span></label>
                  <input
                    type="number"
                    className="form-control"
                    id="phoneInput"
                    minLength={10}
                    maxLength={13}
                    name="phone"
                    // placeholder="+91 000-0000-000"
                    onChange={handleChange}
                    required
                  />
                
              </div>
              <div className="form-group form-group-last mt-3">
              <label htmlFor="phoneInput">Courses<span className="text-danger">*</span></label>
                <select className="form-control p-3" name="course" onChange={handleChange}>
                  <option value="" selected disabled></option>
                <option value="MERN Fullstack">MERN Fullstack</option>
                              <option value="Python Fullstack">Python Fullstack</option>
                              <option value="Java Fullstack">Java Fullstack</option>
                              <option value="Data Science">Data Science</option>
                              <option value='digital marketing'>Digital Marketing</option>
                              <option value="Cloud Computing">Cloud Computing</option>
                </select>
              </div>
              <div className="form-group mt-3">
                <button type="button" className="btn-danger w-100" onClick={handleSubmit}>
                  Download Brochure
                </button>
              </div>
            </form>
          </div>
                </Form>
              </Modal.Body>
            </Modal>
            <SuccessDialog show={success} onHide={()=>setSuccess(false)} msg={message} register={isSend} />
    </div>
  )
}

export default DownloadModal