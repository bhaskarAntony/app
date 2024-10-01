import axios from 'axios';

async function fetchData(endpoint) {
  try {
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
const advantages = fetchData('https://api.be-practical.com/api/advantages');
const companies = fetchData('https://api.be-practical.com/api/companies');
const trainingModule = fetchData('https://api.be-practical.com/api/trainingmodes');
const testinomials = fetchData('https://api.be-practical.com/api/testimonials');
const youtubeVideos = fetchData('https://api.be-practical.com/api/youtubeVideos');
const CoursePage = fetchData('https://api.be-practical.com/api/courses');
const Quiz = fetchData('https://api.be-practical.com/api/Quiz');
const EventsApi = fetchData('https://api.be-practical.com/api/events');
const homeHeroApi = fetchData('https://api.be-practical.com/api/heroSection');
const BlogsApi = fetchData('https://api.be-practical.com/api/allblogs');
const ourCoursesApi = fetchData('https://api.be-practical.com/api/ourCourses');
const allCourseApi = fetchData('https://api.be-practical.com/api/allcourses');
const fullstack = fetchData('https://api.be-practical.com/api/allcourses/65dadc5506b37e8fa5684e3b');
const mernstack = fetchData('https://api.be-practical.com/api/allcourses/65dadc5506b37e8fa5684e3b/1/65db0ada659a593cc0e3cd77');
const javastack = fetchData('https://api.be-practical.com/api/allcourses/65dadc5506b37e8fa5684e3b/1/65db7d6cadc3e603f5f235b3');
const pythonstack = fetchData('https://api.be-practical.com/api/allcourses/65dadc5506b37e8fa5684e3b/1/65db81d5adc3e603f5f23768');
const datasciencecourse = fetchData('https://api.be-practical.com/api/allcourses/65db8745adc3e603f5f23a25');
const cloudoopsdata = fetchData('https://api.be-practical.com/api/allcourses/66544e2f37f68649cf7ba8ed/1/6654616637f68649cf7bbc19');

const cloudcomputing = fetchData('https://api.be-practical.com/api/allcourses/66544e2f37f68649cf7ba8ed');
const digitalmarketing = fetchData('https://api.be-practical.com/api/allcourses/65db8e88adc3e603f5f23f5a');

export { advantages, companies, trainingModule, testinomials, youtubeVideos, CoursePage, Quiz, EventsApi, homeHeroApi, BlogsApi, ourCoursesApi, allCourseApi, fullstack, mernstack, javastack, pythonstack,datasciencecourse, cloudoopsdata, cloudcomputing, digitalmarketing };
 