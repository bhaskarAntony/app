import React from 'react'
import './style.css'
import { Helmet } from 'react-helmet'

const contactdata = [
    {
        icon:'envelope-fill',
        title:'Mail Us',
        desc:'Say something to start a live chat info@be-practical.com'
    },
    {
        icon:'telephone-plus-fill',
        title:'24/7 Live Chat',
        desc:'We endeavour to answer all enquiries within 24 hours on business days.  +91- 9242079119'
    },
    {
        icon:'geo-alt-fill',
        title:'Visit Us',
        desc:'#737C, 1st Floor, 1st Cross 3rd Stage, 4th Block Basaveshwara Nagara Bengaluru-560079'
    }
]
function Contact() {

  return (
    <div>
         <Helmet>
        <title>Contact Us Us - Full Stack Developer Course & Software Training Institute in Bangalore</title>
        <meta name="description" content="Talk to our counsellor team get in touch with them if you need any help regarding any courses Contact us today for more info on our services and how we can help you achieve your goals. Our team is here to answer any questions you may have and provide you with the support you need." />
      </Helmet>
        <div className="banner2 p-3 p-md-5">
           <div className="row">
            <div className="col-md-6">
            <h1 className="fs-1">Contact Us</h1>
            {/* <p className="fs-4">Rapidiously deploy world-class platforms whereas collaborative interfaces. Phosfluorescently facilitate corporate innovation via excellent web technically sound.</p> */}
            </div>
           </div>
        </div>

      <div className="container p-3 mt-5">
      <div className="row">
            {
                contactdata.map((item, index)=>(
                    <div className="col-md-4 mb-3">
                        <div className="card contact-card  shadow-sm p-3 text-center d-flex flex-column align-items-center justify-content-between h-100">
                            <i className={`bi bi-${item.icon} fs-1`}></i>
                            <h1 className="fs-3 mt-3">{item.title}</h1>
                            <p className="fs-6 text-secondary">{item.desc}</p>
                        </div>
                    </div>
                ))
            }
        </div>

        <div>
            <div className="row mt-5">
                <div className="col-md-6">
                    <div className="contact-form mb-4">
                        <h1 className="fs-3 fw-bold">Ready to get started?</h1>
                        <input type="text" placeholder='Enter name' />    
                        <input type="email" placeholder='Enter email' />    
                        <textarea name=""  id="" rows={5} placeholder='Message'></textarea>

                        <button className='btn-danger mt-4 p-2 px-5'>Send Message</button>
                    </div> 
                </div>
                <div className="col-md-6">
                    <h1 className="fs-1 fw-bold">Looking for a excellent Business idea?</h1>
                    <p className="fs-5 text-secondary">Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days.</p>
                    <button className="btn-main-outline-dark p-2 px-5">Get Directions <i class="bi bi-arrow-right"></i></button>
                    <hr />
                    <div className='d-flex gap-2 mb-4'>
                        <div className="icon">
                           <i className='bi bi-geo-alt-fill fs-3'></i>
                        </div>
                        <div>
                                <span className="fs-4 d-block fw-bold">Company Location</span>
                                <span className="fs-6 text-secondary d-block">#737C,1stFloor,1st cross 3rd Stage,4th Block Basaveshwara nagar Bengaluru-560079</span>
                            </div>
                    </div>
                    <div className='d-flex gap-2 mb-4'>
                        <div className="icon">
                           <i className='bi bi-envelope-fill fs-3'></i>
                        </div>
                        <div>
                                <span className="fs-4 d-block fw-bold">Email Address</span>
                                <span className="fs-6 text-secondary d-block">info@be-practical.com</span>
                            </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact