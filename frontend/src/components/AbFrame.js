import { useState, useEffect } from 'react';
import { Button } from "@mui/material";
import Rating from "./Rating";

const AbFrame = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="ab-frame">
      <section className="secondary-button5">
        <div className="b-g">
          <div className="you-can-take-advice">
            <Rating />
          </div>
          <div className="our-journey-section-2">
            <div className="bg7" />
            <div className="mission-section">
              <div className="vision-section">
                <div className="our-journey">
                  <b className="our-journey1" style={{ marginLeft: "30px", marginTop:"-10px" }}>{`______ Know About Us`}</b>
                  <h2 className="how-we-raised" style={{ marginLeft: "60px" }}> We provide details about vaccines for children </h2>

                  <div className="lorem-ipsum-dolor7" style={{ marginLeft: "60px" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                  </div>
                  <div className="lorem-ipsum-dolor7" style={{ marginLeft: "60px" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                  </div>
                  <div className="lorem-ipsum-dolor7" style={{ marginLeft: "60px" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                  </div>
                  <div className="lorem-ipsum-dolor7" style={{ marginLeft: "60px" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                  </div>

                  <div className="rectangle">
                    <Button href="/about-us"
                      className="primary-button4"
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        color: "#000",
                        fontSize: "16",
                        background: "#f2c94c",
                        borderRadius: "4px",
                        "&:hover": { background: "#f2c94c" },
                        width: 146,
                        height: 51,
                        marginLeft:"60px"
                      }}
                    >
                      Learn more
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="image-icon-2"
              loading="eager"
              alt=""
              src="/baby.png"
              style={{
                display: windowWidth <= 750 ? 'none' : 'block',
                width: '100%',
                height: 'auto',
                marginRight: "-80px"
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AbFrame;
