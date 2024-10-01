import React from 'react'
import './style.css'

function EliteScroller() {
  return (
    <marquee direction="right" className="d-flex gap-3" >
   <div className="d-flex align-items-center gap-3 p-2">
   <span className="fs-5"> Join our 100% Placement Program, Get 50% Refund if not Placed</span>
      <a href='/landingpage' className="btn bg-black text-white p-1" target='_blanc'>Explore Elite</a>
   </div>
    </marquee>
  )
}

export default EliteScroller
