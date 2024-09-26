import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { IconButton, Tooltip, Skeleton } from '@mui/material';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useNavigate } from 'react-router-dom';

const History = () => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const token = localStorage.getItem('token'); // Get the token from local storage
        const response = await fetch('https://rsr-app.onrender.com/api/employees/trips', {
          headers: {
            Authorization: `Bearer ${token}`, // Set the Authorization header with the token
          },
        });
        const data = await response.json();
        setTrips(data); // Assuming `data` is an array of trips
      } catch (error) {
        console.error('Error fetching trips:', error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchTrips(); // Call the fetch function
  }, []);

  return (
   <div className="pb-5">
     <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Trip History
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
          : trips.map((trip) => (
              <Grid item xs={12} sm={6} md={4} key={trip._id}>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography variant="h6" component="div">
                      Trip ID: {trip._id}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Status: {trip.status}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <AccessTimeIcon sx={{ mr: 1 }} color="primary" />
                      <Typography variant="body2">
                        Start Time: {new Date(trip.startTime).toLocaleString()}
                      </Typography>
                    </Box>
                  </CardContent>
                  <Divider />
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2, alignItems: 'center' }}>
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
                  </Box>
                </Card>
              </Grid>
            ))}
      </Grid>
    </Box>
   </div>
  );
};

export default History;
