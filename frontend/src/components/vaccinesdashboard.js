
import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import GradeIcon from '@mui/icons-material/Grade';
import { Link } from 'react-router-dom';

function VDashBoard() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 250, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader" sx={{fontSize:20}}>
          BabyVaxPro
        </ListSubheader>
      }
    >
      <ListItemButton component={Link} to="/iv">
        <ListItemIcon>
          <GradeIcon />
        </ListItemIcon>
        <ListItemText primary=" Why Vaccines"  sx={{ color: 'black' }} />
      </ListItemButton>

   
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <GradeIcon />
        </ListItemIcon>
        <ListItemText primary="Vaccines"  sx={{ color: 'black' }} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} component={Link} to="/vaccines/1">
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="BCG"  sx={{ color: 'black' }}/>
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }} component={Link} to="/vaccines/2">
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Hep B" sx={{ color: 'black' }}  />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }} component={Link} to="/vaccines/4">
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Hib" sx={{ color: 'black' }}  />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }} component={Link} to="/vaccines/3">
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Polio" sx={{ color: 'black' }} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} component={Link} to="/vaccines/6">
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Jap B" sx={{ color: 'black' }} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} component={Link} to="/vaccines/7">
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Rubella"sx={{ color: 'black' }}  />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} component={Link} to="/vaccines/8">
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="MMR" sx={{ color: 'black' }} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} component={Link} to="/vaccines/5">
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="a T d" sx={{ color: 'black' }} />
          </ListItemButton>
        </List>
      </Collapse>
      
    </List>
  );
}
export default VDashBoard;