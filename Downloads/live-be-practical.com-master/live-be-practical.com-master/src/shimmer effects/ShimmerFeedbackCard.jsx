import React from 'react';
import { Shimmer } from 'react-shimmer';

const ShimmerFeedbackCard = () => {
  return (
    <div className="col-12 col-md-6 col-lg-6">
      <div className="feedback-card" data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500">
        <div className="shimmer-wrapper bg-white p-2">
          <div className="feedback-header mb-2">
            <div className="rating-container d-flex">
              <Shimmer width={80} height={16} />
              {Array.from({ length: 5 }, (_, i) => (
                  <Shimmer width={16} height={16} />
              ))}
            </div>
            <div className="py-3">
              <p className="p-large1">
              <p className="mt-3">
              <Shimmer width="90%" height={15} />
              </p>
                <p className="mt-2">
                <Shimmer width="70%" height={10} />
                </p>
              <p className="mt-2">
              <Shimmer width="40%" height={10} />
              </p>
              </p>
            </div>
            <hr />
            <div className="d-flex gap-3 w-100">
            <Shimmer width={40} height={40} />
              <div className='w-100'>
                <h4 className="fs-5 fw-bold text-main-danger">
                  <Shimmer width="50%" height={16} />
                </h4>
                <small className="text-secondary">
                  <Shimmer width="25%" height={10} />
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerFeedbackCard;
