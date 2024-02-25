import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Navbar1.css";

const Navbar1 = () => {
  const navigate = useNavigate();

  const onNavButtonClick = useCallback(() => {
    navigate("/user-page");
  }, [navigate]);

  return (
    <div className="navbar1">
      <div className="group-div">
        <h3 className="largerthan3">BabyVaxPro</h3>
        <div className="i3" />
      </div>
      <div className="nav-link1">
        <div className="home3">Home</div>
        <div className="about-us4">About us</div>
        <div className="what-we-do4">What We Do</div>
        <div className="media">Meet Doc</div>
        <div className="contact3">Contact</div>
      </div>
      <Button
        className="nav-button"
        disableElevation={true}
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "16",
          background: "#1d2130",
          borderRadius: "4px",
          "&:hover": { background: "#1d2130" },
          width: 104,
          height: 44,
        }}
        onClick={onNavButtonClick}
      >
        Login
      </Button>
    </div>
  );
};

export default Navbar1;
