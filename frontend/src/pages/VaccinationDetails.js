import Navbar from "../components/Navbar";
import BGRectangle from "../components/BGRectangle";
import "./pageCss/HomePage.css";
import Footer from "../components/Footer";
import VMid from "../Mid/V_mid";

const VDetails = () => {
  return ( 
    <div >
       
        <Navbar/>
        {/* header */}
        <BGRectangle />

        {/* frame set */}
        <VMid/>
        <Footer
        propAlignSelf="unset"
        propPosition="absolute"
        propTop="2700px"
        propLeft="0px"
        propWidth="100%"
      />
   
       
    </div>
  
   );
};

export default VDetails;