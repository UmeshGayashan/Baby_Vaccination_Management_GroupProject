
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
        <ListItemText primary=" Add Vaccination" />
      </ListItemButton>


      <ListItemButton component={Link} to="/hupdate-child">
        <ListItemIcon>
          <GradeIcon />
        </ListItemIcon>
        <ListItemText primary=" Update Child" />
      </ListItemButton>

      <ListItemButton component={Link} to="/hadd-child">
        <ListItemIcon>
          <GradeIcon />
        </ListItemIcon>
        <ListItemText primary=" Add Child" />
      </ListItemButton>

      <ListItemButton component={Link} to="/hadd-perant">
        <ListItemIcon>
          <GradeIcon />
        </ListItemIcon>
        <ListItemText primary=" Add Parent" />
      </ListItemButton>

      <ListItemButton component={Link} to="/add-proffession">
        <ListItemIcon>
          <GradeIcon />
        </ListItemIcon>
        <ListItemText primary=" Add Professionals" />
      </ListItemButton>

      <ListItemButton component={Link} to="/high-admin-child">
        <ListItemIcon>
          <GradeIcon />
        </ListItemIcon>
        <ListItemText primary=" child Collection" />
      </ListItemButton>

      <ListItemButton component={Link} to="/high-admin-parants">
        <ListItemIcon>
          <GradeIcon />
        </ListItemIcon>
        <ListItemText primary=" Parent Collection" />
      </ListItemButton>

      <ListItemButton component={Link} to="/high-admin-proffessions">
        <ListItemIcon>
          <GradeIcon />
        </ListItemIcon>
        <ListItemText primary=" Professionals Collection" />
      </ListItemButton>


      {/* <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <GradeIcon />
                </ListItemIcon>
                <ListItemText primary="Vaccines" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton> */}
      {/* <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding> */}
      {/* <ListItemButton sx={{ pl: 4 }} component={Link} to="/vaccines/1">
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="BCG" />
                    </ListItemButton> */}

      {/* <ListItemButton sx={{ pl: 4 }} component={Link} to="/vaccines/1">
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Vaccine 2" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }} component={Link} to="/vaccines/1">
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="BCG" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }} component={Link} to="/vaccines/1">
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="BCG" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} component={Link} to="/vaccines/1">
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="BCG" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} component={Link} to="/vaccines/1">
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="BCG" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} component={Link} to="/vaccines/1">
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="BCG" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} component={Link} to="/vaccines/1">
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="BCG" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} component={Link} to="/vaccines/1">
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="BCG" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }} component={Link} to="/vaccines/1">
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="BCG" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }} component={Link} to="/vaccines/1">
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="BCG" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }} component={Link} to="/vaccines/1">
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="BCG" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }} component={Link} to="/vaccines/1">
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="BCG" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} component={Link} to="/vaccines/1">
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="BCG" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} component={Link} to="/vaccines/1">
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="BCG" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} component={Link} to="/vaccines/1">
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="BCG" />
          </ListItemButton> */}
      {/* <ListItemButton sx={{ pl: 4 }} component={Link} to="/vaccines/1">
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="BCG" />
          </ListItemButton> */}
      {/* </List>

            </Collapse> */}
    </List>
  );
}
export default HAdminDashBoard;