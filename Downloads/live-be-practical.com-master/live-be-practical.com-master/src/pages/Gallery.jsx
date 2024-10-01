import React from 'react'
import '../styles/gallery.css'
// import ImageGallery from '../components/GalleryImages';
import YoutubeVideos from '../components/YoutubeVideos'
import Feedback from '../components/Feedback';
import ReactImageGallery from 'react-image-gallery';
import { Helmet } from 'react-helmet';
// import ImageGallery from "react-image-gallery";

const imagesData = [
    {
      original: "https://api.bepracticals.com/uploads/cp1_b21ad6ea0d.jpg",
      thumbnail: "https://api.bepracticals.com/uploads/cp1_b21ad6ea0d.jpg",
    
    },
    {
      original: "https://api.bepracticals.com/uploads/cp2_0268a5ba66.jpg",
      thumbnail: "https://api.bepracticals.com/uploads/cp2_0268a5ba66.jpg",

    },
    {
      original: "https://api.bepracticals.com/uploads/cp2_0268a5ba66.jpg",
      thumbnail: "https://api.bepracticals.com/uploads/cp2_0268a5ba66.jpg",
     
      },
      {
        original: "https://api.bepracticals.com/uploads/cp4_69ef0b7978.jpg",
        thumbnail: "https://api.bepracticals.com/uploads/cp4_69ef0b7978.jpg",
     
      },
      {
        original: "https://api.bepracticals.com/uploads/cp4_69ef0b7978.jpg",
        thumbnail: "https://api.bepracticals.com/uploads/cp4_69ef0b7978.jpg",
  
      },
      {
        original: "https://api.bepracticals.com/uploads/cp5_255a6f39a2.jpg",
        thumbnail: "https://api.bepracticals.com/uploads/cp5_255a6f39a2.jpg",
      
      },
      {
        original: "https://api.bepracticals.com/uploads/cp6_5dfc2c55ab.jpg",
        thumbnail: "https://api.bepracticals.com/uploads/cp6_5dfc2c55ab.jpg",
      
      },
      {
        original: "https://api.bepracticals.com/uploads/cp7_cd890a684f.jpg",
        thumbnail: "https://api.bepracticals.com/uploads/cp7_cd890a684f.jpg",
       
      },
      {
        original: "https://api.bepracticals.com/uploads/cp7_cd890a684f.jpg",
        thumbnail: "https://api.bepracticals.com/uploads/cp7_cd890a684f.jpg",
      
      },
      {
        original: "https://api.bepracticals.com/uploads/cp9_35ed0d3a0c.jpg",
        thumbnail: "https://api.bepracticals.com/uploads/cp9_35ed0d3a0c.jpg",
      
      },
      {
        original: "https://api.bepracticals.com/uploads/cp10_c86328ff12.png",
        thumbnail: "https://api.bepracticals.com/uploads/cp10_c86328ff12.png",
      
      },
      {
        original: "https://api.bepracticals.com/uploads/cp11_e6b31fcc0b.jpg",
        thumbnail: "https://api.bepracticals.com/uploads/cp11_e6b31fcc0b.jpg",
      
      },
      {
        original: "https://api.bepracticals.com/uploads/cp11_e6b31fcc0b.jpg",
        thumbnail: "https://api.bepracticals.com/uploads/cp11_e6b31fcc0b.jpg",
      
      },
      {
        original: "https://api.bepracticals.com/uploads/cp13_f0b5d4f67a.jpeg",
        thumbnail: "https://api.bepracticals.com/uploads/cp13_f0b5d4f67a.jpeg",
       
      },
      {
        original: "https://api.bepracticals.com/uploads/cp14_b7bc56b4ff.jpeg",
        thumbnail: "https://api.bepracticals.com/uploads/cp14_b7bc56b4ff.jpeg",
       
      },
  ];

function Gallery() {
  return (
    <div>
      <Helmet>
          <title>Gallery | Be-Practical - Explore Our Achievements and Projects</title>
          <meta name="description" content="Discover the extensive gallery of Be-Practical showcasing our achievements, projects, and events. Get a visual insight into our work and success stories." />
          <meta name="keywords" content="Gallery" />
          <link rel="canonical" href="https://be-practical.com/gallery" />
        </Helmet>
      <div className="banner2 bg-blur py-5 d-flex flex-column align-items-center justify-content-center">
        <h1 className='heading text-center text-900 '>Gallery</h1>
      </div>
      <div className="bg-light p-3 overflow-hidden">
      <ReactImageGallery items={imagesData} />
      </div>
      {/* <ImageGallery images={imagesData}/> */}
      <YoutubeVideos/>
      <Feedback/>
    </div>
  )
}

export default Gallery
