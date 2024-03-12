import { Button } from "@mui/material";
import "./AbFrame.css";

const AbFrame = () => {
  return (
    <div className="ab-frame" >
      <img
        className="section-title-icon2"
        alt=""
        src="/section-title-2@2x.png"
      />
      <div className="frame-we-provide-details"  >
        <div className="text-details-for-vaccines">
          <h1 className="we-provide-a">{`We provide a details for vaccine to children `}</h1>
          <div className="lorem-ipsum-dolor-container1">
            <p className="lorem-ipsum-dolor4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <p className="blank-line1">&nbsp;</p>
            <p className="duis-cursus-mi">
              ‍Duis cursus, mi quis viverra ornare, eros dolor interdum nulla,
              ut commodo diam libero vitae erat. Aenean faucibus nibh et justo
              cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
              tristique posuere.
            </p>
          </div>
        </div>
      </div>
      <div className="rectangle">
        <Button href="/about-us"
          className="primary-button4"
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#000",
            fontSize: "16",
            background: "#f2c94c",
            borderRadius: "4px",
            "&:hover": { background: "#f2c94c" },
            width: 146,
            height: 51,
          }}
        >
          Learn more
        </Button>
      </div>
    </div>
  );
};

export default AbFrame;
