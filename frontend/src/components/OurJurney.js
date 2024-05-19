
import "./comCss/OurJurney.css";

const OurJurney = () => {
  return (
    <section className="secondary-button5" >
      <div className="b-g" >
        <div className="you-can-take-advice">
        </div>
        <div className="our-journey-section">
          <div className="bg7" />
          <div className="mission-section">
            <div className="vision-section">
              <div className="our-journey" style={{marginLeft:"58px"}}>
                <b className="our-journey1">{`OUR JOURNEY `}</b>
                <h1 className="how-we-raised" >How we raised 34M</h1>
                <div className="lorem-ipsum-dolor7" style={{fontSize:"20px"}}>
                From humble beginnings to becoming a leading provider of child vaccinations, our 
                journey is marked by unwavering dedication to children's health. We have built trust
                 within the community through our commitment to safety, personalized care, 
                and the relentless pursuit of excellence in immunization services, ensuring every child's brighter, healthier future.
                </div>
              </div>
              <div className="social-row">
                <div className="facebook-negative">
                  <div className="m">34M+</div>
                  <div className="donation-received" style={{fontSize:"20px"}}>Donation Received</div>
                </div>
                <div className="facebook-negative1">
                  <div className="div">400+</div>
                  <div className="volunters" style={{fontSize:"20px"}}>Volunters</div>
                </div>
                <div className="facebook-negative2">
                  <div className="div1">20+</div>
                  <div className="care-homes" style={{fontSize:"20px"}} >Care homes</div>
                </div>
              </div>
            </div>
          </div>
          <img className="image-icon" loading="eager" alt="" src="/image.png"/>
        </div>
      </div>
    </section>
  );
};

export default OurJurney;
