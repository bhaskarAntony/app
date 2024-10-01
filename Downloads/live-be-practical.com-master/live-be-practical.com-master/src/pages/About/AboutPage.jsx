import React from 'react'
import './style.css'
import Companies from '../../components/companies/Companies'
import ReadMore from '../../Extra/ReadMore'
import NumberHiglight from '../../components/NumberHighlight/NumberHiglight'
import BookDemoCard from '../../components/BookDemoCard'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import aboutImage from '../../images/about/about-main.jpg'
import aboutNumberData from '../../Data/AboutNumber'


const servicesData = [
    {
        title:'HR Services',
        desc:'We devliver dream-team outcomes without the hassles of hiring.',
        services:['Project Team Solutions', 'Permanent Hire', 'Contract Tech Staffing', 'Remote-Ready Offshore/Onshore at Flexible Costs.']
    },
    {
        title:'Corporate Training',
        desc:'',
        services:['We offer Corporate training to IT companies to accelerate / upskill employees growth and increase productivity.', 'We offer On-premise Classroom training, Online Training and Hybrid training.', 'Awards "Certification" for the employees after training completion.']
    },
    {
        title:'Retail Training',
        desc:'"We at Be Practical offer the best Placement and IT training for all our courses which will help you step into MNCs and Top Corporates.',
        services:['Full Stack Development', 'Dev ops', 'Digital Marketing', 'Data Science']
    }
]

function AboutPage() {
  return (
    <section>
       <Helmet>
          <title>About Us | Be-Practical - Learn More About Our Mission and Team</title>
          <meta name="description" content="Discover Be-Practical's mission, values, and the dedicated team behind our success. Learn more about our journey, expertise, and commitment to excellence." />
          <meta name="keywords" content="about us" />
          <link rel="canonical" href="https://be-practical.com/about-us-2" />
        </Helmet>
      {/* <div className="about-hero container-fluid overflow-hidden">
        <div className="row align-items-center">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 d-flex align-items-center">
                <div className="about-hero-text p-lg-5 p-3">
                    <h1 className='card-heading text-main-danger'>About Us</h1>
                    <h2 className='heading text-900'>Software Training Institute in Bangalore</h2>
                    <p className='p-large1 text-secondary'><ReadMore text={"At Be Practical Tech Solutions, we understand the importance of staying up to date with the latest technology trends. That’s why we offer comprehensive training in various tech-related fields, including information technology (IT). Our trainers are highly skilled and have a deep understanding of what it takes to succeed in the IT field. Plus, we’re using cutting-edge technology to help our students achieve their career goals."} maxLength={100}/></p>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6">
                       <Link to='/download-main'> <button className='w-100 btn-danger mb-2 mx-2'>Download Browcher</button></Link>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                       <Link to='/all-courses'>    <button className='hero-btn btn-gray-outline mb-2 mx-2'>Our Courses</button></Link>
                        </div>
                       
                      
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <div className="about-hero-image">
                <img src="https://img.freepik.com/free-vector/remote-meeting-concept-illustration_114360-4704.jpg?w=740&t=st=1698468375~exp=1698468975~hmac=bc33a079a2042604636a33f5845099ce1e20a50165349f335a7bb6a19525655a" alt="aboutus" className='w-100'/>    
            </div>  
            </div>
        </div>
      </div> */}
    <div className="banner2 flex-column d-flex align-items-center justify-content-center">
        <h3 className="fs-4">About Us</h3>
        <h1 className="fs-1 fw-bold">Software Training Institute in Bangalore</h1>
       
    </div>
    <div className="container-fluid p-3 p-md-5">
        <div className="row">
            <div className="col-md-6">
                <span className="display-5 d-block ">Get the latest info about</span>
                <span className="fs-1 d-block fw-bold">Be Practical</span>
                <p className="fs-6 fw-light">At Be Practical Tech Solutions, we understand the importance of staying up to date with the latest technology trends. That’s why we offer comprehensive training in various tech-related fields, including information technology (IT). Our trainers are highly skilled and have a deep understanding of what it takes to succeed in the IT field. Plus, we’re using cutting-edge technology to help our students achieve their career goals. So come join us at Be Practical Tech Solutions – and see how we can help you reach your goals in the tech world.</p>
            </div>
            <div className="col-md-6">
                <img src={aboutImage} alt="about-us" className="w-100" />
            </div>
        </div>
    </div>
    <div className="p-3 about-numbers d-flex flex-column justify-content-center container-fluid">
      <div className="row">
        {
            aboutNumberData.map((item, index)=>(
                <div className="col-md-3 mb-3">
                    <div className="text-center text-white">
                        <h1 className="display-2 fw-bold">{item.number}</h1>
                        <p className="fs-3">{item.title}</p>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
<div className="bg-light">
    
<div className="vision container p-3">
        <div className="row">
            <div className="col-md-6">
                <div className="vision-card w-100 mt-5 bg-white">
                    <div className="vision-card-header">
                        <div className="vision-circle">
                        <i class="bi bi-award-fill display-2 text-white"></i>
                        </div>
                    </div>
                    <div className="vision-card-body text-center">
                        {/* <p className="fs-5">BE PRACTICAL</p> */}
                        <h1 className="fs-3 fw-bold">VISION</h1>
                        <span className="fs-6">Our vision is to bring qualified and eligible students from all over the world to gaintechnical knowledge.
                        Personally, visiting and organizing seminars and workshops in various educationalinstitutions in India & abroad.
                        Organize educational and social events with cultural activities at various places.
                        Arrange the opportunities and job placements for qualified students.</span>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="vision-card w-100 mt-5 bg-white">
                    <div className="vision-card-header">
                        <div className="vision-circle">
                        <i class="bi bi-award-fill display-2 text-white"></i>
                        </div>
                    </div>
                    <div className="vision-card-body text-center">
                        <p className="fs-5">BE PRACTICAL</p>
                        <h1 className="fs-3 fw-bold">Mission</h1>
                        <span className="fs-6">Our mission is to promote a quality education by following professional and ethicalstandards.
                        In its endeavor to promote education, Be Practical Tech Solutions works towardsbringing practical training in the field of software technologies to the doorstep of the students.
                        Provide comfortable and affordable fee structure for the students.</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="services p-3 p-md-5">
  
  <div className="row">
   {
    servicesData.map((item, index)=>(
        <div className="col-12 col-md-4 mb-3">
        <div className="service-card card p-3 h-100">
            <h1 className="fs-3 fw-bold gradient-text">{item.title}</h1>
            <p className="fs-5">{item.desc}</p>
            <ul className="list-group">
            {
                item.services.map((subitem, subIndex)=>(
                    <li className="list-group-item p-2 fs-5">{subitem}</li>
                ))
            }
            </ul>
        </div>
    </div>
    ))
   }
  </div>
</div>
<Companies/>
{/* <div className="services container-fluid bg-blur ">
    <h1 className="text-center fs-1 text-900">Our <span className="text-main-danger">Services</span></h1>
    <p className="fs-5 text-secondary text-center">We are providing best services <br /> what you want to reach you software goal</p>
   <div className="container p-lg-5 p-3">
   <div className="row  container-xxl m-auto">
        <div className="col-12 col-md-12 col-lg-4">
            <div className="service-card bg-white p-3 border">
                <div className="service-card-header">
                    <h1 className='fs-3 text-main-danger'>HR Services</h1>
                </div>
                <div className="service-card-body">
                    <p>Project Team Solutions
                    Permanent Hire
                    Contract Tech Staffing
                    Remote-Ready Offshore/Onshore at Flexible Costs.
                    </p>
                </div>
            </div>
        </div>
        <div className="col-12 col-md-12 col-lg-4">
            <div className="service-card bg-white p-3 border">
                <div className="service-card-header">
                    <h1 className='fs-3 text-main-danger'>Corporate Training</h1>
                </div>
                <div className="service-card-body">
                    <p>We offer Corporate training to IT companies to accelerate / upskill employees growth and increase productivity.
                    We offer On-premise Classroom training, Online Training and Hybrid training.
                    Awards 'Certification' for the employees after training completion.
                    </p>
                </div>
            </div>
        </div>
        <div className="col-12 col-md-12 col-lg-4">
            <div className="service-card bg-white p-3 border">
                <div className="service-card-header">
                    <h1 className='fs-3 text-main-danger'>Retail Training</h1>
                </div>
                <div className="service-card-body">
                    <p>"We at Be Practical offer the best Placement and IT training for all our courses which will help you step into MNCs and Top Corporates.
                    Full Stack Development
                    Dev ops
                    Testing
                    Digital Marketing
                    Data Science
                    </p>
                </div>
            </div>
        </div>
    </div>
   </div>
</div> */}
{/* <NumberHiglight/> */}
{/* <div className="bg-blue-light">
<div className="row p-3 py-5 container-xxl m-xxl-auto">
    <p className="text-center fs-4 text-900 text-main-danger">Get the latest info about</p>
    <p className="fs-1 text-900 text-center">About Us</p>
    <div className="col-12 col-md-6 col-lg-8">
    <div className="mision p-3">
        <div className="mision-inner container">
            <h1 className='fs-3 text-900 text-main-danger'>MISION</h1>
            <ul className='fs-4 bg-gray2 text-white p-3 rounded-3'>
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

            <h1 className="mt-4 fs-3 text-main-danger text-900">VISION</h1>
            <ul className='fs-4  bg-gray2 text-white p-3 rounded-3'>
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

    </div>
    <div className="col-12 col-md-6 col-lg-4">
    <BookDemoCard/>
</div>
</div>
</div> */}
    </section>
  )
}

export default AboutPage
