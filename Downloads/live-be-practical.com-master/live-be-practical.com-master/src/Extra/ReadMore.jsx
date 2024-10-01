import React from 'react'
import { useState } from 'react';

function ReadMore({ text, maxLength }) {
    const [isTruncated, setIsTruncated] = useState(true);
  
    const toggleTruncate = () => {
      setIsTruncated(!isTruncated);
    };
  
    return (
      <div>
        {isTruncated ? (
          <div>
            {text.slice(0, maxLength)}
            {text.length > maxLength && (
              <p onClick={toggleTruncate} className="read-more-button text-main-danger  fw-bold">
                ...Read More <i class="bi bi-chevron-double-right"></i>
              </p>
            )}
          </div>
        ) : (
          <div>
            {text}
            <p onClick={toggleTruncate} className="read-less-button text-main-danger fw-bold">
              Read Less
            </p>
          </div>
        )}
      </div>
    );
  }

export default ReadMore
