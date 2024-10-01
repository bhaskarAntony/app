import React from 'react'
import { Shimmer } from 'react-shimmer';

function CourseShimmer() {
  return (
    <div className="our-course-card-wrapper">
  <div className="container our-course-card p-lg-5 p-md-3 p-3 py-5">
    <div className="row">
      <div className="col-12 col-md-6 col-lg-6">
        <div className="course-left">
            <p className="text-white rounded-2 p-1">
              <Shimmer width={100} height={20} />
            </p>
            <h1 className="fs-3 text-900">
              <Shimmer width="90%" height={30} />
            </h1>
            <p className="p-large1">
              <Shimmer width="80%" height={15} />
            </p>
            <p className="p-large1 mt-2">
              <Shimmer width="60%" height={15} />
            </p>
            <div className="rounded-4 row mb-2 p-2 px-3">
              <div className="col-12 col-md-6 col-lg-6">
                <div className="d-flex align-items-center gap-2 w-100 mb-2">
                  <div className="course-icon bg-white d-flex align-items-center rounded-2 justify-content-center p-3">
                    <Shimmer width={40} height={40} />
                  </div>
                  <div>
                    <p>
                      <p className="text-secondary">
                        <Shimmer width={80} height={10} />
                      </p>
                      <p className="text-900">
                        <Shimmer width={80} height={10} />
                      </p>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div className="course-icon bg-white d-flex align-items-center rounded-2 justify-content-center p-3">
                    <Shimmer width={40} height={40} />
                  </div>
                  <div>
                    <p>
                      <p className="text-secondary">
                        <Shimmer width={80} height={10} />
                      </p>
                      <p className="text-900">
                        <Shimmer width={80} height={10} />
                      </p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-4 row mb-2 p-2 px-3">
              <div className="col-12 col-md-6 col-lg-6">
                <div className="d-flex align-items-center gap-2 w-100 mb-2">
                  <div className="course-icon bg-white d-flex align-items-center rounded-2 justify-content-center p-3">
                    <Shimmer width={40} height={40} />
                  </div>
                  <div>
                    <p>
                      <p className="text-secondary">
                        <Shimmer width={80} height={10} />
                      </p>
                      <p className="text-900">
                        <Shimmer width={80} height={10} />
                      </p>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div className="course-icon bg-white d-flex align-items-center rounded-2 justify-content-center p-3">
                    <Shimmer width={40} height={40} />
                  </div>
                  <div>
                    <p>
                      <p className="text-secondary">
                        <Shimmer width={80} height={10} />
                      </p>
                      <p className="text-900">
                        <Shimmer width={80} height={10} />
                      </p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="course-btns row mt-3">
              <div className="col-12 col-md-6 col-lg-6">
                <Shimmer width="100%" height={40} />
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <Shimmer width="100%" height={40} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-6">
        <div className="course-right">
             <Shimmer width="100%" height={300} />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CourseShimmer
