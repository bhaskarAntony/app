import React from 'react'
import ContactForm from './ContactForm'
import Benifits from './Benifits'
import '../styles/contact-page.css'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

function ContactPage() {
  return (
    <div>
       <Helmet>
        <title>Contact Us Us - Full Stack Developer Course & Software Training Institute in Bangalore</title>
        <meta name="description" content="Talk to our counsellor team get in touch with them if you need any help regarding any courses Contact us today for more info on our services and how we can help you achieve your goals. Our team is here to answer any questions you may have and provide you with the support you need." />
      </Helmet>
        <section className="contact-home bg-blur py-5 text-black">
          <h1 className="fs-1">Full Stack Developer Course & Software Training Institute in Bangalore</h1>
        <h1 className='fs-1 text-black text-900'>Hire Trained graduates at <br /> <span className="text-main-danger"> Be practical</span></h1>
        <p className="fs-5">Full Stack Developer Course, Software Training Institute in Bangalore</p>
         <p className='fs-4 mt-4 text-black p-2'>Build your Data & Engineering Team with industry ready top <br /> skilled tech talent.</p>
         <Link to="#contact" className="btn-danger px-5 fs-3 text-decoration-none">Hire Now</Link>
        </section> 
      <ContactForm/>
        <Benifits/>
    </div>
  )
}

export default ContactPage
