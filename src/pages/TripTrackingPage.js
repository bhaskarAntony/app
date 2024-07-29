import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const TripTrackingPage = () => {
  const { id } = useParams();
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    const fetchTrip = async () => {
      const res = await axios.get(`http://localhost:5000/api/trips/${id}`);
      setTrip(res.data);
    };

    fetchTrip();
  }, [id]);

  return (
    <div>
      {trip && (
        <>
          <h1>Trip Tracking</h1>
          <MapContainer center={trip.currentLocation} zoom={13} style={{ height: '400px', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <Marker position={trip.currentLocation}></Marker>
            {trip.path && <Polyline positions={trip.path} />}
          </MapContainer>
        </>
      )}
    </div>
  );
};

export default TripTrackingPage;
