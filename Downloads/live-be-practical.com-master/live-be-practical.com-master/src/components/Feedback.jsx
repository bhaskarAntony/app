import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/feedback.css'
import AOS from 'aos';
import { testinomials } from '../Data/DataFetcher';
import ReadMore from '../Extra/ReadMore';
import profile from '../images/profile_testimonial.jpg'

function Feedback() {

  const [loading, setLoading] = useState(true)
    const [testinomialData, setTestinomialData] = useState([]);
    useEffect(() => {
        testinomials
          .then((data) => {
            setTestinomialData(data)
            setLoading(false)
          })
          .catch((error) => console.error('Error fetching advantages:', error));
      }, []);

    useEffect(() => {
        AOS.init(); // Initialize AOS
      }, []);
    const [itemsPerSlide, setItemsPerSlide] = useState(2);
    const [carouselInterval, setCarouselInterval] = useState(3000);
    const [carouselPaused, setCarouselPaused] = useState(false);
  
    useEffect(() => {
      const handleResize = () => {
        // Adjust the number of items per slide based on the screen width
        if (window.innerWidth < 800) {
          setItemsPerSlide(1);
          setCarouselInterval(2000);
        }
        else if(window.innerWidth < 1260) {
            setItemsPerSlide(2);
            setCarouselInterval(2000);
          } else {
          setItemsPerSlide(2);
          setCarouselInterval(3000);
        }
      };
  
      window.addEventListener('resize', handleResize);
      handleResize();
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    const handleCarouselHover = () => {
      // Pause the Carousel when the user hovers over it
      setCarouselPaused(true);
    };
  
    const handleCarouselLeave = () => {
      // Resume the Carousel when the user stops hovering
      setCarouselPaused(false);
    };
  

  const carouselItems = testinomialData.reduce((accumulator, current, index) => {
    if (index % itemsPerSlide === 0) {
      accumulator.push([]);
    }
    accumulator[accumulator.length - 1].push(current);
    return accumulator;
  }, []);

  return (
  <div className='feedback-container bg-blur p-lg-5 p-2 py-5'>
    <p className="text-center p-large1 text-main-danger">Testimonials</p>
  <h1 className="fs-1 text-900 text-center mb-4">Testimonials from Our Mentees</h1>
    <Carousel
     interval={carouselInterval} 
     >
      {carouselItems.map((slideItems, index) => (
        <Carousel.Item key={index} 
          onMouseEnter={handleCarouselHover}
          onMouseLeave={handleCarouselLeave}
        >
          <div className="feedback  container ">
          <div className="row">
            {slideItems.map((item) => (
                <div className="col-12 col-md-6 col-lg-6">
              <div className="feedback-card" data-aos="fade-left"
                                            data-aos-anchor="#example-anchor"
                                            data-aos-offset="500"
                                            data-aos-duration="500">
              <div key={item.id} className="custom-carousel-item">
                <div className="feedback-header mb-2">
                <div className="rating-container d-flex">
                  <small>{item.rating} Rating</small>
                  {Array.from({ length: item.rating }, (_, i) => (
                    <i key={i} className="bi bi-star-fill text-warning"></i>
                  ))}
                </div>
                <div className="py-3">
                <p className='p-large1'>
                <ReadMore text={item.content} maxLength={100} />
                </p>
                </div>
                <hr />
                   <div className="d-flex gap-3">
                   <img src={profile} alt="profile" />
                        <div>
                        <h4 className='fs-5 fw-bold text-main-danger'>{item.name}</h4>
                        <small className='text-secondary'>{item.role}</small>
                        </div>
                   </div>
                </div>
                
                
              </div>
              </div>
                </div>
            ))}
              </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
    <div className="text-center p-3 mt-3">
    <a href="/all-testinomials" className='btn-danger text-decoration-none'>Browse more<i class="bi bi-chevron-double-right"></i></a>
  </div>
  </div>
  );
}

export default Feedback;
