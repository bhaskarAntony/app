import React, { useEffect } from 'react';

const Whatsapp = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    
    // Set attributes for the script
    script.type = 'text/javascript';
    script.src = 'https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js';
    script.id = 'aisensy-wa-widget';
    script.setAttribute('widget-id', 'EK6FZv');
    
    // Append the script to the document body
    document.body.appendChild(script);

    // Clean up function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures that this effect runs only once when the component mounts

  return (
    <div>
      {/* Your React component content */}
    </div>
  );
};

export default Whatsapp;
