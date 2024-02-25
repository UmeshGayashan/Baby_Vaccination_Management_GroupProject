import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./ChildFrame.css";

const ChildFrame = () => {
  const navigate = useNavigate();

  const onButtonRecoverClick = useCallback(() => {
    navigate("/recover-password");
  }, [navigate]);

  return (
    <div className="child-frame2">
      <div className="recovery-password-frame">
        <div className="rectangle2">
          <img className="icon110" loading="eager" alt="" src="/2-101@2x.png" />
          <div className="recovery-password1">Recovery Password</div>
        </div>
      </div>
      <div className="parent-frame1">
        <div className="email3">Email</div>
        <input className="form-email" type="text" />
      </div>
      <Button
        className="button-recover1"
        disableElevation={true}
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "24",
          background: "#000",
          borderRadius: "8px",
          "&:hover": { background: "#000" },
          height: 55,
        }}
        onClick={onButtonRecoverClick}
      >
        Recover
      </Button>
      <div className="do-you-have-container1">
        <span>{`Do you have account `}</span>
        <span className="signin1">SignIn</span>
      </div>
    </div>
  );
};

export default ChildFrame;
