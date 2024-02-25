import { useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import StackCell from "../components/StackCell";
import SpacingVertical from "../components/SpacingVertical";
import FrameComponent5 from "../components/FrameComponent5";
import SpecialNeedsDoctorsContainer from "../components/SpecialNeedsDoctorsContainer";
import Footer1 from "../components/Footer1";
import "./LowAdmin.css";

const LowAdmin = () => {
  const navigate = useNavigate();

  const onNavButtonClick = useCallback(() => {
    navigate("/add-child");
  }, [navigate]);

  const onNavButton1Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onButtonContainerClick = useCallback(() => {
    navigate("/add-perant");
  }, [navigate]);

  return (
    <div className="low-admin">
      <TextField
        className="row-frame"
        variant="outlined"
        sx={{
          "& fieldset": { border: "none" },
          "& .MuiInputBase-root": {
            height: "56.7px",
            backgroundColor: "#f2c94c",
            borderRadius: "0px 0px 0px 0px",
          },
          width: "1500px",
        }}
      />
      <section className="typography-heading">
        <StackCell
          onNavButtonClick={onNavButtonClick}
          onNavButton1Click={onNavButton1Click}
          onButtonContainerClick={onButtonContainerClick}
        />
        <SpacingVertical />
        <FrameComponent5 />
      </section>
      <SpecialNeedsDoctorsContainer />
      <Footer1 />
    </div>
  );
};

export default LowAdmin;
