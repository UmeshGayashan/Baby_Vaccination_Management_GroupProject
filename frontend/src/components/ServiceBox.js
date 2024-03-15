import { Button } from "@mui/material";
import "./comCss/ServiceBox.css";
import { Link } from "react-router-dom";

const ServiceBox = () => {
  return (
    <section className="service-box">
      <div className="cta1" style={{marginTop:"-600px"}}>
        <img className="bg-icon" loading="eager" alt="" src="/bg@2x.png" />
        <h1 className="you-can-take1">
          You can take advice from provided doctors for children with special
          needs!
        </h1>
        <div className="frame-with-title-and-buttons">
          <Link to="/contactus"><Button
            className="primary-button1"
            variant="contained"
            sx={{
              color: "#000",
              fontSize: "14",
              background: "#f2c94c",
              borderRadius: "4px",
              "&:hover": { background: "#f2c94c" },
              height: 56,
            }}
          >
            MEET YOUR Mento
          </Button></Link>
        </div>
      </div>
      <div className="text-container-with-title">
        <div className="line-element">
          <h1 className="our-events">Our Events</h1>
          <div className="frame-with-vaccine-details" />
        </div>
        <div className="event">
          <div className="bg3" />
          <div className="vector-family-support-icon">
            <div className="frame-with-three-parts">
              <b className="secondary-button-text3">200+</b>
            </div>
            <div className="vaccinated">Vaccinated</div>
          </div>
          <div className="vector-family-support-icon1" />
          <div className="vector-family-support-icon2">
            <div className="wrapper">
              <b className="b">2,000+</b>
            </div>
            <div className="all-registations">All Registations</div>
          </div>
          <div className="vector-family-support-icon3" />
          <div className="vector-family-support-icon4">
            <div className="container">
              <b className="b1">30,000+</b>
            </div>
            <div className="all-children">All Children</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBox;
