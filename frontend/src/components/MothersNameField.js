import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import "./MothersNameField.css";

const MothersNameField = () => {
  return (
    <div className="mothers-name-field1">
      <div className="mothers-name-field2">
        <h1 className="information-form1">Information Form</h1>
      </div>
      <div className="mothers-name-field3">
        <div className="postal-code-field1">
          <div className="password-input-field">
            <div className="mothers-guardians-first">
              Mother’s \Guardian’s First name
            </div>
            <div className="input-field59">
              <input
                className="filledgmailcom"
                placeholder="Your first name"
                type="text"
              />
            </div>
          </div>
          <div className="street-address">Street Address</div>
        </div>
        <div className="fathers-name-field">
          <div className="mothersguardians-last-name">
            Mother’s\Guardian’s Last name
          </div>
          <div className="input-field60">
            <input
              className="filledgmailcom1"
              placeholder="Your last name"
              type="text"
            />
          </div>
        </div>
        <div className="fathers-name-field1">
          <div className="mothersguardians-nic">Mother’s\Guardian’s NIC</div>
          <div className="input-field61">
            <input
              className="filledgmailcom2"
              placeholder="NIc No"
              type="text"
            />
          </div>
        </div>
      </div>
      <TextField
        className="input-field62"
        placeholder="Address"
        variant="outlined"
        sx={{
          "& fieldset": { borderColor: "#e6e6e6" },
          "& .MuiInputBase-root": {
            height: "49px",
            backgroundColor: "#fff",
            borderRadius: "6px",
          },
          "& .MuiInputBase-input": { color: "#999" },
        }}
      />
      <div className="footer-frame1">
        <div className="postal-code">Postal Code</div>
        <div className="input-field63">
          <input className="code" placeholder="Code" type="text" />
        </div>
      </div>
    </div>
  );
};

export default MothersNameField;
