import React, { useEffect, useState } from 'react'
import  './style.css'
import Aos from 'aos';
import HeroRegister from '../HeroRegister';
import heroVideo from '../../videos/heroVideos.mp4'
import heroVideo2 from '../../images/video1.mp4'
import heroVideo3 from '../../images/video3.mp4'
import DownloadModal from '../Brocher/DownloadModal';
import justdial from '../../icons/justdial.png'
import DialogModel from '../DialogModel';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { companies } from '../../Data/DataFetcher';
import Feedback from '../Feedback';

function Hero() {
  const [showModal, setShowModal] = useState(false)
  const [showModal2, setShowModal2] = useState(false)
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const [companiesData, setCompaniesData] = useState([]);
  useEffect(() => {
    companies
      .then((data) => {
        setCompaniesData(data);
      })
      .catch((error) => {
        console.error('Error fetching companies:', error);
       
      });
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
    autoplay: true,
    centerMode: false,
    autoplaySpeed: 2000, // Change delay as needed
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    // You can use Axios to make a POST request to your backend server
    // Example:
    // axios.post('your-backend-url', formData)
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
  }

  const handleClose = () => {
    setShowModal(false);
  }
  const openModal = () => {
    setShowModal(true);
  }

  const handleClose2 = () => {
    setShowModal2(false);
  }
  const openModal2 = () => {
    setShowModal2(true);
  }
  const data = [
    {
      image:"./images/placed students/p1.jpg"
    },
    {
      image:"./images/placed students/p2.jpg"
    },
    {
      image:"https://bepractical.s3.us-east-2.amazonaws.com/surya.jpg"
    },
    {
      image:"./images/placed students/p3.jpeg"
    },
    {
      image:"./images/placed students/p4.jpeg"
    },
    {
      image:"./images/placed students/p5.jpeg"
    },
    {
      image:"https://bepractical.s3.us-east-2.amazonaws.com/tejashwini.jpg"
    },
    {
      image:"https://bepractical.s3.us-east-2.amazonaws.com/deepa.jpg"
    },
    {
      image:"./images/placed students/p6.jpeg"
    },
    {
      image:"./images/placed students/p7.jpeg"
    },
    {
      image:"https://bepractical.s3.us-east-2.amazonaws.com/pillai.jpg"
    },
    {
      image:"https://bepractical.s3.us-east-2.amazonaws.com/indrani.jpg"
    },
    {
      image:"./images/placed students/p8.jpeg"
    }
  ]

  const data3 = [
   
    {
      image:"./images/placed students/p2.jpg"
    },
    {
      image:"https://bepractical.s3.us-east-2.amazonaws.com/pillai.jpg"
    },
    {
      image:"./images/placed students/p1.jpg"
    },
    {
      image:"./images/placed students/p4.jpeg"
    },
    {
      image:"https://bepractical.s3.us-east-2.amazonaws.com/deepa.jpg"
    },
    {
      image:"./images/placed students/p5.jpeg"
    },
    {
      image:"https://bepractical.s3.us-east-2.amazonaws.com/surya.jpg"
    },
    {
      image:"./images/placed students/p8.jpeg"
    },
    {
      image:"./images/placed students/p3.jpeg"
    },
    
    {
      image:"https://bepractical.s3.us-east-2.amazonaws.com/tejashwini.jpg"
    },
    {
      image:"./images/placed students/p6.jpeg"
    },
    {
      image:"./images/placed students/p7.jpeg"
    },
    {
      image:"https://bepractical.s3.us-east-2.amazonaws.com/indrani.jpg"
    },
    
  ]


  const data2 = [
    
    {
      image:"./images/placed students/p2.jpg"
    },
    {
      image:"https://bepractical.s3.us-east-2.amazonaws.com/surya.jpg"
    },
    {
      image:"./images/placed students/p3.jpeg"
    },
    {
      image:"https://bepractical.s3.us-east-2.amazonaws.com/indrani.jpg"
    },
    {
      image:"./images/placed students/p1.jpg"
    },
    {
      image:"./images/placed students/p4.jpeg"
    },
      {
        image:"https://bepractical.s3.us-east-2.amazonaws.com/tejashwini.jpg"
      },
      {
        image:"https://bepractical.s3.us-east-2.amazonaws.com/pillai.jpg"
      },
   
    {
      image:"./images/placed students/p6.jpeg"
    },
    {
      image:"./images/placed students/p5.jpeg"
    },
    {
      image:"https://bepractical.s3.us-east-2.amazonaws.com/deepa.jpg"
    },
    {
      image:"./images/placed students/p8.jpeg"
    },
    {
      image:"./images/placed students/p7.jpeg"
    },
    
  ]
  return (
    <div className='main-scroller-hero'>
      {/* <div className="marquee-container">
        <marquee behavior="" direction="left" scrollamount="10">
          <div className="m-text">
          <p className='display-2'>is defined <span className="c">Certificates</span>  but never used </p>
        <p className='display-4'>is defined <span className="c">Certificates</span>  but never used </p>
          </div>
        </marquee>
        <marquee behavior="" direction="right" scrollamount="15">
          <div className="m-text">
          <p className='display-2'>is defined <span className="c">Certificates</span>  but never used </p>
        <p className='display-4'>is defined <span className="c">Certificates</span>  but never used </p>
          </div>
        </marquee>
        <marquee behavior="" direction="left" scrollamount="20">
          <div className="m-text">
          <p className='display-2'>is defined <span className="c">Certificates</span>  but never used </p>
        <p className='display-4'>is defined <span className="c">Certificates</span>  but never used </p>
          </div>
        </marquee>
        <marquee behavior="" direction="right" scrollamount="25">
          <div className="m-text">
          <p className='display-2'>is defined <span className="c">Certificates</span>  but never used </p>
        <p className='display-4'>is defined <span className="c">Certificates</span>  but never used </p>
          </div>
        </marquee>
        <marquee behavior="" direction="left" scrollamount="15">
          <div className="m-text">
          <p className='display-2'>is defined <span className="c">Certificates</span>  but never used </p>
        <p className='display-4'>is defined <span className="c">Certificates</span>  but never used </p>
          </div>
        </marquee>
        <marquee behavior="" direction="right" scrollamount="7">
          <div className="m-text">
          <p className='display-2'>is defined <span className="c">Certificates</span>  but never used </p>
        <p className='display-4'>is defined <span className="c">Certificates</span>  but never used </p>
          </div>
        </marquee>
      </div> */}
        
      <div className="main-hero-parent" >  
                  <div className="container-fluid main-hero rounded-md-5">
           <div className="row">
            <div className="col-12 col-md-6">
              <div className="hero-left text-dark p-md-3 py-5">
              <h1 className="display-3 fw-bold text-black" >High Paid Salaries & Continuous Career Growth 
          </h1>
        <p className="fs-5">Acquire real-world skills and real world projects with our best trainers and mentors and 100% of placement assistance.</p>
          <ul className='hero-points'>
            <li className='fs-6'>Industry expert trainers</li>
            <li className='fs-6'>Job oriented syllabus</li>
            <li className='fs-6'>Flexible timings</li>
            <li className='fs-6'>Corporate style teaching</li>
            <li className='fs-6'>Real-time Project</li>
            <li className='fs-6'>Industry recognized certificate</li>
          </ul>
      
         <div className="weareon d-flex gap-3 mt-3 justsify-content-center align-items-center">
            <div className="google w-img" data-aos="zoom-in-up">
              <a href="https://www-deccanherald-com.cdn.ampproject.org/v/s/www.deccanherald.com/amp/story/brandspot%2Fsponsored%2Funsung-revolution-top-cloud-computing-course-in-bangalore-2789628?amp_gsa=1&amp_js_v=a9&usqp=mq331AQIUAKwASCAAgM%3D#amp_tf=From%20%251%24s&aoh=17013151307410&referrer=https%3A%2F%2Fwww.google.com&ampshare=https%3A%2F%2Fwww.deccanherald.com%2Fbrandspot%2Fsponsored%2Funsung-revolution-top-cloud-computing-course-in-bangalore-2789628">  <img src="https://upload.wikimedia.org/wikipedia/en/d/d7/Deccan_Herald_logo.svg" alt="we are on deccan-herald" /></a>
            </div>
            <div className="google w-img" data-aos="zoom-in-up">
             <a href="https://www.hindustantimes.com/brand-stories/be-practical-offers-full-stack-developer-course-in-bangalore-beginning-of-new-era-in-job-oriented-learning-101700731258445.html"> <img src="https://bepractical.s3.us-east-2.amazonaws.com/times-logo.png" alt="we are on hindustan times" /></a>
            </div>
            <div className="google w-img" data-aos="zoom-in-up">
           <a href="https://www-mid--day-com.cdn.ampproject.org/v/s/www.mid-day.com/amp/brand-media/article/transform-your-career-with-the-best-data-science-course-in-bangalore-at-be--23322174?amp_gsa=1&amp_js_v=a9&usqp=mq331AQIUAKwASCAAgM%3D#amp_tf=From%20%251%24s&aoh=17014906767458&referrer=https%3A%2F%2Fwww.google.com&ampshare=https%3A%2F%2Fwww.mid-day.com%2Fbrand-media%2Farticle%2Ftransform-your-career-with-the-best-data-science-course-in-bangalore-at-be--23322174">  <img src="https://bepractical.s3.us-east-2.amazonaws.com/mid-day-logo.png" alt="we are on mid-day" /></a>
            </div>
          </div>
          <div className="d-flex gap-3 mt-4 flex-wrap">
       <button className='btn-danger hero-btn' onClick={openModal}>Download Broucher<i class="bi bi-chevron-double-right"></i></button>
          <button className='btn btn-outline-dark p-3 hero-btn' onClick={openModal2}>Free Master Classes<i class="bi bi-chevron-double-right"></i></button>
       </div>
          {/* <div className="social-container mt-5 d-flex gap-2">
            <div className="google px-3 w-100 p-2" data-aos="zoom-in-right">
           <span className="fw-bold">Google</span>
              <span className='small mx-1'>rating 4.6</span>
              <div className='d-flex gap-1 text-warning'>
                <i className='bi bi-star-fill'></i>
                <i className='bi bi-star-fill small'></i>
                <i className='bi bi-star-fill small'></i>
                <i className='bi bi-star-fill small'></i>
                <i className='bi bi-star-fill small'></i>
              </div>
            </div>
            <div className="google px-3 w-100 p-2" data-aos="zoom-in-left">
              <span className="fw-bold">Justdial</span>
              <span className='small mx-1 text-secondary'>rating 4.6</span>
              <div className='d-flex gap-1 text-warning'>
                <i className='bi bi-star-fill'></i>
                <i className='bi bi-star-fill small'></i>
                <i className='bi bi-star-fill small'></i>
                <i className='bi bi-star-fill small'></i>
                <i className='bi bi-star-fill small'></i>
              </div>
            </div>
          </div> */}
        
              </div>
            </div>
            <div className="col-12 col-md-6 p-0">
              <div className="hero-right">
                {/* <img src={brand} alt="" className='w-100'/>
                <div className="image-text" data-aos="fade-up">
                  <h1 className="fs-5 fw-bold">HARISH</h1>
                  <p className="small">As a creator myself, I have faced this problem firsthand. Using 5+ platforms for a digital business is complicated. I have personally been using this and making 6 figure monthly revenue for the past year.
                  </p>
                </div> */}

                <div className="hero-grid p-2">
                  <div className="row">
                    <div className="col-6">
                    <div className="grid-left">
                    {/* <img src="https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241221.jpg?t=st=1710158771~exp=1710162371~hmac=492da64f760f0c10f296c90526d733fd0c1b90686e24202cffabe4e962e85f21&w=740" alt=""  className='w-100 rounded-3 hero-large-one'/> */}
                    {/* <video src={heroVideo2}  autoPlay muted loop className='w-100 hero-large-one rounded-4'></video>   */}
                    {/* <img src="https://bepractical.s3.us-east-2.amazonaws.com/surya.jpg" alt="" className='w-100 rounded-4' /> */}
                    <div className="p-images">
                    <Slider {...settings}>
                      {data.map((item, index) => (
                        <div className="col-12" key={index}>
                          <div className="company-card">
                            <img src={item.image} alt="company" className='w-100' />
                          </div>
                        </div>
                      ))}
                    </Slider>
                    </div>
                    <div className="hero-info d-flex align-items-center  rounded-4 p-2 py-4 my-3 gap-2">
                      <img src="https://cdn-icons-png.freepik.com/256/281/281764.png?ga=GA1.1.874872603.1694171926&" alt="" width={40} />
                      <div>
                        <h4 className="fs-4">Google</h4>
                        <div className='d-flex gap-1 text-warning'>
                          <i className='bi bi-star-fill small'></i>
                          <i className='bi bi-star-fill small'></i>
                          <i className='bi bi-star-fill small'></i>
                          <i className='bi bi-star-fill small'></i>
                          <i className='bi bi-star-fill small'></i>
                        </div>
                      </div>
                    </div>
                    <div className="p-images">
                    <Slider {...settings}>
                      {data2.map((item, index) => (
                        <div className="col-12" key={index}>
                          <div className="company-card">
                            <img src={item.image} alt="company" className='w-100' />
                          </div>
                        </div>
                      ))}
                    </Slider>
                    </div>
                   
                    
                  </div>
                    </div>
                    <div className="col-6">
                <div className="grid-right">
                <div className="hero-info d-flex align-items-center rounded-3 p-2 py-4 my-3 gap-2">
                      <img src={justdial} alt="" width={40} />
                      <div>
                        <h4 className="fs-4">JustDial</h4>
                        <div className='d-flex gap-1 text-warning'>
                          <i className='bi bi-star-fill small'></i>
                          <i className='bi bi-star-fill small'></i>
                          <i className='bi bi-star-fill small'></i>
                          <i className='bi bi-star-fill small'></i>
                          <i className='bi bi-star-fill small'></i>
                        </div>
                      </div>
                    </div>
                    <div className="p-images">
                    <Slider {...settings}>
                      {data3.map((item, index) => (
                        <div className="col-12" key={index}>
                          <div className="company-card">
                            <img src={item.image} alt="company" className='w-100' />
                          </div>
                        </div>
                      ))}
                    </Slider>
                    </div>
                    <div className="row my-3">
                      <div className="col-6 d-md-block">
                    <div className="p-images">
                    <Slider {...settings}>
                      {data3.map((item, index) => (
                        <div className="col-12" key={index}>
                          <div className="company-card">
                            <img src={item.image} alt="company" className='w-100' />
                          </div>
                        </div>
                      ))}
                    </Slider>
                    </div>
                      </div>
                      <div className="col-6  ">
                        <div className="d-flex bg-light align-items-center justify-content-center h-100 p-2">
                        <img src="https://bepractical.s3.us-east-2.amazonaws.com/pillai.jpg" alt=""  className='w-100 rounded-3'/>
                        </div>
                      </div>
                      <div className="col-12 mt-3">
                    <div className='hero-company mt-3'>
                      <Slider {...settings}>
                      {companiesData.map((item, index) => (
                        <div className="col-12" key={index}>
                          <div className="company-card">
                            <img src={item.image} alt="company" className='w-100' />
                          </div>
                        </div>
                      ))}
                    </Slider>

             
                  </div>

                      </div>
                    </div>
                </div>
                </div>
                  </div>
               
             
                </div>

              </div>
            </div>
           </div>
                  </div>
                  </div>
                  <HeroRegister/>
                  <DownloadModal showModal={showModal} hideModal={handleClose} link={"https://bepractical.s3.us-east-2.amazonaws.com/BP Brochure V.06_compressed.pdf"}/>
                  <DialogModel  show={showModal2}
        onHide={handleClose2}/>
         

  
    </div>
  )
}

export default Hero
