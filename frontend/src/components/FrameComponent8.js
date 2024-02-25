import { Button } from "@mui/material";
import Card from "./Card";
import "./FrameComponent8.css";

const FrameComponent8 = () => {
  return (
    <div className="rectangle-shape-node-parent">
      <div className="rectangle-shape-node" />
      <div className="text23">
        <div className="text-parent">
          <div className="text24">
            <h1 className="knowledge-of-vaccine3">Knowledge of Vaccine</h1>
          </div>
          <h3 className="vaccines-are-biological2">
            Vaccines are biological substances that stimulate the immune system
            to recognize and fight against specific pathogens, such as bacteria
            or viruses. They are a crucial tool in preventing and controlling
            infectious diseases
          </h3>
        </div>
      </div>
      <div className="line1">
        <div className="rectangle-shape-node1">
          <div className="frame25" />
          <div className="row50">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <Button
          className="nav-button6"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "16",
            background: "#1d2130",
            borderRadius: "4px",
            "&:hover": { background: "#1d2130" },
            width: 155,
            height: 43,
          }}
        >
          More Details
        </Button>
      </div>
    </div>
  );
};

export default FrameComponent8;
