import { useState, useEffect } from 'react';
import FrameComponent from "./FrameComponent";
import "./comCss/WhatWeDo.css";
import Rating from "./Rating";

const WhatWeDo = () => {
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
    <section className="what-we-do3">
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
                  <b className="our-journey1" style={{ marginLeft: "-80px" }}>{`______ What we do`}</b>
                  <h2 className="how-we-raised" style={{ marginLeft: "-60px" }}> Some services we provide for our children</h2>

                  <div className="lorem-ipsum-dolor7" style={{ marginLeft: "-60px" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                    commodo diam libero vitae erat. Aenean faucibus nibh.
                  </div>
                </div>

                <div className="line-wrapper" style={{ marginLeft: "-80px" }}>
                  <div className="line">
                    <div className="icon-vector-family" />
                    <div className="family-support1">
                      <FrameComponent
                        vectorIconSupport="/vector.svg"
                        familySupport="Family support"
                      />
                      <FrameComponent
                        vectorIconSupport="/vector-1.svg"
                        familySupport="Health benefits"
                        propGap="13px 0px"
                        propWidth="18px"
                        propHeight="17px"
                      />
                      <FrameComponent
                        vectorIconSupport="/vector-2.svg"
                        familySupport="Tracking Vaccine"
                        propGap="13px 0px"
                        propWidth="18px"
                        propHeight="13.2px"
                      />
                      <FrameComponent
                        vectorIconSupport="/vector-3.svg"
                        familySupport="Guidelines"
                        propGap="13px 0px"
                        propWidth="18.1px"
                        propHeight="19px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {windowWidth > 750 && (
              <img
                className="image-icon"
                loading="eager"
                alt=""
                src="/unsplashsbiak0pkuie@2x.png"
                style={{ width: '100%', height: 'auto', marginRight: "-80px", marginLeft: "30px" }}
              />
            )}
          </div>
        </div>
      </section>
    </section>
  );
};

export default WhatWeDo;
