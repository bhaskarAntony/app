import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';

const DriverTripsPage = () => {
  const { user } = useContext(AuthContext);
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      const res = await axios.get(`https://rsr-app.onrender.com/api/drivers/trips`);
      setTrips(res.data);
    };

    fetchTrips();
  }, []);

  const acceptTrip = async tripId => {
    try {
      await axios.patch(`https://rsr-app.onrender.com/api/drivers/trips/status`, {
        tripId,
        status: 'accepted',
      });
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div>
      <h1>Welcome, {user && user.name}</h1>
      <h2>Your Trips</h2>
      <ul>
        {trips.map(trip => (
          <li key={trip._id}>
            {trip.route.name}
            {trip.status === 'pending' && (
              <button onClick={() => acceptTrip(trip._id)}>Accept</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DriverTripsPage;
