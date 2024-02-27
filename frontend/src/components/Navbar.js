import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar2 from "./Navbar2";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();



  const onNavButtonClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <header className="navbar">
      <div className="text-home-link">
        <Navbar2
          media="Meet Mento"
          navButton="Login"
          iPadding="var(--padding-lg) var(--padding-xl)"
          whatWeDoWidth="539px"
          propWidth="104px"
          onNavButtonClick={onNavButtonClick}
        />
      </div>
    </header>
  );
};

export default Navbar;


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