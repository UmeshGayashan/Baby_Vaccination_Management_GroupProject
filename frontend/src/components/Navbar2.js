import { useMemo } from "react";
import { Button } from "@mui/material";
import "./Navbar2.css";

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
        <div className="home5">Home</div>
        <div className="about-us6" onClick={onAboutUsText1Click}>
          About us
        </div>
        <div className="what-we-do6">What We Do</div>
        <div className="media1">{media}</div>
        <div className="contact5">Contact</div>
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
