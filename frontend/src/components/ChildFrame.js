import { useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./comCss/FrameComponent7.css";

const ChildFrame = () => {
  const navigate = useNavigate();

  const onButtonRecoverClick = useCallback(() => {
    navigate("/recover-password");
  }, [navigate]);

  return (
    <div className="username-parent" style={{ marginTop: "20px" }}>
      <div className="username41">Email</div>
      <TextField
        className="email-form"
        variant="outlined"
        sx={{
          "& fieldset": { borderColor: "#4d4ddb" },
          "& .MuiInputBase-root": { height: "45px" },
        }}
      />



      <div className="sign-in-text">

        <Button
          className="button-sign-in"
          disableElevation={true}
          variant="contained"
          sx={{
            marginTop: "20px",
            textTransform: "none",
            color: "#fff",
            fontSize: "24",
            background: "#1e1e1e",
            borderRadius: "8px",
            "&:hover": { background: "#1e1e1e" },
            height: 55,
          }}
          onClick={onButtonRecoverClick}
        >
          Recover
        </Button>

      </div>

      <div className="do-you-have-container1" style={{ display: 'inline' }}>
        <span style={{ display: 'inline' }}>{`Do you have an account ?`}</span>
        <Link to="/login" className="signin1" style={{ display: 'inline' }}>SignIn</Link>
      </div>
    </div>
  );
};

export default ChildFrame;







