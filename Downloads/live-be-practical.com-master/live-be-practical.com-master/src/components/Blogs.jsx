import React from 'react';
import '../styles/blogs.css';

const blogs = [
  {
    image: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Our Students work at',
    description: 'lorem is the best text for dummy text in web development',
  },
  {
    image: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Our Students work at',
    description: 'lorem is the best text for dummy text in web development',
  },
  {
    image: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Our Students work at',
    description: 'lorem is the best text for dummy text in web development',
  },
  {
    image: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Our Students work at',
    description: 'lorem is the best text for dummy text in web development',
  },
  {
    image: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Our Students work at',
    description: 'lorem is the best text for dummy text in web development',
  },
  {
    image: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Our Students work at',
    description: 'lorem is the best text for dummy text in web development',
  },
  
  {
    image: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Our Students work at',
    description: 'lorem is the best text for dummy text in web development',
  },

  {
    image: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Our Students work at',
    description: 'lorem is the best text for dummy text in web development',
  },
];

function Blogs() {
  return (
    <section className="blogs">
        <div className="blogs-banner">
            <h1 className='heading text-white'>Blogs</h1>
        </div>
        <div className="hero-wave"></div>
      <div className="container-fluid">
      <div className="row">
        {blogs.map((item, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4">
            <div className="blog-card">
              <img src={item.image} alt="" className="w-100 img-fluid" />
              <div className="blog-mask">
                <h4 className='fw-bold'>{item.title}</h4>
                <p>{item.description}</p>
                <button className="btn bg-warning p-2 px-4 rounded-5">Read Blog</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}

export default Blogs;
