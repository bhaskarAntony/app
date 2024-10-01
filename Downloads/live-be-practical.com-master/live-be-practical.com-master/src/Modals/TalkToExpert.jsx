import axios from 'axios';
import React, { useState } from 'react';
import { Form, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';
import SuccessDialog from './SuccessDialog';
import Loading from './Loading';
import leadsquared from '../js/api';
import { Register } from '../js/register';

function TalkToExpert(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [isSend, setIsSend] = useState(false);

  const handleClose = () => setShowModal(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '', // Default course set to empty
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const result = await leadsquared(formData.name, formData.email, formData.phone, formData.course);
    setIsLoading(false);

    if (result.success) {
    const register = await Register(formData);
    if(register.status){
      setShowModal(true);
      setIsSend(true);
      setMessage("Thank you. we will contact you soon");
    }else{
      setShowModal(true);
      setIsSend(false);
      setMessage("Request failed, try again later");
    }
    } else {
      setShowModal(true);
      setIsSend(false);
      setMessage("Request failed, try again later");
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Modal show={props.showModal} onHide={props.hideModal}>
        <Modal.Header closeButton className='border-0'></Modal.Header>
        <Modal.Body>
          <h1 className="fs-2">Need help? Our Counselors are <span className="text-danger">LIVE</span> right now!</h1>
          <h6 className="fs-5">Connect with our expert counselors for guidance on program curriculum, application process, and placement assistance.</h6>
          <Form >
            <div className="r-card bg-white rounded-3">
              <div className='form mt-3'>
                <div className="form-group">
                  <label htmlFor="  nameInput">Student Name <span className="text-danger">*</span></label>
                  <input
                    type="text"
                    className="form-control"
                    id="nameInput"
                    name="name"
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
                    name="phone"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group form-group-last mt-3">
                  <label htmlFor="courseInput">What are you currently doing?<span className="text-danger">*</span></label>
                  <select className="form-control p-3" name="course" onChange={handleChange} required>
                    <option value="" disabled selected>Select your current status</option>
                    <option value="MERN Fullstack">Working IT Domain</option>
                    <option value="Python Fullstack">Working in Other Domain</option>
                    <option value="Java Fullstack">Post Graduate Student</option>
                    <option value="Data Science">Undergrad Student (Still Studying)</option>
                    <option value="Digital Marketing">Fresher with Zero Experience</option>
                    <option value="Cloud Computing">Looking for Jobs</option>
                  </select>
                </div>
                <div className="form-group mt-3">
                  <button type="button" className="btn-danger w-100" onClick={handleSubmit}>Apply Now</button>
                </div>
              </div>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
      <SuccessDialog show={showModal} onHide={handleClose} msg={message} register={isSend} />
    </div>
  );
}

export default TalkToExpert;
