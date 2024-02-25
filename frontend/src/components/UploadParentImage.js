import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./UploadParentImage.css";

const UploadParentImage = () => {
  const navigate = useNavigate();

  const onButtons1Click = useCallback(() => {
    navigate("/low-admin");
  }, [navigate]);

  return (
    <div className="upload-parent-image">
      <div className="small-button-instance">
        <div className="c-t-a-frame" />
      </div>
      <div className="footer-instance1">
        <h2 className="additional-info">Additional Info</h2>
      </div>
      <div className="links-group">
        <div className="order-notes-optional">Order Notes (Optional)</div>
        <div className="input-field65">
          <input
            className="filledgmailcom3"
            placeholder="Notes about your order, e.g. special notes for delivery"
            type="text"
          />
        </div>
      </div>
      <div className="about-us-link-instance">
        <b className="upload-parant-image">Upload Parant Image</b>
        <div className="image-u">
          <Button
            className="small-button"
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "14",
              background: "#ffbf00",
              borderRadius: "4px",
              "&:hover": { background: "#ffbf00" },
              width: 108,
              height: 47,
            }}
          >
            Browse
          </Button>
          <div className="form-upload" />
        </div>
      </div>
      <div className="cta4">
        <Button
          className="buttons2"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "16",
            background: "#000",
            borderRadius: "8px",
            "&:hover": { background: "#000" },
            width: 173,
            height: 57,
          }}
        >
          Cancel
        </Button>
        <Button
          className="buttons3"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#000",
            fontSize: "16",
            background: "#ffbf00",
            borderRadius: "8px",
            "&:hover": { background: "#ffbf00" },
            width: 172,
            height: 56,
          }}
          onClick={onButtons1Click}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default UploadParentImage;
