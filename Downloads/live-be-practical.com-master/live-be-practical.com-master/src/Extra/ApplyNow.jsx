import React, { useState } from 'react'
import DialogModel from '../components/DialogModel';

function ApplyNow({text}) {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
  return (
    <>
         {/* <button className='btn--sec-lg m-2 py-3' onClick={openModal}>{text}<i class="bi bi-chevron-double-right"></i></button>
           <DialogModel
        show={showModal}
        onHide={handleClose}
      /> */}
     
    </>
  )
}

export default ApplyNow
