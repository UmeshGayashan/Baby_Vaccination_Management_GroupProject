
import TableRow from "../components/TableRow";
import Footer1 from "../components/Footer1";
import "./LowAdminParants.css";
import "./UserPage.css";
import { Button } from "@mui/material";
import DesktopDatePicker from "../components/DesktopDatePicker";
import FrameContainer from "../components/FrameContainer";
import "./UserPage.css";
import LAP_MID from "../components/LAP_Mid";
import LAdashboard from "../components/LA_Dashboard";



const LowAdminParants = () => {
  return (

    <div className="user-page">
     
    <section className="frame-textbox">
    <TableRow/>
    <div className="text-area" style={{ marginTop:"-55px"}}  />
    </section>
    <section className="image-placeholder">

      {/* dashboard */}
      <LAdashboard />
      <div className="label-text">
       {/* table */}
        <LAP_MID/>
      </div>

      <div className="text-container">
        <div className="desktopdatepicker-parent" >


          <div className="go-to-calendar">
            <div className="list">
              <div className="header-picker">
                <DesktopDatePicker />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    
    <FrameContainer /> 


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
            Meet your doctor
          </Button>
        </div>
      </div>
    </section>
   
    <Footer1/>
  </div>
  );
};

export default LowAdminParants;
