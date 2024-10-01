import React, { useEffect, useState } from 'react'
import './companies.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { companies } from '../../Data/DataFetcher';
import ShimmerComponent from '../ShimmerComponent'
import { Shimmer } from 'react-shimmer';

function Companies() {
    const [slidesToShow, setSlidesToShow] = useState(6); // Default to showing 3 slides
    const [companiesData, setCompaniesData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      companies
        .then((data) => {
          setCompaniesData(data);
          setLoading(false); // Set loading to false when data is available
        })
        .catch((error) => {
          console.error('Error fetching companies:', error);
          setLoading(true); // Set loading to false on error
        });
    }, []);

    useEffect(() => {
      // Check the screen width and update the number of slides to show
      const handleResize = () => {
        if (window.innerWidth <= 600) {
          setSlidesToShow(2); // On smaller screens, show only 1 slide
        } else if(window.innerWidth<=900) {
          setSlidesToShow(3); // On wider screens, show 3 slides
        }
        else{
            setSlidesToShow(6); // On wider screens, show 3 slides
        }
      };
    
      // Call the handleResize function initially and add a resize event listener
      handleResize();
      window.addEventListener('resize', handleResize);
    
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: slidesToShow,
            slidesToScroll: 1,
            cssEase: 'linear',
            autoplay: true,
            centerMode: true,
            autoplaySpeed: 1000, // Change delay as needed
          };
    // useEffect(() => {
    //     AOS.init(); // Initialize AOS
    //   }, []);
  return (

    <section className="container-fluid main-company-container text-center py-5">
      <h3 className="fs-1 text-900 text-center" data-aos="fade-up">Boost Your Career With Our <span className="text-main-danger">Hiring Partners</span></h3>
      <p className="fs-5 text-secondary my-3" data-aos="fade-up">
        Get closer to your dream company <br />
        Our graduates are working with leading tech brands
      </p>

      <div className="companies container-fluid text-center">
        <div className="companies-brands-container container-fluid p-2">
          <div className="row">
            {loading ? (
             <Slider {...settings}>
              {
                 Array(20)
                 .fill(null)
                 .map((_, index) => (
                   <div className="col-6 col-md-3 col-lg-2 p-2" key={index}>
                    <div className="overflow-hidden rounded-4">
                    <Shimmer width="100%" height={100} />
                    </div>
                   </div>
                 ))
              }
             </Slider>
            ) : (
              <Slider {...settings}>
                {companiesData.map((item, index) => (
                  <div className="col-6 col-md-3 col-lg-2 p-2" key={index}>
                    <div className="all-company-card">
                      <img src={item.image} alt="company" />
                    </div>
                  </div>
                ))}
              </Slider>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Companies
