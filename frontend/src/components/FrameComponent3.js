import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import "./FrameComponent3.css";

const FrameComponent3 = () => {
  return (
    <section className="footer-parent">
      <div className="footer8">
        <footer className="bg10" />
        <div className="largerthan-parent3">
          <b className="largerthan6">largerthan</b>
          <div className="i6">i</div>
        </div>
        <div className="links4">
          <div className="our-team4">
            <b className="home6">Home</b>
            <div className="about-us7">About us</div>
            <div className="team4">Team</div>
            <div className="what-we-do7">What we do</div>
            <div className="contact6">Contact</div>
          </div>
          <div className="more8">
            <b className="more9">More</b>
            <div className="projects4">Projects</div>
            <div className="events4">Events</div>
            <div className="donate4">Donate</div>
            <div className="blog4">Blog</div>
          </div>
          <div className="connect8">
            <b className="connect9">{`Connect `}</b>
            <div className="facebook4">Facebook</div>
            <div className="instagram4">Instagram</div>
            <div className="twitter4">Twitter</div>
            <div className="linkdin4">{`Linkdin `}</div>
          </div>
        </div>
        <div className="form4">
          <h1 className="subscribe-to-get-container">
            <p className="drop-your-feedbacks">Drop Your Feedback's</p>
            <p className="and-complains">and Complains</p>
          </h1>
          <div className="form-field4">
            <div className="your-email4">Your email</div>
            <TextField
              className="input7"
              variant="outlined"
              sx={{
                "& fieldset": { borderColor: "rgba(235, 240, 249, 0.3)" },
                "& .MuiInputBase-root": { height: "64px" },
                width: "456px",
              }}
            />
            <Button
              className="secondary-button9"
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#1d2130",
                fontSize: "16",
                background: "#fff",
                borderRadius: "4px",
                "&:hover": { background: "#fff" },
                width: 101,
                height: 64,
              }}
            >
              Send
            </Button>
          </div>
        </div>
      </div>
      <img className="rectangle-container-icon" loading="eager" alt="" />
    </section>
  );
};

export default FrameComponent3;
