import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup';

function Funfact() {
  const [counting, setCounting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const highlightElement = document.querySelector('.funNumber');
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
  return (
    <div className='container py-5 bg-blur funNumber'>
        <p className="p-larg1 text-center text-main-danger text-900">Funfact</p>
        <h1 className="fs-1 text-900 text-center mb-5">Strength in Numbers</h1>
      <div className="row">
        <div className="col-6 col-xs-6 col-sm-6 col-md-3 mb-2">
            <div className="text-center c-card card h-100 p-2">
               <h1 className={`display-4 text-900 ${counting ? 'counting' : ''}`}>{counting ? (
                  <CountUp start={0} end={10000} duration={2} decimals={0} />
                ) : (
                  10000
                )}{'+'}</h1>
               <p className="p-large1 text-main-danger">Learners & counting</p>
            </div>
        </div>
        <div className="col-6 col-xs-6 col-sm-6 col-md-3 mb-2">
        <div className="text-center card h-100 p-2">
        <h1 className={`display-4 text-900 ${counting ? 'counting' : ''}`}>{counting ? (
                  <CountUp start={0} end={6} duration={2} decimals={0} />
                ) : (
                  6
                )}{'+'}</h1>
               <p className="p-large1 text-main-danger">Flexible Courses</p>
            </div>
        </div>
        <div className="col-6 col-xs-6 col-sm-6 col-md-3 mb-2">
        <div className="text-center card h-100 p-2">
        <h1 className={`display-4 text-900 ${counting ? 'counting' : ''}`}>{counting ? (
                  <CountUp start={0} end={36} duration={2} decimals={0} />
                ) : (
                  36
                )}{'+'}</h1>
               <p className="p-large1 text-main-danger">languages</p>
            </div>
        </div>
        <div className="col-6 col-xs-6 col-sm-6 col-md-3 mb-2">
        <div className="text-center card h-100 p-2">
        <h1 className={`display-4 text-900 ${counting ? 'counting' : ''}`}>{counting ? (
                  <CountUp start={0} end={1500} duration={2} decimals={0} />
                ) : (
                 1500
                )}{'+'}</h1>
               <p className="p-large1 text-main-danger">Successful students</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Funfact
