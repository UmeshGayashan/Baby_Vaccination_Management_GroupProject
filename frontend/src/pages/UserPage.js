import { Button } from "@mui/material";
import RectangleShape from "../components/RectangleShape";
import BGRectangle from "../components/BGRectangle";
import CustomSidenav from "../components/CustomSidenav";
import Minheight from "../components/Minheight";
import DesktopDatePicker from "../components/DesktopDatePicker";
import FrameContainer from "../components/FrameContainer";
import "./UserPage.css";
import Footer from "../components/Footer";

const UserPage = () => {
  return (
    <div className="user-page">
      <section className="frame-textbox">
        {/* navbar */}
        <RectangleShape />
        {/* header */}
        <BGRectangle />

        <div className="text-area" />
      </section>
      <section className="image-placeholder">

        {/* dashboard */}
        <CustomSidenav />
        <div className="label-text">
          {/* table */}
          <Minheight />
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
                  <div className="span">UPCOMING VACCINE</div>
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
{/* yellow knowledge label container */}
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

      <Footer />
    </div>
  );
};

export default UserPage;
