import React from 'react'
import { Modal } from 'react-bootstrap';

function VideosModal({ isOpen, videoSrc, onClose, youtubeUrl,title }) {
  return (
    <Modal show={isOpen} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {
        videoSrc?(
          <video src={videoSrc} autoPlay controls width="100%" height="auto"></video>
        ):(
          <iframe width="560" height="315" src={`https://www.youtube.com/embed/${youtubeUrl}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='w-100 rounded-4 bg-dark'></iframe>
        )
      }
      </Modal.Body>
    </Modal>
  )
}

export default VideosModal
