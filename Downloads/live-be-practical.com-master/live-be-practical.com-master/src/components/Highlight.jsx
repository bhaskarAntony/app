import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import '../styles/highlight.css';
import hindustan from '../images/hindustan.avif'
import { Link } from 'react-router-dom';

function Highlight({ data }) {
  const [counting, setCounting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const highlightElement = document.querySelector('.highlight');
      if (highlightElement) {
        const rect = highlightElement.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight - 100;

        if (isVisible && !counting) {
          setCounting(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [counting]);

  const formatNumber = (number) =>{
    const formattedNumber = String(number).replace(/\B(?=(\d{3})+(?!\d))/g, '');


  }
  const [year, setYear] = useState(2011);

  useEffect(() => {
    if (!counting) {
      setYear(2011);
    }
  }, [counting]);
  const handleEnd = () => {
    setCounting(false);
  };

  return (
    <div className="p-2">
      <div className="container highlight bg-dark-gray overflow-hidden p-0">
        <div className="row align-items-center justify-content-center p-0">
          <div className="col-6 col-md-4 col-lg-3 border">
            <div className="highlight-card-hero ">
              <h1 className={`fs-3 d-flex gap-1 d-block justify-content-center align-items-center w-100  text-white ${counting ? 'counting' : ''}`}>
               <small className='fs-6'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png" alt="we are in" width={40} height={40} />
               {counting ? (
                  <CountUp start={0} end={data[0]?.rating ? data[0]?.rating : 4.6} duration={2} decimals={1} />
                ) : (
                  data[0]?.rating ? data[0]?.rating : 4.6
                )}{' '}
               </small>
                <i className="bi bi-star-fill text-yellow"></i>
                <i className="bi bi-star-fill text-yellow"></i>
                <i className="bi bi-star-fill text-yellow"></i>
                <i className="bi bi-star-fill text-yellow"></i>
                <i className="bi bi-star-half text-yellow"></i>
              </h1>
              <span className="p-dark-small text-white">
                <small>Google Rating</small>
              </span>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3 border h-100">
            <div className="highlight-card-hero ">
              <h1 className={`fs-2 text-900 text-white ${counting ? 'counting' : ''}`}>
              <img src="https://cdn-icons-png.flaticon.com/128/4300/4300059.png" alt="we are in" width={40} height={40} />
                {counting ? (
                  <CountUp start={0} end={data[0]?.partners ? data[0]?.partners : 300} duration={2} decimal={0} />
                ) : (
                  data[0]?.partners ? data[0]?.partners : 300
                )}{' '}
                +
              </h1>
              <span className="p-dark-small text-white">
                <small>Hiring Partners</small>
              </span>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3 border">
            <div className="highlight-card-hero h-100">
              <h1 className={`fs-3 text-900 text-white d-flex align-items-center gap-2 justify-content-center ${counting ? 'counting' : ''}`}>
              <small><img src="https://racesonline.in/static/media/justdiallogo.015966087b64b7a5474c.webp" alt="we are in" width={40} height={40} /></small>
                {counting ? (
                  <CountUp start={0} end={4.5} duration={2} decimals={0} />
                ) : (
                  4.5
                )}{' '}
                 <small>
                <i className="bi bi-star-fill text-yellow"></i>
                <i className="bi bi-star-fill text-yellow"></i>
                <i className="bi bi-star-fill text-yellow"></i>
                <i className="bi bi-star-fill text-yellow"></i>
                <i className="bi bi-star-half text-yellow"></i>
              </small>
              </h1>
              <span className="p-dark-small text-white">
                <small>Just Dial</small>
              </span>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3 border">
            <div className="highlight-card-hero">
              <h1 className={`fs-3 text-900 text-white d-flex align-items-center gap-2 justify-content-center ${counting ? 'counting' : ''}`}>
              <Link to="https://www.hindustantimes.com/brand-stories/be-practical-offers-full-stack-developer-course-in-bangalore-beginning-of-new-era-in-job-oriented-learning-101700731258445.html" ><img src={hindustan} alt="we are in" width={50} height={40} className='rounded-5'/></Link>
              <Link to="https://www.mid-day.com/brand-media/article/transform-your-career-with-the-best-data-science-course-in-bangalore-at-be--23322174" target="_blank"><img src="https://play-lh.googleusercontent.com/UhoPNdnYR4qIqr9DXtwWBjjLVynTaSRzes0XsiPqjZTa24H4ecSXR-OYL_2Q3CgTUPs" alt="we are in" width={40} height={40} className='rounded-5' /></Link>
              <Link to="" target="_blank"><img src="https://play-lh.googleusercontent.com/Prhy-5MPajJzjrTbvmdlhBTPNTFGtq1J0NTr01Lmzd5OJhfuYdbjmS7mba_uYpU4l0s" alt="we are in" width={40} height={40} className='rounded-5' /></Link>

              </h1>
              <span className="p-dark-small text-white">
                <small>We are on</small>
              </span>
            </div>
          </div>

          {/* <div className="col-6 col-md-4 col-lg-3">

            <div className="highlight-card-hero">

              <h1 className={`fs-3 text-900 text-white  d-flex align-items-center gap-2 justify-content-center ${counting ? 'counting' : ''}`}>
              <Link to="" ><img src={hindustan} alt="" width={65} height={50} className='rounded-5'/></Link>
              <Link to="https://www.mid-day.com/brand-media/article/transform-your-career-with-the-best-data-science-course-in-bangalore-at-be--23322174" target="_blank"><img src="https://play-lh.googleusercontent.com/UhoPNdnYR4qIqr9DXtwWBjjLVynTaSRzes0XsiPqjZTa24H4ecSXR-OYL_2Q3CgTUPs" alt="" width={50} height={50} className='rounded-5' /></Link>
              <Link to="" target="_blank"><img src="https://play-lh.googleusercontent.com/Prhy-5MPajJzjrTbvmdlhBTPNTFGtq1J0NTr01Lmzd5OJhfuYdbjmS7mba_uYpU4l0s" alt="" width={50} height={50} className='rounded-5' /></Link>


              </h1>
              <span className="p-dark-small text-white">
                <small>We are on</small>
              </span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Highlight;
