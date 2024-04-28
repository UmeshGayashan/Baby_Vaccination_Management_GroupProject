import FrameComponent from "./FrameComponent";
import "./comCss/WhatWeDo.css";
import Rating from "./Rating";

const WhatWeDo = () => {
  return (
    <section className="what-we-do3">
      <div className="bg6" />
      <div className="section-title-parent">
        <img
          className="section-title-icon1"
          alt=""
          src="/section-title-1@2x.png"
        />
        <div className="some-services-wrapper">
          <div className="some-services">
            <h1 className="some-services-we">
              Some services we provide for our children
            </h1>
            <div className="lorem-ipsum-dolor3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </div>
          </div>
        </div>
        <div className="line-wrapper">
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
                familySupport="Guidines"
                propGap="13px 0px"
                propWidth="18.1px"
                propHeight="19px"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        className="unsplashsbiak0pkuie-icon"
        loading="eager"
        alt=""
        src="/unsplashsbiak0pkuie@2x.png"
      />

      <section className="secondary-button5" >
        <div className="b-g" >
          <div className="you-can-take-advice">
            <Rating />
          </div>
          <div className="our-journey-section">
            <div className="bg7" />
            <div className="mission-section">
              <div className="vision-section">
                <div className="our-journey">
                  <b className="our-journey1">{`______ What we do`}</b>
                  <h1 className="how-we-raised"> Some services we provide for our children</h1>
                  <div className="lorem-ipsum-dolor7">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                    commodo diam libero vitae erat. Aenean faucibus nibh.
                  </div>
                </div>
                <div className="social-row">
                  <div className="facebook-negative">
                    <div className="m">34M+</div>
                    <div className="donation-received">Donation Received</div>
                  </div>
                  <div className="facebook-negative1">
                    <div className="div">400+</div>
                    <div className="volunters">Volunters</div>
                  </div>
                  <div className="facebook-negative2">
                    <div className="div1">20+</div>
                    <div className="care-homes">Care homes</div>
                  </div>
                </div>
              </div>
            </div>
            <img className="image-icon" loading="eager" alt="" src="/image.png" />
          </div>
        </div>
      </section>








    </section>



  );
};

export default WhatWeDo;
