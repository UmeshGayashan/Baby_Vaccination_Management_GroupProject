import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar2 from "./Navbar2";
import "./comCss/Navbar.css";

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


