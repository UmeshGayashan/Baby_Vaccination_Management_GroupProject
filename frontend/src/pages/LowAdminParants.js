import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import TableRow from "../components/TableRow";
import Property1Default1 from "../components/Property1Default1";
import FrameComponent5 from "../components/FrameComponent5";
import SpecialNeedsDoctorsContainer from "../components/SpecialNeedsDoctorsContainer";
import Footer1 from "../components/Footer1";
import "./LowAdminParants.css";

const LowAdminParants = () => {
  return (
    <div className="low-admin-parants">
      <TextField
        className="card-stack"
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
      <section className="frame-box">
        <TableRow />
        <div className="main">
          <Property1Default1 />
        </div>
        <FrameComponent5 />
      </section>
      <SpecialNeedsDoctorsContainer />
      <Footer1 />
    </div>
  );
};

export default LowAdminParants;
