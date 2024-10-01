import React, { useState } from 'react';
// import { registerLead } from '../services/registrationService';
import SuccessDialog from '../Modals/SuccessDialog';
import Loading from '../Modals/Loading';
import leadsquared from '../js/api';
import { Register } from '../js/register';

function BookDemoCard() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
  });
  const [loading, setLoading] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const result = await leadsquared(formData.name, formData.email, formData.phone, formData.course);

    setLoading(false);
    if (result.success) {
      const registerResult = await Register(formData);
      if(registerResult.status){
        setMessage('Registration is successful');
        setError(true);
      }else{
        setMessage(`Registration error: ${result.error}`);
        setError(false);
      }
   
    } else {
      setMessage(`Registration error: ${result.error}`);
      setError(false);
    }
    setShowSuccessDialog(true);
  };

  return (
    <div>
      <div className="r-card p-3 p-md-4 bg-white rounded-1">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group mt-3">
            <label htmlFor="nameInput">Student Name</label>
            <input
              type="text"
              className="form-control"
              id="nameInput"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="emailInput">Email address</label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="phoneInput">Phone number</label>
            <input
              type="number"
              className="form-control"
              id="phoneInput"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group form-group-last mt-3">
            <label htmlFor="courseSelect">Choose Course</label>
            <select
              className="form-control p-3"
              id="courseSelect"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select a course
              </option>
              <option value="MERN Fullstack">MERN Fullstack</option>
              <option value="Python Fullstack">Python Fullstack</option>
              <option value="Java Fullstack">Java Fullstack</option>
              <option value="Data Science">Data Science</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Cloud Computing">Cloud Computing</option>
            </select>
          </div>
          <div className="form-group mt-3">
            <button className="p-3 text-white btn-danger w-100" type="submit">
              Book Free Master Classes
            </button>
          </div>
        </form>
        {loading && <Loading />}
        <SuccessDialog
          show={showSuccessDialog}
          onHide={() => setShowSuccessDialog(false)}
          msg={message}
          register={error}
        />
      </div>
    </div>
  );
}

export default BookDemoCard;
