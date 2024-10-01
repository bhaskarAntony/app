import React, { useEffect, useState } from 'react';
import './Progressbar.css'

const Progressbar = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 10000); // Simulate a 2-second loading time

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`progress-bar ${isLoading ? 'loading' : 'loaded'}`}>
      <div className="progress"></div>
    </div>
  );
};

export default Progressbar;
