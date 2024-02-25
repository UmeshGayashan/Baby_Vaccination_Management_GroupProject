import { Button } from "@mui/material";
import "./SpecialNeedsDoctorsContainer.css";

const SpecialNeedsDoctorsContainer = () => {
  return (
    <section className="footer9">
      <div className="cta2">
        <img className="bg-icon1" loading="eager" alt="" src="/bg@2x.png" />
        <h1 className="you-can-take3">
          You can take advice from provided doctors for children with special
          needs!
        </h1>
        <Button
          className="primary-button5"
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#000",
            fontSize: "16",
            background: "#f2c94c",
            borderRadius: "4px",
            "&:hover": { background: "#f2c94c" },
            width: 187,
            height: 51,
          }}
        >
          Meet your doctor
        </Button>
      </div>
    </section>
  );
};

export default SpecialNeedsDoctorsContainer;
