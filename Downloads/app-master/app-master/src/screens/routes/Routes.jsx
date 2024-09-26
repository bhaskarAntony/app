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
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StraightenIcon from '@mui/icons-material/Straighten';
import { useNavigate } from 'react-router-dom';

const SelectDriver = () => {
  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const response = await fetch('https://rsr-app.onrender.com/api/routes/list');
        const data = await response.json();
        setRoutes(data.data);
      } catch (error) {
        console.error('Error fetching routes:', error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchRoutes();
  }, []);


  const selectRoute = (routeId) =>{
    navigate(`/drivers/${routeId}`)
  }

  return (
  <div className="pb-5">
      <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Routes Information
      </Typography>
      <Grid container spacing={3}>
        {loading
          ? Array.from(new Array(6)).map((_, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ minWidth: 275 }}>
                  <Skeleton variant="rectangular" width="100%" height={140} />
                  <CardContent>
                    <Skeleton variant="text" height={32} />
                    <Skeleton variant="text" height={24} width="80%" />
                    <Skeleton variant="text" height={24} width="60%" />
                  </CardContent>
                  <Divider />
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2, alignItems: 'center' }}>
                    <Skeleton variant="circular" width={32} height={32} />
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Skeleton variant="circular" width={32} height={32} sx={{ mr: 1 }} />
                      <Skeleton variant="circular" width={32} height={32} />
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))
          : routes.map((route) => (
              <Grid item xs={12} sm={6} md={4} key={route._id}>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography variant="h6" component="div">
                      Route {route.route}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {route.name}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <LocationOnIcon sx={{ mr: 1 }} color="primary" />
                      <Typography variant="body2">{route.location}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <StraightenIcon sx={{ mr: 1 }} color="primary" />
                      <Typography variant="body2">Distance: {route.distance} km</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <AccessTimeIcon sx={{ mr: 1 }} color="primary" />
                      <Typography variant="body2">Time: {route.time}</Typography>
                    </Box>
                  </CardContent>
                  <Divider />
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2, alignItems: 'center' }}>
                    <Tooltip title="Call">
                      <IconButton aria-label="call" href={`tel:${route.phone}`} sx={{ color: 'green' }}>
                        <CallIcon />
                      </IconButton>
                    </Tooltip>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Tooltip title="Book Ride">
                        <IconButton
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
                          <DirectionsBusIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Next">
                        <IconButton
                        onClick={()=>selectRoute(route._id)}
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
                      </Tooltip>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
      </Grid>
    </Box>
  </div>
  );
};

export default SelectDriver;
