import React, { useState } from 'react';
import '../styles/module.css'; 
import ApplyNow from '../Extra/ApplyNow';


const Module = (props) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
   <div className="container-fluid faq" id="faq">
    <h3 className="fs-1 text-center text-900"> {props.name} Program Curriculum</h3>
    
    <p className="fs-md-5 fs-6 text-secondary text-center container " dangerouslySetInnerHTML={{ __html: props.description}}></p>
     <div className="container">
      <div className="row">
      <div className="col-12 col-md-6 col-lg-6">
      <div className="container modules  p-lg-5 p-md-3 p-2">
     {props.modules?.map((item, index) => (
         <div
          className={`faq-item ${activeIndex === index ? 'active' : ''} rounded-4 mb-3 `}
          key={index}
        >
          <div className="faq-question d-flex align-items-center" onClick={() => toggleAccordion(index)}>
            <span className="count p-2 text-900 fs-5 text-dark mx-3">{index+1}
            </span>
            <span className="faq-question-text text-black"><span className="fw-bold text-main-danger"> Module{index + 1}:</span> <span className="text-dark text-900">{item.title}</span></span>
            <div className="faq-icon">
              {activeIndex === index ? <i class="bi bi-caret-up-fill"></i>:<i class="bi bi-caret-down-fill"></i>}
            </div>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">
                <h5 className='mt-4 text-main-danger  text-decoration-underline'>About</h5>
              <p className="fs-5 text-dark">{item.title}</p>
                <h5 className='mt-4 text-main-danger  text-decoration-underline'>Topics Covered</h5>
                <p className='fs-6 text-dark'>{item.description}</p>
            </div>
          )}
        </div>
      ))}
      </div>
      </div>
      <div className="col-12 col-md-6 col-lg-6">
        <img src="https://img.freepik.com/free-vector/yoga-office-concept-illustration_114360-6853.jpg?size=626&ext=jpg" alt="module-image" className="w-100" />
      </div>
     </div>
        <div className="text-center mt-2">
       <ApplyNow text={"Enquire Now"}/>
    </div>
    </div>
     

   </div>
  );
};

export default Module;
