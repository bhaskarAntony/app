import React, { useRef } from 'react'
import './trending.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { Modal, Spinner } from 'react-bootstrap';
import YouTube from 'react-youtube';

const trendingMoviesData = [
    {
        title:"Gangnam Beauty....",
        image:"https://qqcdnpictest.mxplay.com/pic/28eb409f965536c2e680ab44ea331324/en/2x3/320x480/test_pic1681127825369.webp",
        rating:"4.5",
        year:2023,
        youtubeUrl:"https://www.youtube.com/embed/Q46W6BOO-AU?autoplay=1"
    },
    {
        title:"Gangnam Beauty",
        image:"https://qqcdnpictest.mxplay.com/pic/afd977c9cdf8a38bb6afbf64b038a256/en/2x3/320x480/test_pic1691655091512.webp",
        rating:"4.5",
        year:2023,
        youtubeUrl:"https://www.youtube.com/embed/Q46W6BOO-AU?si=vq-sz3mddCe2YAf-"
    },
    {
        title:"Gangnam Beauty",
        image:"https://qqcdnpictest.mxplay.com/pic/d33b68e4cf071fce2e7b95629dc17ebb/hi/2x3/320x480/test_pic1691531816944_badged_1691531820439.webp",
        rating:"4.5",
        year:2023,
        youtubeUrl:"https://www.youtube.com/embed/Q46W6BOO-AU?si=vq-sz3mddCe2YAf-"
    },
    {
        title:"Gangnam Beauty",
        image:"https://qqcdnpictest.mxplay.com/pic/97b24da0eed5d345066d94ac5834db9c/en/2x3/320x480/test_pic1677049393778.webp",
        rating:"4.5",
        year:2023,
        youtubeUrl:"https://www.youtube.com/embed/Q46W6BOO-AU?si=vq-sz3mddCe2YAf-"
    },
    {
        title:"Gangnam Beauty",
        image:"https://qqcdnpictest.mxplay.com/pic/c06ebe266f3e7406eb14ab09f3e73fb5/en/2x3/320x480/test_pic1685710183042.webp",
        rating:"4.5",
        year:2023,
        youtubeUrl:"https://www.youtube.com/embed/Q46W6BOO-AU?si=vq-sz3mddCe2YAf-"
    },
    {
        title:"Gangnam Beauty",
        image:"https://qqcdnpictest.mxplay.com/pic/d0c1cc1a9c2fe5a17ce22e690641ba38/en/2x3/320x480/test_pic1664450598486.webp",
        rating:"4.5",
        year:2023,
        youtubeUrl:"https://www.youtube.com/embed/Q46W6BOO-AU?si=vq-sz3mddCe2YAf-"
    },
    {
        title:"Gangnam Beauty",
        image:"https://qqcdnpictest.mxplay.com/pic/0930fb169d387f3cd0bdc0f920814a8b/en/2x3/320x480/test_pic1691655612185.webp",
        rating:"4.5",
        year:2023,
        youtubeUrl:"https://www.youtube.com/embed/Q46W6BOO-AU?si=vq-sz3mddCe2YAf-",
    }
]
const watchingData = [
    {
        image:"https://qqcdnpictest.mxplay.com/pic/b0d9089298292e00445707bc3335fc91/en/16x9/320x180/test_pic1668406076249.webp",
        title:"1 season, 10 Episodes",
    },
    {
        image:"https://qqcdnpictest.mxplay.com/pic/cbd5b144d2c048de46c32aca1023349d/en/16x9/320x180/test_pic1635498529345_badged_1659566110905.webp",
        title:"1 season, 10 Episodes"
    },
    {
        image:"https://qqcdnpictest.mxplay.com/pic/8820216ac8cdf766a74506fddbdedeb2/en/16x9/320x180/test_pic1665566493131.webp",
        title:"1 season, 10 Episodes"
    },
    {
        image:"https://qqcdnpictest.mxplay.com/pic/65fa18732735ab104e58fa91a2144c8f/en/16x9/320x180/test_pic1666767654984.webp",
        title:"1 season, 10 Episodes"
    },
    {
        image:"https://qqcdnpictest.mxplay.com/pic/65fa18732735ab104e58fa91a2144c8f/en/16x9/320x180/test_pic1666767654984.webp",
        title:"1 season, 10 Episodes"
    },
    {
        image:"https://qqcdnpictest.mxplay.com/pic/c8f020e263cb5e5bf056b41741bbde6f/en/16x9/320x180/test_pic1666864281239.webp",
        title:"1 season, 10 Episodes"
    },
    {
        image:"https://qqcdnpictest.mxplay.com/pic/db173d4a26f8b242fc2ced79aaff7fd4/en/16x9/320x180/be341428bde4fa0dbfc77e8f05b69e0c_1280x720_badged_1664524553035.webp",
        title:"1 season, 10 Episodes"
    },
    {
        image:"https://qqcdnpictest.mxplay.com/pic/4cd4aaff1d66a7a52cb481c8640771c2/en/16x9/320x180/7dfb5a719f8ae00787c81c276ba65e6c_1920x1080.webp",
        title:"1 season, 10 Episodes"
    }
]
function Trending() {
    const [slidesToShow, setSlidesToShow] = useState(6);
    //to run the function continue
    useEffect(()=>{
        const handleResize = ()=>{
            if(window.innerWidth<=400){
                setSlidesToShow(1)
            }
            else if(window.innerWidth<=600){
                setSlidesToShow(2)
            } else if(window.innerWidth<=900){
                setSlidesToShow(3)
            } 
            else if(window.innerWidth<=1100){
                setSlidesToShow(4)
            }
            else if(window.innerWidth<=1300){
                setSlidesToShow(5)
            } else{
                setSlidesToShow(6)
            }
        }
        handleResize();
        window.addEventListener('resize', handleResize)
       return ()=>{
        window.removeEventListener('resize', handleResize)
       }

    }, [])

    const settings = {
        dots:false,
        infinite:true,
        speed:500,
        slidesToShow: slidesToShow,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:1000
    }

    const [showModal, setShowModal] = useState(false)
    const PlayerRef = useRef(null)
    const [isLoading, setIsLoading] = useState(true)

    // useEffect(()=>{
    //     if(PlayerRef.current){
    //         PlayerRef.current.internalPlayer.addEventListener('onStateChange', (event)=>{
    //             if(event.data === 1){
    //                 setIsLoading(false)
    //             }
    //         })
    //     }
    // }, [PlayerRef])

    const handleIframeLoad = () =>{
        setIsLoading(false)
    }

    const handleShowModal = () =>{
        setShowModal(true)
    }

    const handleCloseModal = () =>{
        setShowModal(false)
    }
    const youtubeOptions = {
        width:"100%",
        height:"315"
    }

  return (
    <div className='bg-black py-5 px-2 container-fluid overflow-hidden' >
      <h1 className="fs-1 text-white mb-5">Trending Shows</h1>
        <div className="row">
      <Slider {...settings} >
      {
        trendingMoviesData.map((item, index)=>(
            <div className="col-12 col-sm-12 col-md-4 col-lg-2 p-2">
                <div className="trending-card text-white p-2">
                    <img src={item.image} alt="" className='w-100 rounded-3 mb-2' />

                    <div className="movie-play" onClick={handleShowModal}>
                    <i class="bi bi-play-fill"></i>
                    </div>

                    <p className="fs-5">{item.title}</p>
                    <div className="d-flex justify-content-between">
                        <p className="fs-6">rating {item.rating}</p>
                        <p className="fs-6 text-end">{item.year}</p>
                    </div>
                </div>
                <Modal show={showModal} onHide={handleCloseModal} size='lg' centered >
                    <Modal.Header closeButton>
                        {item.title}
                    </Modal.Header>

                    <Modal.Body className='modal-body'>
                    {isLoading ? (
                    <div className="text-center loader">
                      <Spinner animation="border" variant="primary" />
                    </div>
                  ) : (
                   null
                  )}
                   <iframe
                      src={item.youtubeUrl}
                      frameBorder="0"
                      width="100%"
                      height="315"
                      title={item.title}
                      allowFullScreen
                      onLoad={handleIframeLoad}
                    ></iframe>

                       
                    </Modal.Body>
                    <Modal.Footer>
                    <div className="d-flex justify-content-between w-100">
                        <p className="fs-6">rating {item.rating}</p>
                        <p className="fs-6 text-end">{item.year}</p>
                    </div>
                    </Modal.Footer>
                </Modal>
            </div>
        ))
      }
      </Slider>
        </div>

    <h1 className="fs-1 text-white py-5">Continue Watching</h1>
    <div className="row">
        <Slider {...settings}>
            {
                watchingData.map((item, index)=>(
                    <div className="col-12 col-sm-12 col-md-4 col-lg-2 p-2">
                        <div className="watching-card">
                            <img src={item.image} alt="" className='w-100 rounded-3'/>
                            <div className="overlap-watching-card">
                                <small className='watching-tag'>Recomended</small>

                                <p className='fs-6 text-white'>{item.title}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </Slider>
    </div>
      
    </div>
  )
}

export default Trending
