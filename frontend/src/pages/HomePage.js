import Footer from "../components/Footer";
import ServiceBox from "../components/ServiceBox";
import StatsSection from "../components/StatsSection";
import PrimaryButton from "../components/PrimaryButton";
import WhatWeDo from "../components/WhatWeDo";
import AbFrame from "../components/AbFrame";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="frame-navbar">
        <Navbar />
        <Header />
      </section>
      
      
      <div className="text-supporters">
        <div className="our-supporters">our Supporters</div>
        <div className="section-details-for-vaccines" />
      </div>
      <WhatWeDo />
      <PrimaryButton />
      <StatsSection />
      <AbFrame />
      <img className="ab-1-icon" loading="eager" alt="" src="/ab-1@2x.png" />
      <ServiceBox />
      <Footer
        propAlignSelf="unset"
        propPosition="absolute"
        propTop="5003px"
        propLeft="0px"
        propWidth="100%"
      />

    </div>
  );
};

export default HomePage;
