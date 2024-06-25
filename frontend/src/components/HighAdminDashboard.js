
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

function HAdminDashBoard() {
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


      <ListItemButton component={Link} to="/haVacctination">
        <ListItemIcon>
          <GradeIcon />
        </ListItemIcon>
        <ListItemText primary=" Add Vaccination" sx={{ color: 'black' }} />
      </ListItemButton>


      <ListItemButton component={Link} to="/hupdate-child">
        <ListItemIcon>
          <GradeIcon />
        </ListItemIcon>
        <ListItemText primary=" Update Child" sx={{ color: 'black' }} />
      </ListItemButton>

      <ListItemButton component={Link} to="/hadd-child">
        <ListItemIcon>
          <GradeIcon />
        </ListItemIcon>
        <ListItemText primary=" Add Child" sx={{ color: 'black' }} />
      </ListItemButton>

      <ListItemButton component={Link} to="/hadd-perant">
        <ListItemIcon>
          <GradeIcon />
        </ListItemIcon>
        <ListItemText primary=" Add Parent" sx={{ color: 'black' }}  />
      </ListItemButton>

      <ListItemButton component={Link} to="/add-proffession">
        <ListItemIcon>
          <GradeIcon />
        </ListItemIcon>
        <ListItemText primary=" Add Professionals" sx={{ color: 'black' }} />
      </ListItemButton>

      <ListItemButton component={Link} to="/high-admin-child">
        <ListItemIcon>
          <GradeIcon />
        </ListItemIcon>
        <ListItemText primary=" child Collection" sx={{ color: 'black' }} />
      </ListItemButton>

      <ListItemButton component={Link} to="/high-admin-parants">
        <ListItemIcon>
          <GradeIcon />
        </ListItemIcon>
        <ListItemText primary=" Parent Collection" sx={{ color: 'black' }} />
      </ListItemButton>

      <ListItemButton component={Link} to="/high-admin-proffessions">
        <ListItemIcon>
          <GradeIcon />
        </ListItemIcon>
        <ListItemText primary=" Professionals Collection" sx={{ color: 'black' }}/>
      </ListItemButton>
      <ListItemButton component={Link} to="/HighAdminVaccination">
        <ListItemIcon>
          <GradeIcon />
        </ListItemIcon>
        <ListItemText primary=" Vaccination Collection" sx={{ color: 'black' }} />
      </ListItemButton>
    </List>
  );
}
export default HAdminDashBoard;