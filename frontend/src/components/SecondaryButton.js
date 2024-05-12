
import "./comCss/SecondaryButton.css";

const SecondaryButton = () => {
  return (
    <section className="secondary-button5" >
      <div className="b-g" >
        <div className="you-can-take-advice">
        </div>
        <div className="our-journey-section">
          <div className="bg7" />
          <div className="mission-section">
            <div className="vision-section">
              <div className="our-journey" style={{marginLeft:"50px"}}>
                <b className="our-journey1">{`OUR JOURNEY `}</b>
                <h1 className="how-we-raised" >How we raised 34M</h1>
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
          <img className="image-icon" loading="eager" alt="" src="/image.png"/>
        </div>
      </div>
    </section>
  );
};

export default SecondaryButton;
