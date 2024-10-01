import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css'; // Import custom CSS for additional styling
import { Helmet } from 'react-helmet';
import { Shimmer } from 'react-shimmer';
import Loading from '../../Modals/Loading';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch all blogs from API
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.be-practical.com/api/allblogs');
        setBlogs(response.data);
        setFilteredBlogs(response.data); // Initialize filtered blogs with all blogs
        // Extract unique categories from blogs
        const uniqueCategories = Array.from(new Set(response.data.map(blog => blog.blogsCategory)));
        setCategories(uniqueCategories);
        setLoading(false);
      } catch (error) {
        setLoading(true)
        console.error('Error fetching blogs:', error);
      }
    };

    fetchData();
  }, []);

  // Function to handle search term change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Function to handle search submit
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim() !== '') {
      // Add to recent searches
      if (!recentSearches.includes(searchTerm)) {
        setRecentSearches([...recentSearches, searchTerm]);
      }
      // Filter blogs based on search term
      const filtered = blogs.filter(blog =>
        blog.BlogTitle.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBlogs(filtered);
    } else {
      setFilteredBlogs(blogs); // Reset to all blogs if search term is empty
    }
  };

  // Function to handle category filter
  const handleCategoryFilter = (category) => {
    const filtered = blogs.filter(blog => blog.blogsCategory === category);
    setFilteredBlogs(filtered);
  };

  // Function to truncate text to first 100 characters for danger HTML
  const truncateText = (text, maxLength) => {
    if (text?.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };
 

  // Function to handle auto-sliding cards
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((activeSlide + 1) % 5); // Assuming 5 as the number of carousel items
    }, 3000); // Change slide every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [activeSlide]);


  if(loading){
    return <Loading/>
  }

  return (
    <div className="blog-list">
      <Helmet>
          <title>Blogs | Be-Practical - Insights, Tips, and Industry Updates</title>
          <meta name="description" content=" Stay updated with Be-Practical's latest insights, tips, and industry updates through our comprehensive blogs. Explore a wide range of topics and enhance your knowledge." />
          <meta name="keywords" content="Blogs" />
          <link rel="canonical" href="https://be-practical.com/blogs" />
        </Helmet>
      {/* Search Bar */}
      <div className="search-bar">
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search blogs..."
          />
          <button type="submit" className='btn btn-dark rounded-pill btn-lg'>Search</button>
        </form>
      </div>

      {/* Categories Dropdown */}
      <div className="dropdown ">
        <button className=" dropdown-toggle btn btn-dark" type="button" id="categoryDropdown" data-bs-toggle="dropdown" aria-expanded="false">
          Categories
        </button>
        <ul className="dropdown-menu p-3" aria-labelledby="categoryDropdown">
          {categories.map((category, index) => (
            <li key={index}><button className="dropdown-item p-2" onClick={() => handleCategoryFilter(category)}>{category}</button></li>
          ))}
        </ul>
      </div>

      {/* Categories wise Blogs */}
      {categories.map(category => {
        const filteredCategoryBlogs = filteredBlogs.filter(blog => blog.blogsCategory === category);
        if (filteredCategoryBlogs?.length === 0) {
          return null; // Skip rendering if no blogs found for the category
        }
        return (
          <div key={category} className="category-section">
            <h2 className='fs-3 fw-bold'>{category} Blogs</h2>
            <div className="blog-cards">
              {
                loading?( Array(10).fill(null).map((_, index)=>{
                  <div className="blog-card">
                    <Shimmer width="100%" height={200} className='rounded-3'/>
                  </div>
                
                })):(
                  filteredCategoryBlogs.map(blog => (
                    <div key={blog._id} className="blog-card d-flex flex-column justify-content-between p-3">
                      {/* <img src={blog.image} alt={blog.bannerImgAlt} /> */}
                      <div className="blog-content p-0">
                        <h3>{blog.BlogTitle}</h3>
                        <div className="blog-description text-secondary" dangerouslySetInnerHTML={{ __html: truncateText(blog.BlogDes, 100) }} />
                      
                      </div>
                      <a href={`/blogs/${blog.slug}`} className="btn-danger  mt-3 d-block">
                          Read More
                        </a>
                    </div>
                  ))
                )
              }
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
