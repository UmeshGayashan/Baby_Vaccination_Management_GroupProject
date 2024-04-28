import { Button } from "@mui/material";
import "./comCss/ServiceBox.css";
import { Link } from "react-router-dom";

const ServiceBox = () => {
  return (
    <section className="service-box" style={{marginTop:"-650px"}}>

      <section className="you-message-frame" style={{marginBottom:"-150px"}}>
        <div className="cta">
          <div className="content">
            <h1 className="you-can-take">
              You can take advice from provided doctors for children with
              special needs!
            </h1>
            <Link to="/contactus"><Button
              className="primary-button"

              variant="contained"
              sx={{
                marginTop: "30px",
                textTransform: "none",
                color: "#000",
                fontSize: "16",
                background: "#f2c94c",
                borderRadius: "4px",
                "&:hover": { background: "#f2c94c" },
                width: 187,
                height: 51,
              }}
            >
              Meet your Mento
            </Button></Link>
          </div>
        </div>
      </section>

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
