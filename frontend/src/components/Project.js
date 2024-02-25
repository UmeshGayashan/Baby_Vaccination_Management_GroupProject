import { useMemo } from "react";
import { Button } from "@mui/material";
import "./Project.css";

const Project = ({ unsplashcVEOhJJmEE, propBackgroundImage }) => {
  const projectStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div className="project" style={projectStyle}>
      <img
        className="unsplashcveoh-jjmee-icon"
        alt=""
        src={unsplashcVEOhJJmEE}
      />
      <div className="tint" />
      <div className="container-frame">
        <h2 className="name-of-vaccine">Name Of Vaccine</h2>
        <div className="lorem-ipsum-dolor">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros.
        </div>
      </div>
      <div className="primary-button-row">
        <Button
          className="secondary-button3"
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#1d2130",
            fontSize: "16",
            background: "#fff",
            borderRadius: "4px",
            "&:hover": { background: "#fff" },
            width: 146,
            height: 51,
          }}
        >
          Learn more
        </Button>
      </div>
    </div>
  );
};

export default Project;
