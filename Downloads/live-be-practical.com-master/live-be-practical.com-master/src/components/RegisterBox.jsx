import React, { useState } from 'react'
import '../styles/register_card.css'

function RegisterBox() {
    const [isopen, setIsopen] = useState(true)
 
  return (
    <div className='register-card p-2 p-lg-4  py-4 rounded-4'>
      <p className="banner-heading text-white"><span className="text-main-danger">
      Schedule a demo call</span> with our placement team</p>
      <form>
      <div class="form-group mb-3">
      <label for="name"  className='form-label text-white'>Enter Name</label>
      <input type="text" class="form-control"  required/>
    
    </div>
    <div class="form-group mb-3">
    <label for="email"  className='form-label text-white'>Enter Email</label>
      <input type="email" class="form-control" required/>
     
    </div>
    <div class="form-group mb-3">
    <label for="mobile"  className='form-label text-white'>Mobile Number</label>
      <input type="tel" class="form-control" required/>
     
    </div>
    <div class="form-group mb-3">
    <label for="company name" className='form-label text-white'>Company Name</label>
      <input type="text" class="form-control" required/>
      
    </div>
   <div className="mt-3">
   <button type="submit" className="btn-danger rounded-4 fs-5 py-3 w-100">Submit</button>
   </div>
      </form>
    </div>
  )
}

export default RegisterBox
