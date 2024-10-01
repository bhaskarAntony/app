import React from 'react'
import '../styles/certificate.css'
import Aos from 'aos';
import { useEffect } from 'react';

function Certificate() {
    useEffect(() => {
        Aos.init(); // Initialize AOS
      }, []);
  return (
   <div className="container-fluid mt-3 py-5">
     <div className='container certificate' data-aos="fade-left">
        <div className="row">
            <div className="col-12 col-md-4 col-lg-4">
                <img src="https://svg.template.creately.com/BVJzef5PKaw" alt="certificate" className="fluid-img w-100 mb-3" />
            </div>
            <div className="col-12 col-md-8 col-lg-8 certificate-text">
                <h4 className="fs-2 text-900">Empowering the Next Generation of Tech Talent.</h4>
                <p className="p-large1">Approved training partner of National Skill Development Corporation (NSDC), India</p>
            </div>

        </div>
    </div>
   </div>
  )
}

export default Certificate
