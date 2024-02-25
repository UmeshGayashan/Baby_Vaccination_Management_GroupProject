import { Button } from "@mui/material";
import "./MeetTheTeam.css";

const MeetTheTeam = () => {
  return (
    <section className="meet-the-team">
      <div className="bg8">
        <img
          className="unsplashcveoh-jjmee-icon1"
          alt=""
          src="/unsplashcveoh-jjmee@2x.png"
        />
        <img className="tint-icon" loading="eager" alt="" src="/tint.svg" />
        <h1 className="you-can-take2">
          You can take advice from provided doctors for children with special
          needs!
        </h1>
        <div className="links-footer">
          <Button
            className="secondary-button7"
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#1d2130",
              fontSize: "16",
              background: "#fff",
              borderRadius: "4px",
              "&:hover": { background: "#fff" },
              height: 51,
            }}
          >
            Meet your doctor
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
