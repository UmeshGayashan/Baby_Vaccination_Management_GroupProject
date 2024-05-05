import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import "./comCss/PrimaryButton.css";

const projectsData = [
  {
    unsplashImage: "/unsplashcveoh-jjmee@2x.png",
    vaccineImage: "/unsplashiigovkrty8g@2x.png",
    name: "Name of Vaccine 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },

  {
    unsplashImage: "/unsplashcveoh-jjmee@2x.png",
    vaccineImage: "/unsplashiigovkrty8g@2x.png",
    name: "Name of Vaccine 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },

  {
    unsplashImage: "/unsplashcveoh-jjmee@2x.png",
    vaccineImage: "/unsplashiigovkrty8g@2x.png",
    name: "Name of Vaccine 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },


  // Add more projects as needed
];

const PrimaryButton = () => {
  const onProjectRowContainerClick = () => {
    const anchor = document.querySelector("[data-scroll-to='tint']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  return (
    <section className="primary-button3">
      {/* <div className="frame-navbar1">
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
      </div> */}

      {/* <div className="project-row">
        {projectsData.map((project, index) => (
          <div key={index} onClick={onProjectRowContainerClick}>

            <div className="project1">
              <img
                className="unsplashiigovkrty8g-icon"
                alt=""
                src={project.vaccineImage}
              />
              <div className="tint1" />
              <div className="name-of-vaccine-parent">
                <h2 className="name-of-vaccine1">{project.name}</h2>
                <div className="lorem-ipsum-dolor-container">
                  <p className="blank-line">&nbsp;</p>
                  <p className="lorem-ipsum-dolor1">{project.description}</p>
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
                  component={Link}
                  to={`/vaccines/1`} 
                  // to={`/v-details/${index + 1}`} // You can use a dynamic route if needed
                >
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </section>
  );
};

export default PrimaryButton;
