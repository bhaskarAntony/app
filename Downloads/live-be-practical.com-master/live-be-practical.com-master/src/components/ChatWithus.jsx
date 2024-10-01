import React from 'react'
import '../styles/chatwithus.css'
import callimage from '../images/chat-with-us.svg'
import Aos from 'aos';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function ChatWithus() {
  useEffect(() => {
    Aos.init(); // Initialize AOS
  }, []);
  
  return (
    <section className='container my-5 p-2 p-md-3 p-lg-5'>
    <div className="chat-with-us px-0  bg-texture">
    <div className="row align-items-center">
        <div className="col-12 col-md-8 col-lg-8  p-4">
        <h1 className="fs-1 text-white">Still Are you thinking about your career?</h1>
        <button  className='btn-danger mt-5 mb-3 text-decoration-none'>Chat With Us <i class="bi bi-chevron-double-right"></i></button>
        </div>

        <div className="col-12 col-md-4 col-lg-4">
        <img src={callimage} alt="caht-with-us" className='img-fluid w-100'/>
        </div>
      </div>
    </div>
    <div className="text-center chat-btn">
         
          </div>
    </section>
  )
}

export default ChatWithus
