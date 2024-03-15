import { useMemo } from "react";
import { Button } from "@mui/material";
import { Link } from 'react-router-dom';
import "./comCss/Navbar2.css";

const Navbar2 = ({
  media,
  navButton,
  iPadding,
  whatWeDoWidth,
  propWidth,
  onAboutUsText1Click,
  onNavButtonClick,
}) => {
  const navbarStyle = useMemo(() => {
    return {
      padding: iPadding,
    };
  }, [iPadding]);

  const navLinkStyle = useMemo(() => {
    return {
      width: whatWeDoWidth,
    };
  }, [whatWeDoWidth]);

  const navButtonStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="navbar2" style={navbarStyle}>
      <div className="largerthan-parent2">
        <h3 className="largerthan5">BabyVaxPro</h3>
        <div className="i5" />
      </div>
      <div className="nav-link2" style={navLinkStyle}>           
       <Link className="home5" to="/">
        Home            </Link>
        <Link className="home5" to="/about-us">
          About us
        </Link>
        <Link className="home5" to="/user-page">
          What We Do
        </Link>
        <Link className="home5" to="/low-admin">
          Meet Mento
        </Link>
        <Link className="home5" to="/high-admin-parants">
          Contact
        </Link>

      </div>
      <Button
        className="nav-button1"
        disableElevation={true}
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "16",
          background: "#1d2130",
          borderRadius: "4px",
          "&:hover": { background: "#1d2130" },
          width: 121,
          height: 43,
        }}
        onClick={onNavButtonClick}
        style={navButtonStyle}
      >
        {navButton}
      </Button>
    </div>
  );
};

export default Navbar2;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Button } from '@mui/material'; 
// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <div className="navbar-wrapper-p">
//         <div className="navbar2">
//           <div className="largerthan-parent2">
//             <b className="largerthan5">BabyVaxPro</b>
//             <div className="i5" />
//           </div>
//           <div className="nav-link1">
//             <Link className="home5" to="/">
//               Home
//             </Link>
//             <Link className="home5" to="/about-us">
//               About us
//             </Link>
//             <Link className="home5" to="/user-page">
//               What We Do
//             </Link>
//             <Link className="home5" to="/low-admin">
//               Meet Mento
//             </Link>
//             <Link className="home5" to="/add-child">
//               Contact
//             </Link>
//           </div>
//           <Button sx={{ backgroundColor: 'black', color: 'white' }} variant="contained" href="/login">
//             Login
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

