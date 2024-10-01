import React, { useEffect, useState } from 'react';
import '../../components/ourCourses/ourCourses.css';
import { allCourseApi } from '../../Data/DataFetcher';
import Aos from 'aos';
import { Link } from 'react-router-dom';
import Coursecard from '../Coursecard/Coursecard';
import DownloadModal from '../Brocher/DownloadModal';
import TalkToExpert from '../../Modals/TalkToExpert';
import { formatDate } from '../../js/utils';

function AllCourses() {
  const [loading, setLoading] = useState(false);
  const [CourseData, setCourseData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [brocher, setBrocher] = useState("");
  const [showMore, setShowMore] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await allCourseApi;
        setLoading(false);
        setCourseData(data.courses);
        console.log("data", data);
      } catch (error) {
        setLoading(true);
        console.error('Error fetching CoursePage:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    Aos.init(); // Initialize AOS
  }, []);

  const handleClick = (id, subCourseId) => {
    localStorage.setItem('selectedCourseId', id);
    localStorage.setItem('selectedSubCourseId', subCourseId);
  };

  const openModal = (link) => {
    setShowModal(true);
    setBrocher(link);
  }

  const handleClose = () => setShowModal(false);

  const handleShowMore = (index) => {
    setShowMore((prev) => ({ ...prev, [index]: !prev[index] }));
  }

  return (
    <div className='container-fluid our-courses p-lg-5 p-3'>
      <h1 className="heading"><i class="bi bi-star-fill fs-3 text-main-danger mx-2"></i>Our Courses<i class="bi bi-star-fill fs-3 text-main-danger mx-2"></i></h1>
      <p className="banner-sub-text text-800 text-center">Acquire real-world skills and real world projects with our best trainers and mentors and 100% of placement assistance.</p>
      <div className="all-our-courses mt-5">
        {
          CourseData.map((item, index) => (
            <div key={index}>
              <div className="our-course-card-wrapper">
                <div className="container our-course-card p-lg-5 p-md-3 p-sm-4" data-aos="fade-right">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-7">
                      <div className="course-left">
                        <div className="mb-2 d-flex gap-2 flex-wrap align-items-center">
                          <div class="dot">
                            <span class="glow"></span>
                          </div>
                          {/* <span className='fs-5 text-900 shake-card'>{formatDate(item.details.admisionStart)}</span> */}
                        </div>
                        <p className="text-white rounded-2 p-1 tag">
                          <i class="bi bi-star-fill text-white mx-2"></i> Job Ready Program <i class="bi bi-star-fill text-white mx-2"></i>
                        </p>
                        <h1 className="fs-3 text-900">{item.courseName}</h1>
                        {/* <p className="fs-6">{item.heroSubtitle}</p> */}
                        <div className="course-info rounded-4 row mb-2 p-1 px-3 m-auto">
                          <div className="col-12 col-md-6 col-lg-6">
                            <div className="d-flex align-items-center gap-2 w-100 mb-2">
                              <div className="course-icon bg-white d-flex align-items-center rounded-2 justify-content-center p-3">
                                <i class="bi bi-calendar3 text-yellow fs-5"></i>
                              </div>
                              <div>
                                <span>
                                  <span className="text-secondary d-block">Duration</span>
                                  <span className='text-900'>{item.details.Duration}</span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-lg-6">
                            <div className="d-flex align-items-center gap-2 mb-2">
                              <div className="course-icon bg-white d-flex align-items-center rounded-2 justify-content-center p-3">
                                <i class="bi bi-calendar3 text-green fs-5"></i>
                              </div>
                              <div>
                                <span>
                                  <span className="text-secondary d-block">Highest Remuneration 
                                  </span>
                                  <span className='text-900'>{item.HighestCtc}</span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="course-info rounded-4 row mb-2 p-1 px-3 m-auto">
                          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <div className="d-flex align-items-center gap-2 mb-2">
                              <div className="course-icon bg-white d-flex align-items-center rounded-2 justify-content-center p-3">
                                <i class="bi bi-camera-video-fill text-yellow fs-6"></i>
                              </div>
                              <div>
                                <span>
                                  <span className="text-secondary d-block">Mode Of Training</span>
                                  <span className='text-900 '>Online & Offline</span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <div className="d-flex align-items-center gap-2 mb-2">
                              <div className="course-icon bg-white d-flex align-items-center rounded-2 justify-content-center p-3">
                                <i class="bi bi-person-check-fill text-green fs-6"></i>
                              </div>
                              <div>
                                <span>
                                  <span className="text-secondary d-block">Advantages</span>
                                  <span className='text-900'>Job placement services                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="course-btns row mt-3">
                          <div className="col-12 col-md-6 col-lg-6">
                            <Link to={`/${item.seo.canonical_url}`} className="text-decoration-none" onClick={() => handleClick(item._id)}>
                              <button className="btn-gray hero-btn">Know More <i class="bi bi-arrow-up-right mb-2"></i></button>
                            </Link>
                          </div>
                          <div className="col-12 col-md-6 col-lg-6">
                            <button className="btn-gray-outline hero-btn no-deco w-100 d-block text-center" onClick={() => openModal(item.BrocherLink)}>Talk to an Expert</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-5">
                      {showMore[index] || window.innerWidth >= 768 ? (
                        <div className="course-right">
                          <img src={item.courseImage} alt={item.courseImage} className="w-100" />
                          {window.innerWidth < 768 && (
                            <button className="btn-show-more mt-3" onClick={() => handleShowMore(index)}>Show Less</button>
                          )}
                        </div>
                      ) : (
                        <button className="btn-show-more mt-3" onClick={() => handleShowMore(index)}>Show More</button>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {item.subCourses.map((subItem, subIndex) => (
                <div className="our-course-card-wrapper" key={subIndex}>
                  <div className="container our-course-card p-lg-5 p-md-3 p-sm-4" data-aos="fade-right">
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-6 col-lg-7">
                        <div className="course-left">
                          <div className="mb-2 d-flex gap-2 flex-wrap align-items-center">
                            <div class="dot">
                              <span class="glow"></span>
                            </div>
                            {/* <span className='fs-5 text-900 shake-card'>{subItem.details.admisionStart}</span> */}
                          </div>
                          <p className="text-white rounded-2 p-1 tag">
                            <i class="bi bi-star-fill text-white mx-2"></i> Job Ready Program <i class="bi bi-star-fill text-white mx-2"></i>
                          </p>
                          <h1 className="fs-3 text-900">{subItem.courseName}</h1>
                          {/* <p className="fs-6">{subItem.heroSubtitle}</p> */}
                          {/* <p className="fs-6">Learn with Real Work-Ex. Join the best product-based companies with our react time projects and best experienced trainers.</p> */}
                         
                          <div className="course-info rounded-4 row mb-2 p-1 px-3 m-auto">
                            <div className="col-12 col-md-6 col-lg-6">
                              <div className="d-flex align-items-center gap-2 w-100 mb-2">
                                <div className="course-icon bg-white d-flex align-items-center rounded-2 justify-content-center p-3">
                                  <i class="bi bi-calendar3 text-yellow fs-5"></i>
                                </div>
                                <div>
                                  <span>
                                    <span className="text-secondary d-block">Duration</span>
                                    <span className='text-900'>{subItem.details.Duration}</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-6">
                              <div className="d-flex align-items-center gap-2 mb-2">
                                <div className="course-icon bg-white d-flex align-items-center rounded-2 justify-content-center p-3">
                                  <i class="bi bi-calendar3 text-green fs-5"></i>
                                </div>
                                <div>
                                  <span>
                                    <span className="text-secondary d-block">Highest Salary</span>
                                    <span className='text-900'>{subItem.HighestCtc}</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="course-info rounded-4 row mb-2 p-1 px-3 m-auto">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                              <div className="d-flex align-items-center gap-2 mb-2">
                                <div className="course-icon bg-white d-flex align-items-center rounded-2 justify-content-center p-3">
                                  <i class="bi bi-camera-video-fill text-yellow fs-6"></i>
                                </div>
                                <div>
                                  <span>
                                    <span className="text-secondary d-block">Mode Of Training</span>
                                    <span className='text-900 '>Online & Offline</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                              <div className="d-flex align-items-center gap-2 mb-2">
                                <div className="course-icon bg-white d-flex align-items-center rounded-2 justify-content-center p-3">
                                  <i class="bi bi-person-check-fill text-green fs-6"></i>
                                </div>
                                <div>
                                  <span>
                                    <span className="text-secondary d-block">Advantages</span>
                                    <span className='text-900'>Placement Activities</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="course-btns row mt-3">
                            <div className="col-12 col-md-6 col-lg-6">
                              <Link to={`/${subItem.seo.canonical_url}`} className="text-decoration-none" onClick={() => handleClick(item._id, subItem._id)}>
                                <button className="btn-gray hero-btn">Know More <i class="bi bi-arrow-up-right mb-2"></i></button>
                              </Link>
                            </div>
                            <div className="col-12 col-md-6 col-lg-6">
                              <button className="btn-gray-outline hero-btn" onClick={() => openModal(subItem.BrocherLink)}>Talk to an Expert</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-5">
                        {showMore[`${index}-${subIndex}`] || window.innerWidth >= 768 ? (
                          <div className="course-right flex-column">
                            <img src={subItem.courseImage} alt={subItem.courseImage} className="w-100" />
                            {window.innerWidth < 768 && (
                              <button className="btn-show-more mt-3" onClick={() => handleShowMore(`${index}-${subIndex}`)}>Show Less</button>
                            )}
                          </div>
                        ) : (
                          <button className="btn-show-more mt-3" onClick={() => handleShowMore(`${index}-${subIndex}`)}>Show More</button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))
        }
        <TalkToExpert showModal={showModal} hideModal={handleClose} />
      </div>
      <div className="text-center">
        {/* <Link to="/" className="text-decoration-none"> <button className="btn-danger hero-btn">Still are you thinking</button></Link> */}
      </div>
    </div>
  )
}

export default AllCourses;
