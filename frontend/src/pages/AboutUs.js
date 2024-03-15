import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import OurVision from "../components/OurVision";
import SecondaryButton from "../components/SecondaryButton";
import BackEnd from "../components/BackEnd";
import Footer from "../components/Footer";
import "./AboutUs.css";
import Navbar from "../components/Navbar";
import { Button } from "@mui/material";

const AboutUs = () => {
  return (
    <div className="about-us">
      <Navbar/>

      <section className="media-contact">

        <FrameComponent1 />
        <OurVision />
      </section>
      {/* our Jurney */}
      <SecondaryButton />
      {/* Our Team */}
      <BackEnd />
    
      <section className="you-message-frame">
        <div className="cta">
          <div className="content">
            <h1 className="you-can-take">
              You can take advice from provided doctors for children with
              special needs!
            </h1>
            <Button
              className="primary-button"
              
              variant="contained"
              sx={{
                marginTop:"30px",
                textTransform: "none",
                color: "#000",
                fontSize: "16",
                background: "white",
                borderRadius: "4px",
                "&:hover": { background: "#f2c94c" },
                width: 187,
                height: 51,
              }}
            >
              Meet your doctor
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
