
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
import DesktopDatePicker from './DesktopDatePicker';

function LAdminDashBoard() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>             
    <List
      sx={{ width: '100%', maxWidth: 250, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader" sx={{ fontSize: 20 }}>
          BabyVaxPro
        </ListSubheader>
      }
    >
      {/* <ListItemButton component={Link} to="/iv">
        <ListItemIcon>
          <GradeIcon />
        </ListItemIcon>
        <ListItemText primary=" Why Vaccines" />
      </ListItemButton> */}

      <ListItemButton component={Link} to="/laVacctination">
        <ListItemIcon>
          <GradeIcon />
        </ListItemIcon>
        <ListItemText primary=" Add Vaccination" />
      </ListItemButton>


      <ListItemButton component={Link} to="/add-child">
        <ListItemIcon>
          <GradeIcon />
        </ListItemIcon>
        <ListItemText primary=" Add Child" />
      </ListItemButton>

      <ListItemButton component={Link} to="/add-perant">
        <ListItemIcon>
          <GradeIcon />
        </ListItemIcon>
        <ListItemText primary=" Add Parent" />
      </ListItemButton>

      <ListItemButton component={Link} to="/low-admin">
        <ListItemIcon>
          <GradeIcon />
        </ListItemIcon>
        <ListItemText primary=" child Collection" />
      </ListItemButton>

      <ListItemButton component={Link} to="/low-admin-parants">
        <ListItemIcon>
          <GradeIcon />
        </ListItemIcon>
        <ListItemText primary=" Parent Collection" />
      </ListItemButton>

      {/* <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <GradeIcon />
        </ListItemIcon>
        <ListItemText primary="Vaccines" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton> */}
    
    </List>

    {/* <div className="go-to-calendar" >
    <div className="list">
      <div className="header-picker">
        <DesktopDatePicker />
      </div>
    </div>
  </div> */}
  </div>
  );
}
export default LAdminDashBoard;