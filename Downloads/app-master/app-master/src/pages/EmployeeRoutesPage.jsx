import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import './style.css'

const EmployeeRoutesPage = (props) => {
  const { user } = useContext(AuthContext);
  const [selectedRoute, setSelectedRoute] = useState({});
  const [selectedDriver, setSelectedDriver] = useState({});
  const {routeId, driverId} = useParams()
  console.log(user);
  
  useEffect(() => {
    const fetchRoutes = async () => {
      const res = await axios.get(`https://rsr-app.onrender.com/api/routes/${routeId}`);
      setSelectedRoute(res.data.data)
      console.log(res.data);
      
    };

    const fetchDrivers = async () => {
      const res = await axios.get(`https://rsr-app.onrender.com/api/drivers/${driverId}`);
      console.log(res);
      setSelectedDriver(res.data)
    };

    fetchRoutes();
    fetchDrivers();
  }, [props]);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post(`https://rsr-app.onrender.com/api/employees/trips`, {
        employeeId:user._id,
        routeId: routeId,
        driverId: driverId,
      });
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className='bg-light ride'>
     
     <div className="p-3">
     <div className='bg-white p-3 rounded'>
      <h1 className='fs-2'>{user && user.name} 👋, Here Your Ride Details </h1>
      
        {/* <button type="button" onClick={handleSubmit}>book ride</button> */}
      </div>
      <div className="card border-0 p-3 mt-2 driver-card">
        <h1 className="fs-5">Route Details</h1>
        <hr />
        <div className=''>
          <img src="https://www.odtap.com/wp-content/uploads/2019/04/Route-optimization-software-odtap.jpg" alt="loading" className='mb-3 w-100 rounded' />
          <h1 className="fs-5">{selectedRoute.location}</h1>
         <ul className="list-group">
         <li className="list-group-item d-flex align-items-center justify-content-between"><span className="fs-6">Distance: </span><p className="fs-6 m-0"> {selectedRoute.distance}km</p></li>
         <li className="list-group-item d-flex align-items-center justify-content-between"><span className="fs-6">Route Timings:</span>   <p className="fs-6 m-0"> {selectedRoute.time}</p></li>
         <li className="list-group-item d-flex align-items-center justify-content-between"><span className="fs-6">Route Serial Number: </span> <p className='m-0 fs-6'>{selectedRoute.route}<sup>th</sup> Route</p></li>
         </ul>
          <div className="text-center">
          <Button variant="contained" className='mt-3'>Change Route?</Button>

          </div>
        
       
         
        </div>
       </div>

      

       <div className="card border-0 p-3 mt-2 driver-card">
        <h1 className="fs-5">Driver Details</h1>
        <hr />
        <div className='text-center'>
          <img src="https://st4.depositphotos.com/9998432/25177/v/450/depositphotos_251778046-stock-illustration-person-gray-photo-placeholder-man.jpg" alt="loading" className='mb-3' />
          <h1 className="fs-3">{selectedDriver.name}</h1>
         <ul className="list-group">
         <li className="list-group-item d-flex align-items-center justify-content-between"><span className="fs-6">Contact Number: </span><p className="fs-6 m-0"> {selectedDriver.phoneNumber}</p></li>
         <li className="list-group-item d-flex align-items-center justify-content-between"><span className="fs-6">Vehicle:</span>   <p className="fs-6 m-0"> {selectedDriver.vehicleType}</p></li>
         <li className="list-group-item d-flex align-items-center justify-content-between"><span className="fs-6">Vehicle Number: </span> <p className='m-0'><span className="text-dark fw-bold bg-warning p-1">{selectedDriver.licensePlate}</span></p></li>
         </ul>
         <Button variant="contained" className='mt-3'>Change Driver?</Button>

        
       
         
        </div>
       </div>
     </div>
     <button className="book-btn" onClick={handleSubmit}>
        Book Ride 
     </button>

       
    </div>
  );
};

export default EmployeeRoutesPage;
