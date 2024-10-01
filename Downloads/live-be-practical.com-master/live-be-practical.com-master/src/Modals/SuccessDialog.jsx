import React from 'react';
import { Modal } from 'react-bootstrap';
import successImage from '../images/success_gif.gif' 
import ErrorImage from '../images/fail_gif.gif' 

function SuccessDialog({ show, onHide , msg, register}) {
  return (
    <Modal show={show} onHide={onHide} centered className="rounded-5">
      <Modal.Header closeButton>
        {/* <Modal.Title>Registration</Modal.Title> */}
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-center">
        {
            register?(
              <>
               <img src={successImage} alt="" className='w-100' />
              </>
            ):(
              <>
               <img src={ErrorImage} alt="" className='w-75' />
            
              </>
            )
        }
        </div>
        <p className="text-center mt-3">{msg}</p>
      </Modal.Body>
    </Modal>
  );
}

export default SuccessDialog;
