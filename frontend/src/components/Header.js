import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./comCss/Header.css";

const Header = () => {
  const navigate = useNavigate();

  const onButtonRowClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="header1" >
      <img className="bg-image-icon" alt="" src="/bg-image@2x.png" />
      <div className="our-supporters1">
        <div className="support-frame">
          <h1 className="get-your-childrens-container">
            <p className="get-your-childrens">Get Your Children's</p>
            <p className="vaccine">Vaccine</p>
            <p className="we-remind-you">We remind You</p>
          </h1>
          <Button
            className="button-row"
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#1d2130",
              fontSize: "16",
              background: "#fff",
              borderRadius: "0px 0px 0px 0px",
              "&:hover": { background: "#fff" },
              width: 128,
              height: 51,
            }}
            onClick={onButtonRowClick}
          >
            Get Start
          </Button>
        </div>
      </div>
      <div className="button-row1">
        <div className="children-under-our">230 children under our care</div>
        <div className="line-separator1">
          <div className="donations-collected" />
        </div>
        <div className="ab-frame1">
          <div className="frame-group1">
            <img
              className="vaccine-info-icon"
              loading="eager"
              alt=""
              src="/1.svg"
            />
            <img
              className="vaccine-info-icon1"
              loading="eager"
              alt=""
              src="/2.svg"
            />
            <img
              className="vaccine-info-icon2"
              loading="eager"
              alt=""
              src="/3.svg"
            />
            <img
              className="vaccine-info-icon3"
              loading="eager"
              alt=""
              src="/4.svg"
            />
          </div>
          <div className="donation-summary">
            <div className="donations-collected1">58 donations collected</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
