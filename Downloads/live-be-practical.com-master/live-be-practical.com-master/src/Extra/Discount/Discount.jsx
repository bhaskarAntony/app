import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

function Discount() {
  return (
    <div className='discount'>
     <Link to='/discount/quiz'>
     <img src="https://img.freepik.com/free-vector/sale-offer-label-banner-discount-offer-promotion_157027-1250.jpg?w=740&t=st=1698644920~exp=1698645520~hmac=79252fe5c9a499bb02f6a8b800115aeb2cd844efb06a4c8bd6cc916bbf1d0cb3" alt="discount" />
     </Link>
    </div>
  )
}

export default Discount
