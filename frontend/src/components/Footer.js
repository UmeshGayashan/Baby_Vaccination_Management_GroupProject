import { useMemo } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import "./Footer.css";

const Footer = ({
  propAlignSelf,
  propPosition,
  propTop,
  propLeft,
  propWidth,
}) => {
  const footerStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      position: propPosition,
      top: propTop,
      left: propLeft,
      width: propWidth,
    };
  }, [propAlignSelf, propPosition, propTop, propLeft, propWidth]);

  return (
    <footer className="footer6" style={footerStyle}>
      <div className="footer7">
        <div className="bg9" />
        <div className="largerthan-parent1">
          <b className="largerthan4" />
          <div className="i4">i</div>
        </div>
        <div className="links3">
          <div className="our-team3">
            <b className="home4">Home</b>
            <div className="about-us5">About us</div>
            <div className="team3">Team</div>
            <div className="what-we-do5">What we do</div>
            <div className="contact4">Contact</div>
          </div>
          <div className="more6">
            <b className="more7">More</b>
            <div className="projects3">Projects</div>
            <div className="events3">Events</div>
            <div className="donate3">Donate</div>
            <div className="blog3">Blog</div>
          </div>
          <div className="connect6">
            <b className="connect7">{`Connect `}</b>
            <div className="facebook3">Facebook</div>
            <div className="instagram3">Instagram</div>
            <div className="twitter3">Twitter</div>
            <div className="linkdin3">{`Linkdin `}</div>
          </div>
        </div>
        <div className="form3">
          <h1 className="subscribe-to-get3">PUT YOUR FEEDBACKS HERE</h1>
          <div className="form-field3">
            <div className="your-email3">Your email</div>
            <TextField
              className="input3"
              variant="outlined"
              sx={{
                "& fieldset": { borderColor: "rgba(235, 240, 249, 0.3)" },
                "& .MuiInputBase-root": { height: "64px" },
                width: "456px",
              }}
            />
            <Button
              className="secondary-button8"
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#1d2130",
                fontSize: "16",
                background: "#fff",
                borderRadius: "4px",
                "&:hover": { background: "#fff" },
                width: 136,
                height: 64,
              }}
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <img
        className="twitter-negative-icon"
        loading="eager"
        alt=""
        src="/2-10@2x.png"
      />
    </footer>
  );
};

export default Footer;
