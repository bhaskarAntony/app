import React, { useEffect, useState } from 'react'
import '../styles/youtubevideo.css'
import { Carousel } from 'react-bootstrap';
import AOS from 'aos';
import ReadMore from '../Extra/ReadMore';
import { youtubeVideos } from '../Data/DataFetcher';
import ShimmerCard from '../shimmer effects/ShimmerCard';
import Slider from 'react-slick';
import { Shimmer } from 'react-shimmer';
import VideosModal from '../Modals/VideosModal';

function StudentsPlaced() {
  const [loading, setLoading] = useState(true)
    const [youtubeVideosData, setYoutubeVideosData] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [url, setUrl] = useState('')
    const playVideo = (url)=>{
      setModalOpen(true)
      setUrl(url)
    }
    const closeModal = () => {
      setUrl('')
      setModalOpen(false); // Close the modal
    };
    useEffect(() => {
        youtubeVideos
          .then((data) => {
            setYoutubeVideosData(data)
            setLoading(false)
          })
          .catch((error) => console.error('Error fetching advantages:', error));
      }, []);

  const extractVideoId = (link) => {
    const regex = /(?:\?v=|\/embed\/|\.be\/|\/v\/|\/e\/|watch\?v=|\/watch\?v=|\/watch\?feature=player_embedded&v=|%2Fvideos%2F|embed\/|youtu.be\/|v=|u\/\w\/|embed\?src=|video\/|embed\?video_id=)([^#\&\?]*).*/;
    const match = link.match(regex);
    return match && match[1];
  };

  const getThumbnailUrl = (videoId) =>
    `https://img.youtube.com/vi/${videoId}/default.jpg`;
    
    const [slidesToShow, setSlidesToShow] = useState(6); // Default to showing 3 slides

    useEffect(() => {
      // Check the screen width and update the number of slides to show
      const handleResize = () => {
        if (window.innerWidth <= 600) {
          setSlidesToShow(1); // On smaller screens, show only 1 slide
        }
        else if(window.innerWidth<=800) {
          setSlidesToShow(2); // On wider screens, show 3 slides
        } else if(window.innerWidth<=900) {
          setSlidesToShow(2); // On wider screens, show 3 slides
        }
        else{
            setSlidesToShow(4); // On wider screens, show 3 slides
        }
      };
    
      // Call the handleResize function initially and add a resize event listener
      handleResize();
      window.addEventListener('resize', handleResize);
    
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: slidesToShow,
            slidesToScroll: 1,
            autoplay: true,
            centerMode:true,
            centerPadding: '60px',
            autoplaySpeed: 1000, // Change delay as needed
          };
  return (
    <section className='py-5 youtube-container bg-texture' id="placed">
        <h3 className="fs-1 text-900 text-center text-white">What our students says about <span className="text-main-danger">Be Practical</span></h3>
        <p className=" text-center p-large1 text-main-danger">We don’t just give <span className="text-white">certification but outcomes!</span></p>
      <div className="students-placed">
      <div className=" container-fluid  rounded-5">
          <div className="row">
         
          {loading ? (
             <Slider {...settings}>
              {
              Array(9)
                .fill(null)
                .map((_, index) => (
                  <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center p-3">
                  <div className="youtube-card bg-gray3 border-b w-100">
                  <div className="youtube-header mb-3">

                                    <Shimmer width="100%" height="100%"/>
                                 
                                    
                              </div>
                              <div className="youtube-body">
                              
                              <Shimmer width="70%" height={15} className='mb-3'/>
                                  <Shimmer width="100%" height={10} className='mb-2'/>
                                  <Shimmer width="90%" height={10} className='mb-2'/>
                                  <Shimmer width="80%" height={10} className='mb-2'/>
                                </div>
                                <div className="youtube-footer">
      
                                </div>
                  </div>
                      </div>
                ))
          }
                </Slider>
            ):(
              <Slider {...settings}>
                {
           youtubeVideosData.map((item, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3 p-1 h-100">
              <div className="youtube-card bg-gray3 border-b w-100 h-100">
                <div className="youtube-header mb-3" onClick={()=>{playVideo(extractVideoId(item.url))}}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`YourVideoLinkHere/${extractVideoId(item.url)}`}
                    
                  >
                    <img
                      src={getThumbnailUrl(extractVideoId(item.url))}
                      alt={`Thumbnail ${index}`}
                      className="w-100 h-100"
                    />
                  </a>
                  <div className="youtube-play-btn d-flex align-items-center justify-content-center">
                    <a className="play-icon">
                      <div className="d-flex">
                        <i className="bi bi-play-fill fs-1"></i>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="youtube-body text-center">
                  <a href={`YourVideoLinkHere/${extractVideoId(item.url)}`} className='text-main-danger fs-6 text-900 mt-2 text-decoration-none'>{item.title}</a>
                  <small className='text-white mt-3'><ReadMore text={item.description} maxLength={150} /></small>
                </div>
              </div>
            </div>
          ))}
            </Slider>
            )}
              </div>
          </div>
      </div>
      <VideosModal isOpen={modalOpen} youtubeUrl={url} onClose={closeModal} title="Student talk ⭐" />
    </section>
  )
}

export default StudentsPlaced
