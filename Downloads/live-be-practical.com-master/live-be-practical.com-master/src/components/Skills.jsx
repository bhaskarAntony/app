import React, { useState } from 'react';
import '../styles/skills.css';
import skillVideo from '../images/unlock-vedio.mp4'
import hackethon from '../images/hackethon.mp4'
import video1 from '../images/video1.mp4'
import video2 from '../images/video2.mp4'
import video3 from '../images/video3.mp4'
import VideosModal from '../Modals/VideosModal';

function Skills() {
  const [isPlay, setIsPlay] = useState(false);
  const [playVideoUrl, setPlayVideoUrl] = useState(skillVideo);
  const [modalOpen, setModalOpen] = useState(false);

  const handleVideoClick = (videoSrc) => {
    setIsPlay(true);
    setPlayVideoUrl(videoSrc);
  };
  const closeModal = () => {
    setIsPlay(false);
    setPlayVideoUrl('');
    setModalOpen(false); // Close the modal
  };
  const player = (url)=>{
    setModalOpen(true)
    setPlayVideoUrl(url)
  }


  return (
    <section className='skillsmain overflow-hidden  mb-4 text-dark'>
      <div className=" skillsecond">
      {/* <div className="section-blur"></div>
        <div className="section-blur2"></div> */}
        <div className="row align-items-center">
          <div className="col-12 col-md-12 col-lg-6 p-0">
            <div className="left h-100 p-0">
              <video src='https://bepractical.s3.us-east-2.amazonaws.com/images/unlock-vedio.mp4' autoPlay muted loop className='w-100 ' onClick={()=>{player('https://bepractical.s3.us-east-2.amazonaws.com/images/unlock-vedio.mp4')}}></video>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-6 p-0">
            <div className="right">
              <div className="text-right p-3">
                <h1 className='heading fw-bold'>Why Choose Be-Practical?</h1>
                <p className='mt-3 p-dark-small'>We offer unlimited access to the best courses from top trainers, providing hundreds of practical lessons in multiple fields.</p>
                <p></p>
                <div className="status bg-transparent">
                  <div className="row video-status d-flex g-2 bg-transparent">
                    <div className="col-3 col-sm-3 col-md-3 col-lg-3 mb-2">
                      <div className="video h-100">
                        <video src='https://bepractical.s3.us-east-2.amazonaws.com/images/hackethon.mp4' autoPlay muted loop  onClick={()=>{player('https://bepractical.s3.us-east-2.amazonaws.com/images/hackethon.mp4')}} className=''></video>
                        
                      </div>
                    </div>
                    <div className="col-3 col-sm-3 col-md-3 col-lg-3 mb-2">
                      <div className="video h-100">
                        <video src='https://bepractical.s3.us-east-2.amazonaws.com/images/video1.mp4' autoPlay muted loop  onClick={()=>{player('https://bepractical.s3.us-east-2.amazonaws.com/images/video1.mp4')}}  className=''></video>
                      </div>
                    </div>
                    <div className="col-3 col-sm-3 col-md-3 col-lg-3 mb-2">
                      <div className="video h-100">
                        <video src='https://bepractical.s3.us-east-2.amazonaws.com/images/video2.mp4' autoPlay muted loop  onClick={()=>{player('https://bepractical.s3.us-east-2.amazonaws.com/images/video2.mp4')}}  className=''></video>
                        
                      </div>
                    </div>
                    <div className="col-3 col-sm-3 col-md-3 col-lg-3 mb-2">
                      <div className="video h-100">
                        <video src='https://bepractical.s3.us-east-2.amazonaws.com/images/video3.mp4' autoPlay muted loop onClick={()=>{player('https://bepractical.s3.us-east-2.amazonaws.com/images/video3.mp4')}}  className=''></video>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <VideosModal isOpen={modalOpen} videoSrc={playVideoUrl} onClose={closeModal} title="Why you choose us?" />
    </section>
  );
}

export default Skills;
