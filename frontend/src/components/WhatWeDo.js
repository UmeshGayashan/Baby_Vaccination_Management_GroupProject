import { useState, useEffect } from 'react';
import FrameComponent from "./FrameComponent";
import "./comCss/WhatWeDo.css";
import Footer from './Footer';
import VCard from '../pages/VCard';


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
    <div > 
      <section className="what-we-do33" style={{marginBottom:"100px" , paddingBottom:"0px" }}>
        <div className="secondary-button5 b-g">
          <div className="you-can-take-advice"></div>
          <div className="our-journey-section-2">
            <div className="bg7"></div>
            <div className="mission-section" >
              <div className="vision-section">
                <div className="our-journey-22" style={{marginTop:"80px", marginLeft:"-80px"}}>
                  <div  style={{marginBottom:"20px"}}> <b className="our-journey1" >{`______ What we do`}</b></div>
                  
                  <h2 className="how-we-raised"> Some services we provide for our children</h2>

                  <div className="lorem-ipsum-dolor7" style={{fontSize:"22px", marginRight:"-50px", marginTop:"20px"}}>
                  Investing in your baby's health begins with timely vaccinations.
                   Our comprehensive vaccination program ensures your child receives
                    essential immunizations, protecting them from harmful diseases. 
                    With a team of experienced healthcare professionals, we prioritize
                     safety and efficacy, providing personalized vaccination schedules 
                     tailored to your baby's needs. Trust us to safeguard your
                   baby's health and ensure a brighter, healthier future.
                  </div>
                </div>

                <div className="line-wrapper" style={{marginLeft:"-100px"}}>
                  <div className="line">
                    <div className="icon-vector-family" />
                    <div className="family-support1">
                      <FrameComponent
                        vectorIconSupport="/vector.svg"
                        familySupport="Family support"
                        paragraphContent="Our dedicated team provides comprehensive family support 
                        services tailored to your unique needs."
                      />
                      <FrameComponent
                        vectorIconSupport="/vector-1.svg"
                        familySupport="Health benefits"
                        paragraphContent="Discover the multitude of health benefits our program offers, promoting well-being 
                        for children and families alike."
                        propGap="13px 0px"
                        propWidth="18px"
                        propHeight="17px"
                      />
                      <FrameComponent
                        vectorIconSupport="/vector-2.svg"
                        familySupport="Tracking Vaccine"
                        paragraphContent="Stay informed and organized with our intuitive vaccine tracking system, ensuring timely
                         and efficient immunizations."
                        propGap="13px 0px"
                        propWidth="18px"
                        propHeight="13.2px"
                      />
                      <FrameComponent
                        vectorIconSupport="/vector-3.svg"
                        familySupport="Guidelines"
                        paragraphContent="Access expert guidelines and resources to navigate parenthood confidently, empowering you to make informed decisions for your 
                        child's health and development."
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
                style={{ width: '100%', height: 'auto',  marginLeft: "30px" }}
              />
            )}
          </div>
        </div>
      </section>
      <div style={{margin:"10px"}}> <VCard/></div>
      <Footer/>
    </div>
  );
};

export default WhatWeDo;
