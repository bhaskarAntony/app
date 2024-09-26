import React, { useContext, useState } from 'react';
import { Box, Typography, Card, CardContent, IconButton, Skeleton, Divider } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import PersonIcon from '@mui/icons-material/Person';

import AuthContext from '../../context/AuthContext';

function Profile() {
  const { user } = useContext(AuthContext);
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Profile
      </Typography>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          {user ? (
            <>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <PersonIcon sx={{ fontSize: 50, mr: 2 }} />
                <Typography variant="h6" component="div">
                  {user.name}
                </Typography>
              </Box>
              <Typography variant="body1" color="text.secondary">
                Email: {user.email}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Role: {user.role}
              </Typography>
              <IconButton
                onClick={handleExpandClick}
                aria-expanded={expanded}
                sx={{ mt: 2 }}
              >
                {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
              {expanded && (
                <Box sx={{ mt: 2 }}>
                  <Divider />
                  <Typography variant="h6" sx={{ mt: 2 }}>
                    Additional Information
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {/* You can add more user-specific details here */}
                    More details about the user can go here.
                  </Typography>
                </Box>
              )}
            </>
          ) : (
            <>
              <Skeleton variant="rectangular" width="100%" height={140} />
              <Skeleton variant="text" height={32} />
              <Skeleton variant="text" height={24} width="80%" />
              <Skeleton variant="text" height={24} width="60%" />
            </>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}

export default Profile;
