import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  createTheme
} from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const PlaneStats = ({brand, model, image, power, releaseDate, type, description}) => {
  const [open, setOpen] = useState(false);


  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <List>
        <ListItem button onClick={handleClick}>
          <ListItemText primary="Plane Stats" />
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem >
              <ListItemIcon>{/* Insert icon here */}</ListItemIcon>
              <ListItemText primary="Brand" secondary={brand} />
            </ListItem>
            <ListItem >
              <ListItemIcon>{/* Insert icon here */}</ListItemIcon>
              <ListItemText primary="Type" secondary={type} />
            </ListItem>
            <ListItem >
              <ListItemIcon>{/* Insert icon here */}</ListItemIcon>
              <ListItemText primary="Model" secondary={model} />
            </ListItem>
            <ListItem >
              <ListItemIcon>{/* Insert icon here */}</ListItemIcon>
              <ListItemText primary="Power(hp)" secondary={power} />
            </ListItem>
            <ListItem >
              <ListItemIcon>{/* Insert icon here */}</ListItemIcon>
              <ListItemText primary="Release date" secondary={releaseDate} />
            </ListItem>
            <ListItem >
              <ListItemIcon>{/* Insert icon here */}</ListItemIcon>
              <ListItemText primary="Description" secondary={description} />
            </ListItem>
            {/* Add more stats as needed */}
          </List>
        </Collapse>
      </List>
    </div>
  );
};

export default PlaneStats;