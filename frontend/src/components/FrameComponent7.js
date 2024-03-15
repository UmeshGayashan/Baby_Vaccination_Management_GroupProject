import { useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./comCss/FrameComponent7.css";

const FrameComponent7 = () => {
  const navigate = useNavigate();

  const onChangePasswordTextClick = useCallback(() => {
    navigate("/forgot-password");
  }, [navigate]);

  const onButtonSignInClick = useCallback(() => {
    navigate("/user-page");
  }, [navigate]);

  return (
    <div className="username-parent">
      <div className="username41">UserName</div>
      <TextField
        className="email-form"
        variant="outlined"
        sx={{
          "& fieldset": { borderColor: "#4d4ddb" },
          "& .MuiInputBase-root": { height: "45px" },
        }}
      />
      <div className="password4">Password</div>
      <TextField
        className="password-form"
        variant="outlined"
        sx={{
          "& fieldset": { borderColor: "#4d4ddb" },
          "& .MuiInputBase-root": { height: "45px" },
        }}
      />

<div className="check-button">
        <input  className="chekbotton" type="checkbox" />
        <span className="checkmark"></span>
      
      <div className="remmber-me">Remember me</div>
    </div>

      <div className="sign-in-text">
        <div className="change-password" onClick={onChangePasswordTextClick}>
          Change Password
        </div>
        <Button
          className="button-sign-in"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "24",
            background: "#1e1e1e",
            borderRadius: "8px",
            "&:hover": { background: "#1e1e1e" },
            height: 55,
          }}
          onClick={onButtonSignInClick}
        >
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default FrameComponent7;
