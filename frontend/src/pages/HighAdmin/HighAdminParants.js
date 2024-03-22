
import "../pageCss/HighAdminParants.css";
import TableRow from "../../components/TableRow";
import Footer1 from "../../components/Footer1";
import "../pageCss/LowAdminParants.css";
import "../pageCss/UserPage.css";
import { Button } from "@mui/material";
import DesktopDatePicker from "../../components/DesktopDatePicker";
import FrameContainer from "../../components/FrameContainer";
import HAdashboard from "../../components/HA_dashboard";
import HAP_MID from "../../components/HAP_Mid";

const HighAdminParants = () => {


  return (


    <div className="user-page">

      <section className="frame-textbox">
        {/* navbar and header */}
        <TableRow />
        <div className="text-area" style={{ marginTop: "-55px" }} />
      </section>
      <section className="image-placeholder">

        {/* dashboard */}
        <HAdashboard/>
        <div className="label-text">
          {/* table */}
          <HAP_MID/>
        </div>

{/* right section */}
<div className="text-container">
          <div className="desktopdatepicker-parent" >
            <div className="go-to-calendar">
              <div className="list">
                <div className="header-picker">
                  <DesktopDatePicker />
                </div>
              </div>
            </div>

            <div className="go-to-calendar">
              <div className="list">
                <div className="header">
                  <div className="span">Notifications</div>
                </div>
                <div className="list-item">
                  <div className="m-icon">
                    <div className="v-icon">account_box</div>
                  </div>
                  <div className="v-list-item-content">
                    <div className="single-line-item">VACCINE NAME</div>
                    <div className="secondary-text">Secondary text</div>
                  </div>
                 
                </div>
                <div className="list-item1">
                  <div className="m-icon1">
                    <div className="v-icon2">account_box</div>
                  </div>
                  <div className="v-list-item-content1">
                    <div className="single-line-item1">VACCINE NAME</div>
                    <div className="secondary-text1">Secondary text</div>
                  </div>
                  
                </div>
                <div className="list-item2">
                  <div className="m-icon2">
                    <div className="v-icon4">account_box</div>
                  </div>
                  <div className="v-list-item-content2">
                    <div className="single-line-item2">VACCINE NAME</div>
                    <div className="secondary-text2">Secondary text</div>
                  </div>
                  
                </div>
              </div>
              <div className="go-to-calander">Go to calander..</div>
            </div> 
          </div>
        </div>
      </section>
{/* knowledge label yellow container */}
      <FrameContainer />

      {/* special need section */}
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

      <Footer1 />
    </div>

  );
};

export default HighAdminParants;
