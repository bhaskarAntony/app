import React from 'react'

function TicketBook() {
  return (
    <div>
       <div className="r-card p-2 p-lg-5">
                <h1 className="card-heading">Book Your free Master Classes Now</h1>
                <form>
                    <div className="form-group mt-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control p-3" name='name' placeholder='Enter your name' />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="text" className="form-control p-3" name='name' placeholder='Enter Email' />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="phone" className="form-label">Phone Number</label>
                        <input type="text" className="form-control p-3" name='phone' placeholder='Enter your Number' />
                    </div>
                    <div className="form-group form-group-last mt-3">
                    <select className='form-control p-3'>
                        <option value="mern">MERN</option>
                        <option value="mern">Python Fullstack</option>
                        <option value="mern">Java Fullstack</option>
                        <option value="mern">Data Science</option>
                        <option value="mern">Cloud Computing</option>
                    </select>
                    </div>
                    <div className="form-group mt-3">
                       <button className="btn-main w-100">Register</button>
                    </div>
                </form>
            </div>
    </div>
  )
}

export default TicketBook
