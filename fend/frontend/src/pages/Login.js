import { useCallback } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import './Css/login.css';

const Login = () => {
  const navigate = useNavigate();

  const onChangePasswordTextClick = useCallback(() => {
    navigate("/forgot-password");
  }, [navigate]);

  const onButtonSignInClick = useCallback(() => {
    navigate("/user-page");
  }, [navigate]);

  return (

    <div className="flex h-screen">
      <div className="w-1/2 flex items-center justify-center bg-yellow-200 bg-opacity-30 ">
        <div className="w-3/5 flex items-center justify-center ">
          <div className="login-frame">
            <div className="login-frame-child absolute inset-0" />
            <img className="icon2 h-1/2 w-full object-cover" loading="eager" alt="" src="/55-1@2x.png" />
          </div>
        </div>
      </div>
      <div className="w-1/2 p-20 overflow-y-auto " >
        <div className="title-text">

          <div className="welcome-to-babyvaxpro-parent flex flex-col items-center justify-center">
            <div className="w-full md:w-1/2">
              <img className="icon3 h-auto md:h-1/2 w-full object-cover" loading="eager" alt="" src="/2-101@2x.png" />
              <div style={{ marginTop: "-35px", marginBottom: "20px" }} className="welcome-to-babyvaxpro font-bold text-2xl cursor-pointer">Welcome To BabyVaxPro</div>
            </div>
          </div>
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
              <input className="chekbotton" type="checkbox" />
              <span className="checkmark"></span>
              <div className="remmber-me">Remember me</div>
            </div>
            <div className="sign-in-text">
              <div
                className="change-password cursor-pointer text-blue-500"
                onClick={onChangePasswordTextClick}
              >
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
        </div>
      </div>
    </div >
  );
};

export default Login;
