import React from 'react'
import '../styles/registerPage.css'

function RegistrationPage() {
  return (
    <section className='register-page container-fluid py-3 bg-blur'>
      <div className="row">
        <div className="col-md-6 offset-md-3">
            <div className="r-card p-2 p-lg-5 bg-white">
                <h1 className="card-heading">Register</h1>
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
                    <div className="form-group mt-3">
                       <button className="btn-danger w-100">Register</button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </section>
  )
}

export default RegistrationPage
