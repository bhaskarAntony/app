import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/feedback.css'
import AOS from 'aos';
import { testinomials } from '../Data/DataFetcher';
import ReadMore from '../Extra/ReadMore';
import FeedbackShimmer from '../shimmer effects/FeedbackShimmer';
import YoutubeVideos from '../components/YoutubeVideos'
import ShimmerFeedbackCard from '../shimmer effects/ShimmerFeedbackCard';

function AllTestimomials() {

  const [loading, setLoading] = useState(true)
    const [testinomialData, setTestinomialData] = useState([]);
    useEffect(() => {
        testinomials
          .then((data) => {
            setTestinomialData(data)
            setLoading(false)
            console.log("test", testinomialData)
          })
          .catch((error) => console.error('Error fetching advantages:', error));
      }, []);

    useEffect(() => {
        AOS.init(); // Initialize AOS
      }, []);

  return (
  <div className='bg-blur'>
  <div className="bg-blur py-5">
  <h1 className="fs-1 text-center text-900">What Peoples Saying <br />About Institute and <span className="text-main-danger">Courses?</span></h1>
  </div>
  <div className="text-end">
  </div>
          <div className=" feedback p-3 container overflow-hidden">
          <div className="row">
          {loading ? (
              Array(15)
                .fill(null)
                .map((_, index) => (
                  <ShimmerFeedbackCard/>
                ))
            ):(
            testinomialData.map((item) => (
              <div className="col-12 col-md-6 col-lg-6">
              <div className="feedback-card border-b border" data-aos="fade-left"
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
                   <img src="https://us.123rf.com/450wm/thesomeday123/thesomeday1231712/thesomeday123171200009/91087331-default-avatar-profile-icon-for-male-grey-photo-placeholder-illustrations-vector.jpg?ver=6" alt="profile" />
                        <div>
                        <h4 className='fs-5 fw-bold text-main-danger'>{item.name}</h4>
                        <small className='text-secondary'>{item.role}</small>
                        </div>
                   </div>
                </div>
                
                
              </div>
              </div>
                </div>
            )))
                  }
              </div>
                  
          </div>
          <YoutubeVideos/>
  </div>
  );
}

export default AllTestimomials;
