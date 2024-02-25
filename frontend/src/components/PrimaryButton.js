import { useCallback } from "react";
import { Button } from "@mui/material";
import Project from "./Project";
import "./PrimaryButton.css";

const PrimaryButton = () => {
  const onProjectRowContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='tint']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <section className="primary-button3">
      <div className="frame-navbar1">
        <img
          className="section-title-icon"
          loading="eager"
          alt=""
          src="/section-title@2x.png"
        />
        <div className="nav-link">
          <h1 className="most-impotent-vaccination-container">
            <p className="most-impotent">{`Most Impotent   `}</p>
            <p className="vaccination">Vaccination</p>
            <p className="details">Details</p>
          </h1>
        </div>
      </div>
      <div className="project-row" onClick={onProjectRowContainerClick}>
        <Project unsplashcVEOhJJmEE="/unsplashcveoh-jjmee@2x.png" />
        <div className="project1">
          <img
            className="unsplashiigovkrty8g-icon"
            alt=""
            src="/unsplashiigovkrty8g@2x.png"
          />
          <div className="tint1" />
          <div className="name-of-vaccine-parent">
            <h2 className="name-of-vaccine1">Name Of Vaccine</h2>
            <div className="lorem-ipsum-dolor-container">
              <p className="blank-line">&nbsp;</p>
              <p className="lorem-ipsum-dolor1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
            </div>
          </div>
          <div className="secondary-button-wrapper">
            <Button
              className="secondary-button4"
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
        <Project
          unsplashcVEOhJJmEE="/unsplash1aa2fadydc@2x.png"
          propBackgroundImage="url('/unsplash1aa2fadydc@2x.png')"
        />
      </div>
    </section>
  );
};

export default PrimaryButton;
