import React, { createContext, useEffect, useState } from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import LoginPage from './pages/LoginPage';
import EmployeeRoutesPage from './pages/EmployeeRoutesPage';
import DriverTripsPage from './pages/DriverTripsPage';
import TripTrackingPage from './pages/TripTrackingPage';
import Maintabs from './components/tabs/Maintabs';
import Appbar from './components/Appbar/Appbar';
import AuthState from './context/AuthState';
import AuthContext from './context/AuthContext';
import SelectDriver from './pages/SelectDriver';

const App = () => {
  const {isAuthenticated}  = createContext(AuthContext)
  const [routes, setRoutes] = useState([]);
  const [drivers, setDrivers] = useState([]);
  useEffect(() => {
    // Load initial data for routes and drivers
    const loadInitialData = async () => {
      // Simulating fetching data from JSON
      const routesData = [
        { id: '1', name: 'Route 1', distance: '10 km' },
        { id: '2', name: 'Route 2', distance: '20 km' }
      ];
      const driversData = [
        { id: '1', name: 'Driver 1' },
        { id: '2', name: 'Driver 2' }
      ];
      setRoutes(routesData);
      setDrivers(driversData);
    };

    loadInitialData();
  }, []);
  return (
    <>
      <Appbar />
      <Routes>
        
       {/* <Route path='/' element={<PrivateRoute><Maintabs/></PrivateRoute>}/> */}
       <Route path='/' element={<Maintabs/>}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/drivers/:routeId" element={<SelectDriver />} />
        <Route path="/confirm/ride/:routeId/:driverId" element={<EmployeeRoutesPage/>} />
        <Route path="/driver/trips" element={<PrivateRoute><DriverTripsPage /></PrivateRoute>} />
        <Route path="/trip/:id" element={<PrivateRoute><TripTrackingPage /></PrivateRoute>} />
      </Routes>
    </>
  );
};

export default App;
