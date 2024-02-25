import { useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./RecoverPassword.css";

const RecoverPassword = () => {
  const navigate = useNavigate();

  const onButtonRecoverClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="recover-password">
      <div className="main-frame">
        <div className="main-frame-child" />
        <img
          className="empty-frame-icon"
          loading="eager"
          alt=""
          src="/55-1@2x.png"
        />
      </div>
      <div className="inner-frame">
        <div className="child-frame">
          <div className="recovery-text">
            <div className="password-input1">
              <div className="recovery-password">Recovery Password</div>
              <img
                className="password-icon"
                loading="eager"
                alt=""
                src="/2-101@2x.png"
              />
            </div>
            <form className="account-sign-in-text">
              <div className="password1">Password</div>
              <TextField
                className="form-password"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#4d4ddb" },
                  "& .MuiInputBase-root": { height: "55px" },
                }}
              />
              <div className="reapet-password">Reapet Password</div>
              <div className="form-rectangle">
                <TextField
                  className="form-repeat-password"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#4d4ddb" },
                    "& .MuiInputBase-root": { height: "55px" },
                  }}
                />
              </div>
              <div className="recover-button">
                <div className="password-sterg">Password sterg:</div>
              </div>
              <Button
                className="button-recover"
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
            </form>
          </div>
          <div className="do-you-have-container">
            <span>{`Do you have account `}</span>
            <span className="signin">SignIn</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecoverPassword;
