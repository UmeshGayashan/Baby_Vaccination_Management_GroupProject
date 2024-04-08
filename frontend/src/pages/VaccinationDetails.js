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
   <Footer/>
   
       
    </div>
  
   );
};

export default VDetails;