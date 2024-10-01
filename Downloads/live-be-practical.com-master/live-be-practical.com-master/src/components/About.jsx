import React from 'react'
import '../styles/about.css'
import Companies from './companies/Companies'

function About() {
  return (
    <section>
      <div className="about-hero container-fluid">
        <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <div className="about-hero-text">
                    <h4 className='card-heading text-light-green'>THE BEST TRAINING INSTITUTE</h4>
                    <h1>Be Practical Tech Soulutions</h1>
                    <p className='p-light-small text-white'>At Be Practical Tech Solutions, we understand the importance of staying up to date with the latest technology trends. That’s why we offer comprehensive training in various tech-related fields, including information technology (IT). Our trainers are highly skilled and have a deep understanding of what it takes to succeed in the IT field. Plus, we’re using cutting-edge technology to help our students achieve their career goals.</p>
                    <div className="flex-btns">
                        <button className='hero-btn btn-main-outline-light mb-2 mx-2'>Explore More</button>
                        <button className='hero-btn btn-main mb-2 mx-2'>Our Courses</button>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <div className="about-hero-image">
                <img src="https://tykit.rometheme.pro/teracloud/wp-content/uploads/sites/134/2023/09/great-suggestion-came-to-girl-mind-studio-portrai.png" alt="aboutus" />    
            </div>  
            </div>
        </div>
      </div>
      <div className="home-bottom-wave">

</div>
<Companies/>
<div className="services container">
    <h1 className="banner-heading">Our Services</h1>
    <p className="p-light-small text-center pb-4">We are providing best services <br /> what you want to reach you software goal</p>
    <div className="row">
        <div className="col-12 col-md-12 col-lg-4">
            <div className="service-card">
                <div className="service-card-header">
                    <h1>HR Services</h1>
                </div>
                <div className="service-card-body">
                    <p>We devliver dream-team outcomes without the hassles of hiring.</p>
                    <p>Project Team Solutions
                    Permanent Hire
                    Contract Tech Staffing
                    Remote-Ready Offshore/Onshore at Flexible Costs.
                    </p>
                </div>
            </div>
        </div>
        <div className="col-12 col-md-12 col-lg-4">
            <div className="service-card">
                <div className="service-card-header">
                    <h1>HR Services</h1>
                </div>
                <div className="service-card-body">
                    <p>We devliver dream-team outcomes without the hassles of hiring.</p>
                    <p>Project Team Solutions
                    Permanent Hire
                    Contract Tech Staffing
                    Remote-Ready Offshore/Onshore at Flexible Costs.
                    </p>
                </div>
            </div>
        </div>
        <div className="col-12 col-md-12 col-lg-4">
            <div className="service-card">
                <div className="service-card-header">
                    <h1>HR Services</h1>
                </div>
                <div className="service-card-body">
                    <p>We devliver dream-team outcomes without the hassles of hiring.</p>
                    <p>Project Team Solutions
                    Permanent Hire
                    Contract Tech Staffing
                    Remote-Ready Offshore/Onshore at Flexible Costs.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="mision">
        <div className="mision-count container">

        </div>
        <div className="mision-inner container">
            <h1>MISION</h1>
            <ul>
                <li>
                    <p>Our mission is to promote a quality education by following professional and ethicalstandards.</p>
                </li>
                <li>
                    <p>In its endeavor to promote education, Be Practical Tech Solutions works towardsbringing practical training in the field of software technologies to the doorstep of the students.</p>
                </li>
                <li>
                    <p>Provide comfortable and affordable fee structure for the students.</p>
                </li>
            </ul>

            <h1 className="mt-4">VISION</h1>
            <ul>
                <li>
                    <p>Our vision is to bring qualified and eligible students from all over the world to gaintechnical knowledge.</p>
                </li>
                <li>
                    <p>Personally, visiting and organizing seminars and workshops in various educationalinstitutions in India & abroad.</p>
                </li>
                <li>
                    <p>Organize educational and social events with cultural activities at various places.</p>
                </li>
                 <li>
                    <p>Arrange the opportunities and job placements for qualified students.</p>
                </li>
            </ul>
        </div>
</div>
    </section>
  )
}

export default About
