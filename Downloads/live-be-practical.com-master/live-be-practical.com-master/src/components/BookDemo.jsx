import React from 'react'
import '../styles/registerPage.css'
import BookDemoCard from './BookDemoCard'

function BookDemo() {
  return (
    <section className='register-page py-4  py-1 bg-blue-light'>
    <div className="container">
    <div className="row align-items-center bg-white border rounded-3">
        <div className=" col-12 col-md-6">
          {/* <h1 className="display-3">Book Your Master classes</h1>
          <p className="fs-3">Start Your journey with be practical</p> */}
          <img src="https://img.freepik.com/free-vector/completed-steps-concept-illustration_114360-5521.jpg?size=626&ext=jpg&ga=GA1.1.874872603.1694171926&semt=sph" alt="image" className='w-100' />
        </div>
        <div className="col-md-6">
          <BookDemoCard/>
        </div>
      </div>
    </div>
    </section>
  )
}

export default BookDemo
