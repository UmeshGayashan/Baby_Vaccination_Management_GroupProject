import Footer from "../components/Footer";
import ServiceBox from "../components/ServiceBox";
import PrimaryButton from "../components/PrimaryButton";
import WhatWeDo from "../components/WhatWeDo";
import AbFrame from "../components/AbFrame";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import "./pageCss/HomePage.css";
import { Button, Rating } from "@mui/material";
import BackEnd from "../components/BackEnd";
import Tint from "../components/Tint";
import OurVision from "../components/OurVision";
import FrameComponent1 from "../components/FrameComponent1";
import SecondaryButton from "../components/SecondaryButton";
import VCard from "../components/vcard";



const HomePage = () => {
  return (
    <div>

      <div className="home-page">
        <section className="frame-navbar"  >
          <Navbar />
          <Header />
        </section>
        

        {/* know about us */}
       <AbFrame/>

        {/* 
      WhatWeDo frame */}
        <WhatWeDo />
       
        {/* vaccination boxes */}
        
     <div style={{marginTop:"3000px"}} > <VCard/>
    </div>
    
      </div>
      <Footer />
      
     
    </div>
  );
}; 

export default HomePage;
