// ShimmerComponent.js
import React from 'react';
import ContentLoader from 'react-content-loader';

function ShimmerComponent() {
  return (
   <div className='rounded-4 p-2 bg-white overflow-hidden'>
     <ContentLoader
      speed={2}
      width={150}
      height={100}
      backgroundColor="#f3f3f3"
      foregroundColor="#bdbdbd"
    >
      {/* Customize the shapes and animation here */}
      <rect x="0" y="0" rx="5" ry="5" width="300" height="500" />
      <rect x="0" y="20" rx="5" ry="5" width="300" height="500" />
      {/* Add more shapes as needed */}
    </ContentLoader>
   </div>
  );
}

export default ShimmerComponent;
