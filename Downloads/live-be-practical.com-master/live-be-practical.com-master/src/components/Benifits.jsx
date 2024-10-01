import React from 'react';
import '../styles/benifits.css'

const benifits = [
  {
    title: "Quality Training",
    image:"https://cdn-icons-png.flaticon.com/128/3500/3500896.png",
    description: "Our students receive comprehensive and up-to-date training in software development, ensuring they have a strong foundation in programming languages, development methodologies, and relevant technologies."
  },
  {
    title: "Practical Experience",
    image:"https://cdn-icons-png.flaticon.com/128/10822/10822332.png",
    description: "Our training programs emphasize hands-on, real-world projects, allowing students to apply their knowledge to solve practical problems. This practical experience prepares them for the challenges of real-world software development."
  },
  {
    title: "Adaptability",
    image:"https://cdn-icons-png.flaticon.com/128/6159/6159679.png",
    description: "Our students are trained to adapt quickly to new technologies and tools. They have a solid understanding of software development principles, making them flexible and capable of working on a wide range of projects."
  },
  {
    title: "Team Collaboration",
    image:"https://cdn-icons-png.flaticon.com/128/7829/7829198.png",
    description: "We foster a collaborative learning environment, encouraging our students to work effectively in teams. They understand the importance of communication and teamwork, which is essential for successful software development projects."
  },
  {
    title: "Problem Solving",
    image:"https://cdn-icons-png.flaticon.com/128/4133/4133589.png",
    description: "Our training focuses on developing problem-solving skills. Our students are equipped with the ability to analyze complex issues and come up with innovative solutions, which is crucial in the ever-evolving tech industry."
  },
  {
    title: "Continuous Learning",
    image:"https://cdn-icons-png.flaticon.com/128/11421/11421581.png",
    description: "We instill a culture of continuous learning in our students. They are encouraged to stay updated with the latest industry trends and technologies, making them valuable assets for companies aiming to stay competitive."
  },
  {
    title: "Diverse Skill Sets",
    image:"https://cdn-icons-png.flaticon.com/128/12082/12082531.png",
    description: "We offer training in various software development domains, including web development, mobile app development, data science, and more. This diversity in skill sets allows companies to find candidates that align with their specific needs."
  },
  {
    title: "Career-Ready",
    image:"https://cdn-icons-png.flaticon.com/128/6770/6770626.png",
    description: "Our programs are designed to make students job-ready from day one. They have a strong understanding of software development practices, making the onboarding process smoother for companies."
  }
];
function Benifits() {
  return (
   <div className="container-fluid bg-blur py-5">
     <div className='container'>
        <h3 className="fs-1 text-center text-900 mb-4">benefits of hiring our <span className="text-main-danger">trained students</span></h3>
      <div className="row justify-content-center">
        {benifits.map((item, index) => (
          <div className="col-12 col-lg-4 col-md-6" key={index}>
            <div className="benifits-component-card bg-white border text-start">
              <img src={item.image} alt={item.title} className='mb-3 bg-blue-light p-3 rounded-5' />
              <h4 className="card-heading text-900 text-main-danger">{item.title}</h4>
              <p className='fs-6'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
   </div>
  );
}

export default Benifits;
