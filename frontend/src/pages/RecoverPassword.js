import { useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import { useNavigate ,Link} from "react-router-dom";
import "./pageCss/RecoverPassword.css";

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
            <div className="password-input1" style={{marginTop:'90px'}}>
              <div className="recovery-password">Recovery Password</div>
              <img  
                className="password-icon"
                loading="eager"
                alt=""
                src="/2-101@2x.png"
              />
            </div>

            {/* info field */}
            <form className="account-sign-in-text">
              <div className="password1">Password</div>
              <TextField
                className="form-password"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#4d4ddb" },
                  "& .MuiInputBase-root": { height: "45px" },
                }}
              />
              <div className="reapet-password" style={{marginTop:"-10px"}}>Reapet Password</div>
              <div className="form-rectangle">
                <TextField
                  className="form-repeat-password"
                  variant="outlined"
                  sx={{
                  
                    "& fieldset": { borderColor: "#4d4ddb" },
                    "& .MuiInputBase-root": { height: "45px" },
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
          <div className="do-you-have-container" style={{marginTop:'-50px'}} >
            <span>{`Do you have account?`}</span>
            <Link to="/login" className="signin1" style={{ display: 'inline' }}>SignIn</Link>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecoverPassword;
