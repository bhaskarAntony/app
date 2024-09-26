import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { IconButton, Tooltip, Skeleton } from '@mui/material';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import CallIcon from '@mui/icons-material/Call';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { useNavigate, useParams } from 'react-router-dom';

const Drivers = () => {
  const [drivers, setDrivers] = useState([]);
  const [loading, setLoading] = useState(true);
  const {routeId} = useParams()
  const [route, setRoute] = useState(routeId)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const response = await fetch('https://rsr-app.onrender.com/api/drivers');
        const data = await response.json();
        setDrivers(data); // Assuming the response contains the drivers list directly
      } catch (error) {
        console.error('Error fetching drivers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDrivers();
  }, []);
  const selectDriver = (driverId)=>{
    navigate(`/confirm/ride/${route}/${driverId}`)
  }

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Drivers Information
      </Typography>
      <Grid container spacing={3}>
        {loading
          ? Array.from(new Array(6)).map((_, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ minWidth: 275 }}>
                  <Skeleton variant="rectangular" width="100%" height={118} />
                  <CardContent>
                    <Skeleton variant="text" sx={{ mb: 1 }} />
                    <Skeleton variant="text" sx={{ mb: 1 }} />
                    <Skeleton variant="text" />
                  </CardContent>
                  <Divider />
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2, alignItems: 'center' }}>
                    <Skeleton variant="circular" width={24} height={24} />
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Skeleton variant="circular" width={24} height={24} sx={{ mr: 1 }} />
                      <Skeleton variant="circular" width={24} height={24} />
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))
          : drivers.map((driver) => (
              <Grid item xs={12} sm={6} md={4} key={driver._id}>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography variant="h6" component="div">
                      Driver: {driver.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <DirectionsCarIcon fontSize="small" style={{ color: 'blue' }} /> Vehicle:   {driver.vehicleType}
                    </Typography>
                    <Typography  sx={{ mb: 1.5 }} color="text.secondary">
                    License Plate: 
                    <span className="text-dark fw-bold bg-warning p-1 d-inline-block fs-6">{driver.licensePlate}</span>
                    </Typography>

                   
                    <Typography variant="body2">
                      Contact: {driver.phoneNumber}
                    </Typography>
                  </CardContent>
                  <Divider />
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2, alignItems: 'center' }}>
                    <Tooltip title="Call">
                      <IconButton aria-label="call" href={`tel:${driver.phoneNumber}`}>
                        <CallIcon />
                      </IconButton>
                    </Tooltip>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Tooltip title="Book Ride">
                        <IconButton
                        onClick={()=>selectDriver(driver._id)}
                          aria-label="book"
                          sx={{
                            backgroundColor: 'blue',
                            color: 'white',
                            '&:hover': {
                              backgroundColor: 'darkblue',
                            },
                            mr: 1,
                          }}
                        >
                          <ArrowForwardIosIcon />
                        </IconButton>
                      </Tooltip>
                      {/* <Tooltip title="Next">
                        <IconButton
                          aria-label="next"
                          sx={{
                            color: 'blue',
                            '&:hover': {
                              color: 'darkblue',
                            },
                          }}
                        >
                          <ArrowForwardIosIcon />
                        </IconButton>
                      </Tooltip> */}
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
      </Grid>
    </Box>
  );
};

export default Drivers;
