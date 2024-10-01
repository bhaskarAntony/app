import React, { useState, useEffect } from 'react';
import '../styles/webinar.css';
import Slider from 'react-slick';
import { EventsApi } from '../Data/DataFetcher';
import { Shimmer } from 'react-shimmer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Webinar() {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [loading, setLoading] = useState(true);
  const [eventsData, setEventsData] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setSlidesToShow(isMobile ? 1 : 3);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);

  useEffect(() => {
    EventsApi
      .then((data) => {
        setEventsData(data);
        console.log(data);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching events:', error));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    centerPadding: '60px',
    autoplaySpeed: 3000,
  };

  return (
    <div className="bg-blue-light py-5 p-3 p-md-5">
      <h3 className="fs-1 text-900 text-center">Webinars & Bootcamps <br /> From <span className="text-main-danger">Be-Practical</span></h3>
      <section className="p-2 container-fluid" id="webinar">
        <div className="row">
          {loading ? (
          <div className="webinars p-3">
              {
                Array(3).fill(null).map((_, index) => (
                  <div className="bootcamp-card p-3 shadow">
                    <Shimmer width={300} height={200} />
                  </div>
              ))
              }
          </div>
          ) : (
           <div className="webinars">
             {eventsData.map((event, eventIndex) => (
               
                  <div className="bootcamp-card">
                    <img src={event.image} alt={event.title} className="w-100" />
                    <div className="event-info">
                      <h3 className="fs-4 fw-bold">{event.title}</h3>
                      <small className="small">{event.date}</small>
                    </div>
                  </div>
              ))}
           </div>
          )}
        </div>
      </section>
      <div className="text-center mt-5">
        <a href="/" className="btn--sec-lg text-decoration-none">View All Events</a>
      </div>
    </div>
  );
}

export default Webinar;
