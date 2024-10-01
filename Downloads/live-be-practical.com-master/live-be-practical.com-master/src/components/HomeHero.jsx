import React, { useEffect, useState } from 'react';
import '../styles/homehero.css';
import { Carousel } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Highlight from './Highlight';
import HeroRegister from './HeroRegister';
import DialogModal from './DialogModel';
import { homeHeroApi } from '../Data/DataFetcher';
import heroImage from '../images/hero-image.svg'
import home_video from '../images/home-video.mp4'
import Slider from 'react-slick';
import Companies from './companies/Companies';
import DownloadModal from './Brocher/DownloadModal';

const home = [
  {
    heading: "High Paid Salaries & Continuous Career Growth",
    subheading: "Build skills with courses, certificates, and degrees online from world-class universities and companies.",
    image: "https://images.pexels.com/photos/7606074/pexels-photo-7606074.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    heading: "Be practical's Job Oriented Training",
    subheading: "Build skills with courses, certificates, and degrees online from world-class universities and companies.",
    image: "https://images.pexels.com/photos/7606074/pexels-photo-7606074.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    heading: "High Paid Salaries & Continuous Career Growth",
    subheading: "Build skills with courses, certificates, and degrees online from world-class universities and companies.",
    image: "https://images.pexels.com/photos/7606074/pexels-photo-7606074.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    heading: "Be practical's Job Oriented Training",
    subheading: "Build skills with courses, certificates, and degrees online from world-class universities and companies.",
    image: "https://images.pexels.com/photos/7606074/pexels-photo-7606074.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];
const imagesData = [
  "https://img.freepik.com/free-photo/diverse-team-adult-students-working-together_74855-1814.jpg?size=626&ext=jpg&ga=GA1.1.874872603.1694171926&semt=ais",
  "https://img.freepik.com/free-photo/line-coworkers-using-laptops-training-room-class_74855-3568.jpg?size=626&ext=jpg&ga=GA1.1.874872603.1694171926&semt=ais",
  "https://img.freepik.com/free-photo/pretty-girl-group-young-people-casual-clothes-working-modern-office_146671-16507.jpg?size=626&ext=jpg&ga=GA1.1.874872603.1694171926&semt=ais",
  'https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241234.jpg?size=626&ext=jpg&ga=GA1.1.874872603.1694171926&semt=ais'
]

function HomeHero() {
  const [showModal, setShowModal] = useState(false);
  const [showBrocherModal, setShowBrocherModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [homeData, sethomeData] = useState([]);
  useEffect(() => {
    homeHeroApi
        .then((data) => {
          sethomeData(data)
          setLoading(false)
        })
        .catch((error) => console.error('Error fetching advantages:', error));
    }, []);
    const openModal = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    const openBrocherModal = () => setShowBrocherModal(true);
    const handleBrocherClose = () => setShowBrocherModal(false);

  useEffect(() => {
    AOS.init();
  }, []);


  const settings = {
    dots: true,
    infinite: true,
    speed:1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const Imagesettings = {
    dots: false,
    infinite: true,
    speed:1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase:'linear',
    fade:true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <section className='hero container-fluid'>
      <div className="hero-1">
      <div className="custom-carousel container-fluid">
      <div className="row align-items-center">
      <div className="col-12 col-sm-12 col-md-8">
     <Slider {...settings}>
     {home.map((item, index) => (
            <Carousel.Item key={index}>
                  <div className="hero-text p-lg-2 p-md-2 p-1 py-3 ">
                    <h1 className="display-3 text-bold text-start color-font fw-bold">{item.heading}</h1>
                    <p className="fs-4 my-4 text-start">{item.subheading}</p>
                    <div className="carousel-footer w-100 d-flex flex-wrap gap-2 py-4">
                      <button className='btn-main-outline-dark border-0  hero-btn bg-gray2 text-white' onClick={openModal}>Apply Now <i class="bi bi-chevron-double-right"></i></button>
                      <button className='btn-prm  hero-btn'onClick={openBrocherModal}>Download Broucher<i class="bi bi-chevron-double-right"></i></button>
                    </div>
                  </div>
            </Carousel.Item>
          ))}
     </Slider>
        </div>
        <div className="col-12 col-sm-12 col-md-4">
   {/* <video src={home_video} className='w-100 border-0 bg-transparent' autoPlay muted loop></video> */}
   {/* <Slider {...Imagesettings}>
   {
    imagesData.map((item, index)=>(
   <div className="hero-image d-flex align-items-center justify-content-center h-100">

    <img src={item} alt="hero image" key={index}  className='w-100'/>
   </div>

    ))

   }

   </Slider> */}
<div className="hero-right">
<img src="https://img.freepik.com/free-vector/webinar-concept-illustration_114360-4764.jpg?t=st=1707483345~exp=1707483945~hmac=c5c40be2d50c5fee58d36c16d992b292b859def7f2d371d28805d5e00a2a637b" alt="" className="w-100" />
</div>
                </div>
                 </div>
      </div>
      <Highlight data={homeData} />
      <Companies/>
      <HeroRegister />
      </div>

      <DialogModal
        show={showModal}
        onHide={handleClose}
      />
     <DownloadModal showModal={showBrocherModal} hideModal={handleBrocherClose} link={"d"}/>

    </section>
  );
}

export default HomeHero;
