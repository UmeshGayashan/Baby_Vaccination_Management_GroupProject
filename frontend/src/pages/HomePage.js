import Footer from "../components/Footer";
import ServiceBox from "../components/ServiceBox";
import PrimaryButton from "../components/PrimaryButton";
import WhatWeDo from "../components/WhatWeDo";
import AbFrame from "../components/AbFrame";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import "./pageCss/HomePage.css";
import { Button } from "@mui/material";
import BackEnd from "../components/BackEnd";

const HomePage = () => {
  return (
    <div>
      <div className="home-page">
        <section className="frame-navbar">
          <Navbar />
          <Header />
        </section>

        {/* know about us */}
        <AbFrame />
        <div className="text-supporters">
          <div className="our-supporters">our Supporters</div>
          <div className="section-details-for-vaccines" />
        </div>
        {/* 
      WhatWeDo frame */}
        <WhatWeDo />

        {/* vaccination boxes */}
        <PrimaryButton />
       

        <img className="ab-1-icon" loading="eager" alt="" src="/ab-1@2x.png" />

        {/* meetmeto box , events */}
        <ServiceBox />

        
      </div>
      <Footer />
    </div>
  );
}; 

export default HomePage;
