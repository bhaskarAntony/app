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

const Routes = () => {
  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/routes/list');
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

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Routes Information
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
                    <Typography variant="body2">
                      Location: {route.location}
                      <br />
                      Distance: {route.distance} km
                      <br />
                      Time: {route.time}
                    </Typography>
                  </CardContent>
                  <Divider />
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2, alignItems: 'center' }}>
                    <Tooltip title="Call">
                      <IconButton aria-label="call" href={`tel:${route.phone}`}>
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
  );
};

export default Routes;
