import React, { useEffect, useState } from 'react'
import '../styles/footer.css'  
import { allCourseApi } from '../Data/DataFetcher';
import { Shimmer } from 'react-shimmer';
import { Link } from 'react-router-dom';
function Footer() {
    const [loading, setLoading] = useState(true)
    const [CourseData, setCourseData] = useState([]);
    useEffect(() => {
     const fetchData = async () => {
       try {
         const data = await allCourseApi;
         setLoading(false)
         setCourseData(data.courses);
         console.log("data", data)
       } catch (error) {
        setLoading(true)
         console.error('Error fetching CoursePage:', error);
       }
     };
  
     fetchData();
   }, []);
   const handleClick = (id) => {
    localStorage.setItem('selectedCourseId', id);
  };
  return (
    <>
    <div className="footer-wave ">
    </div>
    <section className="footer_container d-flex flex-column justify-content-between container-fluid bg-texture" id="footer">
    <div className="row">
        <div className="col-12 cl-md-12 col-lg-3 ">
           <div className="left">
           <img src="https://bepractical.s3.us-east-2.amazonaws.com/brand-logo.cc6e3cf088a8fd3005b1.jpg" alt="logo" data-aos="fade-up"/>
            <p>
                Since its establishment in 2012, Be Practical Tech Solutions is training predominantly in IT courses. It has pioneered as a diversified entrepreneurship tapping into the necessities of the internet market in India, with its in-depth understanding of customers and companies
            </p>
           </div>

        </div>
        <div className="col-12 cl-md-12 col-lg-6 ">
           <div className="row">
                <div className="col-lg-4 col-md -12">
                    <div className="m1">
                        <h2 className='fs-4'>Category</h2>
                        <ul>
                            {loading ? (
                            Array(5)
                                .fill(null)
                                .map((_, index) => (
                                <li>
                                <Shimmer width="100%" height={20}/>
                                </li>
                                ))
                            ):(
                        
                            CourseData.map((item, index)=>(
                            <li>
                                <Link to={`/${item.seo.canonical_url}`}  className='nav-link' onClick={()=>handleClick(item._id)}>{item.courseName}<i class="bi bi-arrow-right"></i></Link>
                            </li>
                            )))
                        }
                           
                        </ul>
                    </div>

                </div>
                <div className="col-lg-4 col-md -12">
                    <div className="m1">
                        <h2 className='fs-4'>Quick Search</h2>
                        <ul>
                            <li><a href="/about-us-2">About Us</a></li>
                            <li><a href="/contact-us">Contact Us</a></li>
                            <li><a href="/gallery">Gallery</a></li>
                            <li><a href="/events">Events</a></li>
                            
                        </ul>
                    </div>


                </div>
                <div className="col-lg-4 col-md -12">
                    <div className="m1">
                        <h2 className='fs-4'>For Companies</h2>
                        <ul>
                            <li><a href="#">Corporate Training</a></li>
                            <li><a href="#">HR services</a></li>
                            <li><a href="#">Hire trained graduates</a></li>
                        
                            
                        </ul>
                    </div>

                </div>
           </div>
            
        </div>
        <div className="col-12 cl-md-12 col-lg-3 ">

            <div className="right">
                <h2 className='fs-4 text-left'>
                    Get in Touch
                </h2>
               <ul>
                   <li><a>info@be-practicle.com</a></li>
                   <li><a>+91-9242079119</a></li>
                   <li><a>
                   <address>#737C,1stFloor,1st cross 3rd Stage,4th Block Basaveshwara nagar Bengaluru-560079</address></a></li>
                  
               </ul> 
            </div>
            <div className="icons">
                <div>
                <Link to='https://www.facebook.com/BangaloreBepractical/'>   <i class="bi bi-facebook text-white"></i></Link>
                 
                </div>
                <div>
                <Link to='https://twitter.com/bepractical_com'>  <i class="bi bi-twitter text-white"></i></Link>
                  
                </div>
                <div>
                <Link to='https://www.youtube.com/channel/UCXZrCfbP7ZITt5WFjQ5mZbQ'>  <i class="bi bi-youtube text-white"></i></Link>
                  
                </div>
                <div>
                <Link to='https://www.linkedin.com/company/13338555/admin/'> <i class="bi bi-linkedin  text-white"></i></Link>
                   
                </div>
                <div>
                <Link to='https://www.instagram.com/bepracticaltraining/'><i class="bi bi-instagram text-white"></i></Link>
                    
                </div>
            </div>
            
        </div>
    </div>
    {/* <hr /> */}
    <div className="text-center">
        <span className="fs-6">Copyrights@2023</span>
    </div>
</section>
</>


  )
}

export default Footer
