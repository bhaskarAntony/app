import React from 'react';
import '../styles/events.css';

function UpcomingEvents({ events, heading, type }) {
  // Check if there are no events
  if (events.length === 0) {
    return (
      <div className="event container py-4">
        <h3 className="fs-1 text-center text-white text-900 mb-3">{heading}</h3>
        <div className="py-5 text-white d-flex flex-column align-items-center justify-content-center">
        <i class="bi bi-ban fs-1 text-yellow "></i>
          <p className="fs-1 mt-3 text-main-danger">No Events Available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="event container py-4">
      <h3 className="fs-1 text-center text-white text-900 mb-3">{heading}</h3>
      {events.map((event, index) => (
        event.eventType === type ? (
          <div className="event-card bg-gray-4 mb-5 p-lg-3 p-md-0 mb-3 border-b" key={index}>
            <div className="row">
              <div className="col-12 col-md-12 col-lg-6 d-flex align-items-center">
                <div className="event-image p-2">
                  <img src={event.image} alt={event.title} className='w-100 border-a p-2' />
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-6">
                <div className="event-text p-3">
              <h3 className="fs-4 text-900 text-white">{event.title}</h3>
              <h5 className='bg-danger-2 text-white p-2'>{event.tag}</h5>
              <h4 className="mt-3 text-main-danger">What you will Learn</h4>
              <p className='text-white fs-6'>{event.topic}</p>
              <p className="mt-lg-3 text-white fs-6"><i class="bi bi-calendar3 mx-2 text-green"></i>{event.date}</p>
              <p className="mt-lg-3 text-white fs-6"><i class="bi bi-stopwatch mx-2 text-yellow"></i>{event.time}</p>
              <div className="carousel-footer">
                {
                 event.eventType==="upcomming"? 
                 <>
                <button className="btn-main-outline-light w-md-100">Book Free Ticket</button>
                 </> : null
                }
             <button className="btn-danger px-5 mx-2 w-md-100">Enquire</button>
              </div>
            </div>
          </div>
                </div>
              </div>
        ) : null
      ))}
    </div>
  );
}

export default UpcomingEvents;
