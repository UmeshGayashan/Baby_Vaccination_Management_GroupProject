import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import OurVision from "../components/OurVision";
import SecondaryButton from "../components/SecondaryButton";
import BackEnd from "../components/BackEnd";
import MeetTheTeam from "../components/MeetTheTeam";
import Footer from "../components/Footer";
import "./AboutUs.css";
import Navbar from "../components/Navbar";

const AboutUs = () => {
  return (
    <div className="about-us">
      <Navbar/>

      <section className="media-contact">
        <FrameComponent1 />
        <OurVision />
      </section>
      <SecondaryButton />
      <BackEnd />
      <MeetTheTeam />
      <Footer />
    </div>
  );
};

export default AboutUs;
