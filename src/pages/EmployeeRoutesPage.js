import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';

const EmployeeRoutesPage = (props) => {
  const { user } = useContext(AuthContext);
  const [selectedRoute, setSelectedRoute] = useState('');
  const [selectedDriver, setSelectedDriver] = useState('');

  useEffect(() => {
    // const fetchRoutes = async () => {
    //   const res = await axios.get(`http://localhost:5000/api/employees/routes`);
    //   props.setRoutes(res.data); // Update routes in parent component
    // };

    // const fetchDrivers = async () => {
    //   const res = await axios.get(`http://localhost:5000/api/drivers`);
    //   props.setDrivers(res.data); // Update drivers in parent component
    // };

    // fetchRoutes();
    // fetchDrivers();
  }, [props]);

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await axios.post(`http://localhost:5000/api/employees/trips`, {
        employeeId:'2222',
        routeId: selectedRoute,
        driverId: selectedDriver,
      });
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div>
      <h1>Welcome, {user && user.name}</h1>
      <div>
        <h1>Select Route and Driver</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="route">Select Route</label>
            <select
              name="route"
              value={selectedRoute}
              onChange={(e) => setSelectedRoute(e.target.value)}
              required
            >
              <option value="">Select Route</option>
              {props.routes.map((route) => (
                <option key={route.id} value={route.id}>
                  {route.name} - {route.distance}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="driver">Select Driver</label>
            <select
              name="driver"
              value={selectedDriver}
              onChange={(e) => setSelectedDriver(e.target.value)}
              required
            >
              <option value="">Select Driver</option>
              {props.drivers.map((driver) => (
                <option key={driver.id} value={driver.id}>
                  {driver.name}
                </option>
              ))}
            </select>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default EmployeeRoutesPage;
