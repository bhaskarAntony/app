import React, { useState } from 'react'
import DialogModel from '../components/DialogModel';
import SimpleRegister from '../Modals/SimpleRegister';

function BookDemoBtn({text}) {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const onHide = () => setShowModal(false);
  return (
    <>
         <button className='hero-btn-main-2 m-2  py-3' onClick={openModal}>{text}<i class="bi bi-chevron-double-right"></i></button>
           <SimpleRegister
        show={showModal}
        onClose={onHide}
      />
    </>
  )
}

export default BookDemoBtn
