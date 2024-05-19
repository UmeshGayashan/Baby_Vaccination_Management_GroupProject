import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./comCss/Header.css";

const MHeader = () => {
  const navigate = useNavigate();

  
  return (
    <div className="header1" style={{ marginBottom:"80px"}} >
      <img className="bg-image-icon" alt="" src="/mento.jpg" />
      <div className="our-supporters1">
        <div className="support-frame" >
          <h1 className="get-your-childrens-container">
            <p className="get-your-childrens">We Are Ready  </p>
            <p className="vaccine">To Help</p>
            <p className="we-remind-you">You</p>
          </h1>
          
        </div>
      </div>
      <div className="button-row1" style={{color:"black"}}>
        <div className="children-under-our" >230 children under our care</div>
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

export default MHeader;
