// ImageCarousel.js
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/homehero.css';
import { companies } from '../Data/DataFetcher';
import student1 from '../images/student1.svg'

const images = ['https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040430.jpg?size=626&ext=jpg&ga=GA1.1.874872603.1694171926&semt=sph', 'https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040430.jpg?size=626&ext=jpg&ga=GA1.1.874872603.1694171926&semt=sph', 'https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040430.jpg?size=626&ext=jpg&ga=GA1.1.874872603.1694171926&semt=sph', /* Add more images as needed */];

const settings1 = {
  dots: false,
  infinite: true,
  speed: 10000, // Speed of the transition
  slidesToShow: 2,
  slidesToScroll: 1,
  vertical: true,
  verticalSwiping: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 0, // Interval between slides
  pauseOnHover: true,
};

const settings2 = {
  dots: false,
  infinite: true,
  speed: 9000, // Different speed for the second set of sliders
  slidesToShow: 2,
  slidesToScroll: 1,
  cssEase: 'linear',
  vertical: true,
  verticalSwiping: true,
  autoplay: true,
  autoplaySpeed: 0, // Interval between slides
  pauseOnHover: true,
};

const settings3 = {
  dots: false,
  infinite: true,
  speed: 11000, // Different speed for the third set of sliders
  slidesToShow: 2,
  slidesToScroll: 1,
  vertical: true,
  verticalSwiping: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 0, // Interval between slides
  pauseOnHover: true,
};

const ImageCarousel = () => {
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
  return (
    <div className="slick-container">
        <div className="row">
            <div className="col-4">
            <Slider {...settings1}>
        {images.map((image, index) => (
          <div key={index} className="scroll-image w-100">
            {/* <img src={image} alt={`Image ${index + 1}`} /> */}
          </div>
        ))}
      </Slider>
            </div>
            <div className="col-4">
            <Slider {...settings2}>
        {images.map((image, index) => (
          <div key={index} className="scroll-image placements w-100">
            <img src={student1} alt={`Image ${index + 1}`} />
          
          
          </div>
        ))}
      </Slider>  
                </div>
                <div className="col-4">
                <Slider {...settings3}>
        {
            companiesData.map((item, index)=>(
                <div className="scroll-image company w-100">
                    <img src={item.image} alt="" className="w-100" />
                </div>
            ))
        }
      </Slider>
                </div>
        </div>
     
     
      
    </div>
  );
};

export default ImageCarousel;
