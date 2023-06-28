import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  createTheme,
  TextField,
  Box,
  Typography,
  MenuItem,
  InputLabel,
  Select
} from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const Filter = ({handlePriceMin, handlePriceMax, priceMin, priceMax, productType, setProductType, powerMin,
  powerMax, setPowerMin, setPowerMax}) => {
    const [open, setOpen] = useState(false);


    const handleClick = () => {
      setOpen(!open);
    };
  return (
    <div>
      <Box display="flex" alignItems="center" flexDirection={'column'}>
      <InputLabel id="demo-simple-select-helper-label">Выберите бренд</InputLabel>
              <Select
              label = {'Type'}
              sx={{width:'200px'}}
              variant='standard'
              // value={type}
              // onChange={(e) => setType(e.target.value)}
        >
           <MenuItem value={''}>По умолчанию</MenuItem>
          <MenuItem value={'helicopter'}>Helicopter</MenuItem>
          <MenuItem value={'glider'}>Hlider</MenuItem>
          <MenuItem value={'parts'}>Parts</MenuItem>
          <MenuItem value={'plane'}>Plane</MenuItem>
        </Select>
        </Box>
      <Box display="flex" alignItems="center" flexDirection={'column'}>
      <InputLabel id="demo-simple-select-helper-label">Выберите тип</InputLabel>
              <Select
              label = {'Type'}
              sx={{width:'200px'}}
              variant='standard'
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
        >
          <MenuItem value={''}>По умолчанию</MenuItem>
          <MenuItem value={'helicopter'}>Helicopter</MenuItem>
          <MenuItem value={'glider'}>Hlider</MenuItem>
          <MenuItem value={'parts'}>Parts</MenuItem>
          <MenuItem value={'plane'}>Plane</MenuItem>
        </Select>
        </Box>
        <Box display="flex" alignItems="center" flexDirection={'column'}>
        <Typography>Местоположение</Typography>
        <Box display="flex" alignItems="center" >
        <Select
              label = {'Type'}
              sx={{width:'200px'}}
              variant='standard'
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
        >
          <MenuItem value={''}>По умолчанию</MenuItem>
          <MenuItem value={'helicopter'}>Helicopter</MenuItem>
          <MenuItem value={'glider'}>Hlider</MenuItem>
          <MenuItem value={'parts'}>Parts</MenuItem>
          <MenuItem value={'plane'}>Plane</MenuItem>
        </Select>
      </Box>
    </Box>
      <Box display="flex" alignItems="center" flexDirection={'column'}>
        <Typography>Выберите цену</Typography>
        <Box display="flex" alignItems="center" >
      <TextField onChange={handlePriceMin} value={priceMin} label="От" variant="standard" />
      <TextField onChange={handlePriceMax} value={priceMax} label="До" variant="standard" />
      </Box>
    </Box>
      <Box display="flex" alignItems="center" flexDirection={'column'}>
        <Typography>Выберите дату</Typography>
        <Box display="flex" alignItems="center" >
      <TextField label="От" variant="standard" />
      <TextField label="До" variant="standard" />
      </Box>
    </Box>
      <Box display="flex" alignItems="center" flexDirection={'column'}>
        <Typography>Выберите мощность</Typography>
        <Box display="flex" alignItems="center" >
      <TextField value={powerMin} onChange={(e) => setPowerMin(e.target.value)} label="От" variant="standard" />
      <TextField value={powerMax} onChange={(e) => setPowerMax(e.target.value)} label="До" variant="standard" />
      </Box>
    </Box>
    <List>
      <ListItem button onClick={handleClick}>
        <ListItemText primary="Сортировка" />
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem >
            <ListItemIcon>{/* Insert icon here */}</ListItemIcon>
            <ListItemText primary="По умолчанию"  />
          </ListItem>
          <ListItem >
            <ListItemIcon>{/* Insert icon here */}</ListItemIcon>
            <ListItemText primary="Дешевле" />
          </ListItem>
          <ListItem >
            <ListItemIcon>{/* Insert icon here */}</ListItemIcon>
            <ListItemText primary="Дороже"  />
          </ListItem>
        </List>
      </Collapse>
    </List>
  </div>
  )
}
