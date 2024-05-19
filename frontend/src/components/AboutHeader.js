import "./comCss/FrameComponent1.css";

const AboutHeader = () => {
  return (
    <div className="section-title-group">

      <img
        className="section-title-icon3"
        loading="eager"
        alt=""
        src="/section-title-2@2x.png"
      />
      <div className="we-are-a-governmental-organiza-wrapper">
        <div className="we-are-a-governmental-organiza">
          <h1 className="we-are-a">We are a governmental organization</h1>
          <div className="lorem-ipsum-dolor-sit-amet-con">
            <b className="aenean-faucibus-nibh">
            We ensure children's health through timely vaccinations,
             offering comprehensive immunization programs for a healthier future.
            </b>
            <div className="lorem-ipsum-dolor5">
            We are dedicated to safeguarding children's health through comprehensive
             vaccination programs, ensuring timely immunizations and promoting a
              healthier future for all.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
