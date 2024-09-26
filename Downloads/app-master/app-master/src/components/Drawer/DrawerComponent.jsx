import React from 'react';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer'; // Renamed import to avoid conflict
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactsIcon from '@mui/icons-material/Contacts';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';

const DrawerComponent = ({ open, close }) => {
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={close}>
      <List>
        {[
          { text: 'Home', icon: <HomeIcon /> },
          { text: 'About', icon: <InfoIcon /> },
          { text: 'Contact', icon: <ContactsIcon /> },
          { text: 'Developer Info', icon: <DeveloperBoardIcon /> },
        ].map(({ text, icon }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {icon}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <MuiDrawer open={open} onClose={close}>
      {DrawerList}
    </MuiDrawer>
  );
};

export default DrawerComponent;
