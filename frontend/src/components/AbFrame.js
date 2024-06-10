import { useState, useEffect } from 'react';
import { Button } from "@mui/material";
import WhatWeDo from './WhatWeDo';
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
    <div className="ab-frame" style={{ maxWidth: '100%', overflowX: 'hidden' }}>
      <section className="secondary-button5" style={{ width: '100%', marginTop:"-60px" }}>
        <div >
          <div className="you-can-take-advice">
          </div>
          <div className="our-journey-section-2" style={{ width: '100%' }}>
            <div />
            <div className="mission-section" style={{ width: '100%' }}>
              <div className="vision-section" style={{ width: '100%' }}>
                <div className="our-journey" style={{ marginLeft: windowWidth <= 750 ? "-20px" : "-50px", width: '100%' }}>
                  <b className="our-journey1" style={{ marginLeft: windowWidth <= 750 ? "10px" : "30px", marginTop: "-10px" }}>{`______ Know About Us`}</b>
                  <h2 className="how-we-raised" style={{ marginLeft: windowWidth <= 750 ? "20px" : "60px" }}> We provide details about vaccines for children </h2>

                  <div className="lorem-ipsum-dolor7" style={{ fontSize:"22px", color:"grey", marginLeft: windowWidth <= 750 ? "20px" : "60px" }}>
                    
                  Driven by a commitment to innovation and child health advocacy, we strive to make vaccination management a
                   seamless and stress-free experience for families everywhere. Join us in
                   our mission to protect the most vulnerable members of our community and ensure a healthier future for generations to come.
                   
                  </div>

                  <div className="lorem-ipsum-dolor7" style={{ fontSize:"22px", color:"grey",marginLeft: windowWidth <= 750 ? "20px" : "60px" }}>
                  At BabyVaxPro, we understand the importance of timely vaccinations in safeguarding children against preventable diseases.
                  </div>
                  

                  <div className="rectangle" style={{ marginLeft: windowWidth <= 750 ? "20px" : "60px" }}>
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
                display: windowWidth <= 1200 ? 'none' : 'block',
                width: '100%', // Adjust image width to be responsive
                height: '700px',
                marginRight: windowWidth <= 1200? "0px" : "-80px" // Adjust margin for smaller screens
              }}
            />
          </div>
        </div>
       
      </section>
      

      <WhatWeDo/>
      
     
    </div>
  );
};

export default AbFrame;
