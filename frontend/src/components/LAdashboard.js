
import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GradeIcon from '@mui/icons-material/Grade';
import { Link } from 'react-router-dom';

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
        <ListItemText primary=" Add Vaccination" sx={{ color: 'black' }}  />
      </ListItemButton>


      <ListItemButton component={Link} to="/add-child">
        <ListItemIcon>
          <GradeIcon />
        </ListItemIcon>
        <ListItemText primary=" Add Child" sx={{ color: 'black' }} />
      </ListItemButton>

      <ListItemButton component={Link} to="/add-perant">
        <ListItemIcon>
          <GradeIcon />
        </ListItemIcon>
        <ListItemText primary=" Add Parent" sx={{ color: 'black' }} />
      </ListItemButton>

      <ListItemButton component={Link} to="/low-admin">
        <ListItemIcon>
          <GradeIcon />
        </ListItemIcon>
        <ListItemText primary=" child Collection" sx={{ color: 'black' }} />
      </ListItemButton>

      <ListItemButton component={Link} to="/low-admin-parants">
        <ListItemIcon>
          <GradeIcon />
        </ListItemIcon>
        <ListItemText primary=" Parent Collection" sx={{ color: 'black' }} />
      </ListItemButton>

      <ListItemButton component={Link} to="/VaccHistory">
        <ListItemIcon>
          <GradeIcon />
        </ListItemIcon>
        <ListItemText primary=" Vaccination History" sx={{ color: 'black' }} />
      </ListItemButton>
      {/* <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <GradeIcon />
        </ListItemIcon>
        <ListItemText primary="Vaccines" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton> */}
    </List>
 
  </div>
  );
}
export default LAdminDashBoard;