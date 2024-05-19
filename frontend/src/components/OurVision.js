import "./comCss/OurVision.css";

const OurVision = () => {
  return (
    <div className="our-vision">

<video className="video-icon" autoPlay loop controlsList="nodownload noduration">
  <source src="/aboutvideo.mp4" type="video/mp4" />
</video>

      <div className="our-mission-section">
        <div className="our-mission-section-child" />
        <div className="our-mission">
          <div className="provide-inclusive-care">
            <div className="o-u-r-j-o-u-r-n-e-y">
              <div className="how-we-empower-parents">
                <b className="our-mission1">our mission</b>
                <h2 className="our-mission-is">
                  Our mission is to empower parents with knowledge about
                  vaccination, promoting the health and well-being of every
                  child
                </h2>
                <div className="we-believe-that" style={{fontSize:"20px"}}>
                  {" "}
                  We believe that informed decisions lead to healthier
                  communities, and we are committed to being a reliable resource
                  for parents seeking guidance on vaccination schedules, vaccine
                  safety, and the importance of immunization.
                </div>
              </div>
              <div className="our-vision1">
                <b className="our-vision2">our Vision</b>
                <div className="sri-lankan-government-support">
                  <h2 className="provide-more-inclusive">
                    Provide more inclusive care to children around the world
                  </h2>
                  <div className="lorem-ipsum-dolor6" style={{fontSize:"20px"}}>
                  Our vision is to create a world where every child is protected
                   from preventable diseases through comprehensive
                   vaccination programs. We strive to foster a healthier future by 
                   ensuring timely immunizations, 
                  educating families, and providing support, ultimately empowering 
                  communities to thrive in health and well-being.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="our-supporters2">our Supporters</div>
        </div>
        <div className="bg-frame">
          <div className="sri-lankan-government">
            Sri Lankan government hospitable
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
