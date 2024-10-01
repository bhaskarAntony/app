// RegistrationForm.js

import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const SimpleRegister = ({ show, onClose }) => {
  // State to manage the current step
  const [step, setStep] = useState(1);

  // State to store user data for each step
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('User data:', userData);
    // Close the dialogue/modal
    onClose();
  };

  // Function to handle "Next" button click
  const handleNext = () => {
    // Check if it's the last step before closing the modal
    if (step < 2) {
      setStep(step + 1);
    }
  };

  // Render the registration form based on the current step
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h5>Step 1:</h5>
            <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Enter Your Name</label>
            </div>
            <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
            <label for="floatingPassword">Enter Email Address</label>
            </div>
            </div>
        );
      case 2:
        return (
            <div>
            <h5>Step 2:</h5>
            <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Enter Phone Number</label>
            </div>
            <div class="form-floating">
            <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                <option selected value='null'>Open this select menu</option>
                <option value="1">MERN Fullstack</option>
                <option value="2">Python Fullstack</option>
                <option value="3">Java FullStack</option>
                <option value="3">Digital Marketing</option>
                <option value="3">Data Science</option>
                <option value="3">Cloud Computing</option>


            </select>
            <label for="floatingSelect">Works with selects</label>
            </div>
            </div>
        );
      default:
        return null;
    }
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Registration</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              {renderStep()}
              <div className="text-center mt-3">
                {step > 1 && (
                  <button className='mx-2 btn-main-outline-dark p-2' onClick={() => setStep(step - 1)}>
                     <i class="bi bi-chevron-double-left"></i>
                     Previous
                  </button>
                )}
                {step < 2 ? (
                 <Button  onClick={handleNext} className=' w-100 p-3'>Next <i class="bi bi-chevron-double-right"></i></Button>
                ) : (
                  <button type="submit" className="btn-main mx-2 px-3">
                    Submit <i class="bi bi-chevron-double-right"></i>
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SimpleRegister;
