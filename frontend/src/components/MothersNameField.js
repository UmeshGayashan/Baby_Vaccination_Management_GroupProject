import "./comCss/MothersNameField.css";
import React, { useCallback, useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MothersNameField = () => {

  const navigate = useNavigate();
  const [orderNotes, setOrderNotes] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const onButtons1Click = useCallback(() => {
    navigate("low-admin-parants");
  }, [navigate]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };
  return (
    <div className="mothers-name-field1" style={{marginLeft:"50px"}}>
      <div className="mothers-name-field2">
        <h1 className="information-form1" style={{marginTop:"30px"}}>Information Form</h1>
      </div>
      <div className="mothers-name-field3" style={{width:"1200px"}}>
        <div className="postal-code-field1">
          <div className="password-input-field"  style={{width:"300px"}}>
            <div className="mothers-guardians-first" style={{width:"300px"}}>
              Mother’s \Guardian’s First name
            </div>
            <div className="input-field59" >
              <input style={{width:"400px"}}
                className="filledgmailcom"
                placeholder="Your first name"
                type="text"
              />
            </div>
          </div>
          <div className="street-address">Street Address</div>
        </div>
        <div className="fathers-name-field" style={{marginLeft:"100px ", width:"300px"}}>
          <div className="mothersguardians-last-name" >
            Mother’s\Guardian’s Last name
          </div>
          <div className="input-field60">
            <input
            style={{width:"400px"}}
              className="filledgmailcom1"
              placeholder="Your last name"
              type="text"
            />
          </div>
        </div>
        <div className="fathers-name-field1" style={{marginLeft:"100px ", width:"300px"}}>
          <div className="mothersguardians-nic">Mother’s\Guardian’s NIC</div>
          <div className="input-field61">
            <input
            
            style={{width:"400px"}}
              className="filledgmailcom2"
              placeholder="NIc No"
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="input-field61">
            <input
            
            style={{width:"800px"}}
              className="filledgmailcom2"
              placeholder="Address"
              type="text"
            />
          </div>
      <div className="footer-frame1">
        <div className="postal-code">Postal Code</div>
        <div className="input-field63">
          <input className="code" placeholder="Code" type="text" />
        </div>
      </div>

      <div className="footer-frame1">
        <div className="postal-code">Email</div>
        <div className="input-field63">
          <input className="code" placeholder="Email Address" type="Email" />
        </div>
      </div>

      <div className="footer-frame1">
        <div className="postal-code">Phone Number</div>
        <div className="input-field63">
          <input className="code" placeholder="Phone number" type="number" />
        </div>
      </div>

      <div className="footer-frame1">
        <div className="postal-code">User Name</div>
        <div className="input-field63">
          <input className="code" placeholder="User Name" type="text" />
        </div>
      </div>

      <div className="footer-frame1">
        <div className="postal-code">Password</div>
        <div className="input-field63">
          <input className="code" placeholder="Password" type="text" />
        </div>
      </div>

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
        <textarea
          className="filledgmailcom3"
          placeholder="Notes about your order, e.g. special notes for delivery"
          value={orderNotes}
          onChange={(e) => setOrderNotes(e.target.value)}
          style={{ width: "100%", height: "150px" ,marginBottom:"-50px" }}
        />
      </div>
      </div>

      
      <div className="about-us-link-instance" style={{ marginTop: "30px" }}>
        <b className="upload-parant-image">Upload Parent Image</b>
        <div className="image-u" style={{ display: "flex", alignItems: "center" }}>
          <label style={{ marginRight: "20px" }}>
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <Button
              className="small-button"
              disableElevation={true}
              variant="contained"
              component="span"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "14",
                background: "#ffbf00",
                borderRadius: "4px",
                "&:hover": { background: "#ffbf00" },
              }}
            >
              Browse
            </Button>
          </label>
          {selectedImage && (
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Selected Image"
              style={{ maxWidth: "20%", maxHeight: "10%", marginBottom: "10px", marginTop: "10px", marginLeft: "250px" }}
            />
          )}
        </div>
      </div>

      <div className="cta4">
        <Button  href="low-admin-parants"
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

      
    </div>
  );
};

export default MothersNameField;
