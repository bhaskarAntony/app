import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BlogsApi } from '../../Data/DataFetcher';
import './style.css';
import BookDemoCard from '../../components/BookDemoCard';
import ReadMore from '../../Extra/ReadMore';
import { Helmet } from 'react-helmet';
import Loading from '../../Modals/Loading';

function BlogsView() {
  const { slug } = useParams();
  const [blog, setBlogData] = useState({});
  const [moreBlogData, setMoreBlogData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.be-practical.com/api/allblogs`);
        const filteredBlog = response.data.find(item => item.slug === slug);
        if (filteredBlog) {
          console.log('blog = ', filteredBlog);
          
          setBlogData(filteredBlog);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]); // Fetch data whenever slug changes

  useEffect(() => {
    BlogsApi
      .then(data => {
        setMoreBlogData(data);
      })
      .catch(error => console.error('Error fetching advantages:', error));
  }, []);

  if(loading){
    return <Loading/>
  }
  return (
    <div className='container p-3 p-md-5'>
        <Helmet>
          <title>{blog.metaTitle}</title>
          <meta name="description" content={blog.metaDesc} />
          <meta name="keywords" content={blog.blogsCategory} />
          <link rel="canonical" href={blog.canonicalUrl} />
        </Helmet>
      <h1 className='text-main-danger fw-bold'>{blog.BlogTitle}</h1>
      {/* <img src={blog.image? blog.image:(null)} alt={blog.bannerImgAlt} className="w-100" /> */}
      <div dangerouslySetInnerHTML={{ __html: blog.BlogDes }} />
      {/* <h2>Table of Contents</h2> */}
      {/* <table className='table striped hover'>
        {blog.tableContents && blog.tableContents.map((content, index) => (
         <tr  key={index}>
          <td>{index+1}</td>
          <td>{content.content}</td>
         </tr>
        ))}
      </table> */}
      <h2> <div dangerouslySetInnerHTML={{ __html: blog.BlogPointsHeading2 }} /></h2>
     
      {blog.BlogPointsHeading2Arr && blog.BlogPointsHeading2Arr.map((point, index) => (
        <div key={index}>
          <h3> <div dangerouslySetInnerHTML={{ __html: point.point1 }} /></h3>
          <div dangerouslySetInnerHTML={{ __html: point.point2 }} />
          <div dangerouslySetInnerHTML={{ __html: point.point3 }} />
        </div>
      ))}
      <h2> <div dangerouslySetInnerHTML={{ __html: blog.BlogConclusionTitle }} /></h2>
      <div dangerouslySetInnerHTML={{ __html: blog.BlogConclusionDes }} />
    </div>
  );
}

export default BlogsView;
