import React, { useState } from "react";
import { Button, TextField, Input } from "@mui/material";
import { useNavigate } from "react-router-dom";

import "./pageCss/Login.css";
import "../components/comCss/FrameComponent7.css";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const onChangePasswordTextClick = () => {
    navigate("/forgot-password");
   
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:4000/public/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.status === 200) {
        // Login successful, redirect based on user type
        if (data.userType === 'User') {
          navigate("/high-admin-parants");
        } else if (data.userType === 'Guardian') {
          navigate("/user-page");
        } else if (data.userType === 'Healthcare Professional') {
          navigate("/low-admin");
          // window.location.href = "/low-admin";
        } else {
          console.error('Unknown user type');
          setShowAlert(true);
          setTimeout(() => {
            setShowAlert(false);
          }, 2000);
        }
      } else {
        // Handle login error
        console.error('Login failed');
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 2000);
      }
    } catch (error) {
      console.error('Error:', error);
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    }
  };

  return (
    <div className="login">
      <div className="login-frame">
        <div className="login-frame-child" />
        <img className="icon2" loading="eager" alt="" src="/55-1@2x.png" />
      </div>
      <div className="login-inner">
        <div className="title-text-parent">
          <div className="title-text">
            <div className="welcome-to-babyvaxpro-parent" >

              <img
                className="icon3"
                loading="eager"
                alt=""
                src="/2-101@2x.png"
              />
              <div className="welcome-to-babyvaxpro">Welcome To BabyVaxPro</div>
            </div>
          </div>
          {/* Information sheet */}
          <div className="username-parent">
            <div className="username41">UserName</div>
            <Input
              className="email-form"
              variant="outlined"
              sx={{
                "& fieldset": { borderColor: "#4d4ddb" },
                "& .MuiInputBase-root": { height: "45px" },
              }}
              placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}
            />
            <div className="username41">Password</div>
            <Input
              className="password-form"
              variant="outlined"
              sx={{
                "& fieldset": { borderColor: "#4d4f", },
                "& .MuiInputBase-root": { height: "45px" },
              }}
              placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
            />

            <div className="check-button">
              <input className="chekbotton" type="checkbox" />
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
                onClick={handleLogin}>
                  Sign In
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
