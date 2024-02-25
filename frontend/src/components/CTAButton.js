import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import CardFrame from "./CardFrame";
import Property1Default2 from "./Property1Default2";
import "./CTAButton.css";

const CTAButton = () => {
  return (
    <div className="c-t-a-button">
      <CardFrame propFlex="unset" propAlignSelf="stretch" />
      <TextField
        className="frame24"
        variant="outlined"
        sx={{
          "& fieldset": { border: "none" },
          "& .MuiInputBase-root": {
            height: "56.7px",
            backgroundColor: "#f2c94c",
            borderRadius: "0px 0px 0px 0px",
          },
        }}
      />
      <div className="knowledge-section">
        <div className="main2">
          <Property1Default2 />
        </div>
        <div className="list-parent">
          <div className="list2">
            <div className="header4">
              <div className="span8">NOTIFICATIONS</div>
            </div>
            <div className="list-item45">
              <div className="m-icon7">
                <div className="v-icon13">account_box</div>
              </div>
              <div className="v-list-item-content6">
                <div className="single-line-item6">CHILD NAME</div>
                <div className="secondary-text6">Secondary text</div>
              </div>
              <div className="button22">
                <div className="v-icon14">close</div>
                <div className="span9">DI</div>
              </div>
            </div>
            <div className="list-item46">
              <div className="m-icon8">
                <div className="v-icon15">account_box</div>
              </div>
              <div className="v-list-item-content7">
                <div className="single-line-item7">VACCINE NAME</div>
                <div className="secondary-text7">Secondary text</div>
              </div>
              <div className="button23">
                <div className="v-icon16">close</div>
                <div className="span10">DI</div>
              </div>
            </div>
            <div className="list-item47">
              <div className="m-icon9">
                <div className="v-icon17">account_box</div>
              </div>
              <div className="v-list-item-content8">
                <div className="single-line-item8">VACCINE NAME</div>
                <div className="secondary-text8">Secondary text</div>
              </div>
              <div className="button24">
                <div className="v-icon18">close</div>
                <div className="span11">DI</div>
              </div>
            </div>
          </div>
          <img
            className="announcement-icon"
            loading="eager"
            alt=""
            src="/announcement.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default CTAButton;
