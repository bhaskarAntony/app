import React, { useState } from "react";
import {Modal, Button } from "react-bootstrap";
import { BiXCircle } from "react-icons/bi"; // Import Bootstrap Icons

import '../styles/gallery.css'
const ImageGallery = (props) => {
  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setSelectedImage(null);
  };

  return (
    <div className="container-fluid gallery-container bg-gray2 p-4">
      <div className="row">
        {props.images.map((image, index) => (
             <div className="col-12 col-md-4 col-lg-3">
                <div className="gallery-card bg-gray3">
            <div
              className="gallery-image"
             
            >
              <div className="image-container" onClick={() => handleImageClick(image)}>
                <img src={image.url} alt={image.title} className="border-b" />
              </div>
            </div>
            <div className="gallery-card-body border-b"  >
                <p className="text-white">{image.description}</p>
            </div>
          </div>
         </div>
        ))}
      </div>

      <Modal show={show} onHide={handleClose} size="lg" centered className="main-modal-gallery">
        <Modal.Body className="p-0 rounded-3">
          <div className="square-lightbox  rounded-3">
            <img src={selectedImage?.url} alt={selectedImage?.title} />
            <div className="close-button">
              <Button variant="light" onClick={handleClose}>
                <BiXCircle size={30} variant="danger" />
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ImageGallery;
