import React, { useState } from 'react';
import '../styles/faq.css'
import ApplyNow from '../Extra/ApplyNow';

const FaqSection = (props) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Collapse the active FAQ item
    } else {
      setActiveIndex(index); // Expand the clicked FAQ item
    }
  };

  return (
    <div className="container-fluid bg-blur py-5">
      <h2 className='fs-1 text-center text-900'>Still have Doubts?</h2>
      <p className="fs-4 text-secondary text-center my-4">We have got answers to your most frequently asked questions! 
Keep reading to get the answers you have been searching for!
</p>
     <div className="row mt-2">
     <div className="col-12 col-md-12 col-lg-6">
     <div className="faq-left">
     <img src="https://eduquest.itech-theme.com/wp-content/uploads/2023/08/faq.png" alt="any doubts image" className="w-100" />
     <div className="faq-contact p-3 rounded-3">
      <p className="p-large1 text-white">Contact Us For a <span className="text-main-danger ">Free Learning </span> Consulting Evaluation</p>
      <h1 className="fs-1 text-white">+91-9242079119</h1>
     </div>
     </div>
      </div>
      <div className="col-12 col-md-12 col-lg-6">
      <div className="accordion container" id="faqAccordion">
        {props.faq.map((faq, index) => (
          <div className="card course-faq" key={index}>
            <div className="course-faq-question" id={`heading${index}`}>
              <h4 className="mb-0 fs-5">
                <div
                  className={`d-flex w-100 align-items-center ${activeIndex === index ? '' : 'collapsed'}`}
                  type="button"
                  onClick={() => handleAccordionClick(index)}
                >
                  <i className={`bi ${activeIndex === index ? 'bi-dash fs-2' : 'bi-plus fs-2'} text-main-danger`}></i>
                  {faq.question}
                </div>
              </h4>
            </div>

            <div
              id={`collapse${index}`}
              className={`collapse ${activeIndex === index ? 'show' : ''}`}
              aria-labelledby={`heading${index}`}
              data-parent="#faqAccordion"
            >
              <div className="card-body">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
     </div>
      <div className="d-flex justify-content-center">
        <ApplyNow text={"Ask More Doubts?"}/>
      </div>
    </div>
  );
};

export default FaqSection;
