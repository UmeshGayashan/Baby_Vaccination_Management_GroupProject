import { useNavigate } from "react-router-dom";
import "../pageCss/AddPerant.css";
import HomeLink from "../../components/HomeLink";
import Footer from "../../components/Footer";
import "../../components/comCss/MothersNameField.css";
import React, { useCallback, useState } from "react";
import { Button, Snackbar, Alert } from "@mui/material";
import HAAPNavbar from "../../components/HA_addparentnavbar";


const HAddPerant = () => {

  const navigate = useNavigate();

  const onNavButtonClick = useCallback(() => {
    navigate("/high-admin-parants");
  }, [navigate]);
  const [orderNotes, setOrderNotes] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const onButtons1Click = useCallback(() => {
    navigate("high-admin-parants");
  }, [navigate]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

    // Utility function to get a cookie by name
  function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null; // Return null if the cookie is not found  
  }

  const [mfirstName, setFName] = useState('');
  const [mlastName, setLName] = useState('');
  const [mnic, setNIC] = useState('');
  const [address, setAddress] = useState('');
  const [postalcode, setPostalCode] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, settelephoneNo] = useState('');
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [info, setinfo] = useState('');
  const [notification, setNotification] = useState({ open: false, message: '', severity: '' });


   // Function to create an account
   const createAccount = async () => {
    try {
      const jwtToken = getCookie('jwt');
      if (!jwtToken) {
          console.error('No JWT token found');
          return null;
      }
      const response = await fetch('https://baby-vaccination-management-groupproject-w51l.onrender.com/admin/create-parent-acc', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwtToken}`
        },
        body: JSON.stringify({ mfirstName, mlastName, mnic, address, postalcode, email, telephone, username, password, info }),
      });
      
      if (response.ok) {
        setNotification({ open: true, message: 'Account created successfully', severity: 'success' });
      } else {
        console.error('Failed to create account');
        setNotification({ open: true, message: 'Failed to create account', severity: 'error' });
      }
    } catch (error) {
      console.error('Error:', error);
      setNotification({ open: true, message: 'An error occurred', severity: 'error' });
    }
  };

  const handleCloseNotification = () => {
    setNotification({ ...notification, open: false });
  };
     

  return (
    <div className="add-perant">
      {/* Navbar */}
    <HAAPNavbar/>
      <HomeLink addChild="Add Parant" />

      <section className="blog-link">
        <div className="linked-in-link" />
      </section>

      <section className="mothers-name-field">
        {/* Inputfield */}
        {/* <MothersNameField /> */}


        <div className="mothers-name-field1" style={{ marginLeft: "50px" }}>
          <div className="mothers-name-field2">
            <h1 className="information-form1" style={{ marginTop: "30px" }}>Information Form</h1>
          </div>
          <div className="mothers-name-field3" style={{ width: "1200px" }}>
            <div className="postal-code-field1">
              <div className="password-input-field" style={{ width: "300px" }}>
                <div className="mothers-guardians-first" style={{ width: "300px" }}>
                  Mother’s \Guardian’s First name
                </div>
                <div className="input-field59" >
                  <input style={{ width: "400px" }}
                    className="filledgmailcom"
                    placeholder="Your first name"
                    type="text"
                    value={mfirstName}
            onChange={(e) => setFName(e.target.value)}
                  />
                </div>
              </div>
              <div className="street-address">Street Address</div>
            </div>
            <div className="fathers-name-field" style={{ marginLeft: "100px ", width: "300px" }}>
              <div className="mothersguardians-last-name" >
                Mother’s\Guardian’s Last name
              </div>
              <div className="input-field60">
                <input
                  style={{ width: "400px" }}
                  className="filledgmailcom1"
                  placeholder="Your last name"
                  type="text"
                  value={mlastName}
            onChange={(e) => setLName(e.target.value)}
                />
              </div>
            </div>
            <div className="fathers-name-field1" style={{ marginLeft: "100px ", width: "300px" }}>
              <div className="mothersguardians-nic">Mother’s\Guardian’s NIC</div>
              <div className="input-field61">
                <input

                  style={{ width: "400px" }}
                  className="filledgmailcom2"
                  placeholder="NIC No"
                  type="text"
                  value={mnic}
            onChange={(e) => setNIC(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="input-field61">
            <input

              style={{ width: "800px" }}
              className="filledgmailcom2"
              placeholder="Address"
              type="text"
              value={address}
            onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="footer-frame1">
            <div className="postal-code">Postal Code</div>
            <div className="input-field63">
              <input className="code" placeholder="Code" type="text"
              value={postalcode}
              onChange={(e) => setPostalCode(e.target.value)} />
            </div>
          </div>

          <div className="footer-frame1">
            <div className="postal-code">Email</div>
            <div className="input-field63">
              <input className="code" placeholder="Email Address" type="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>

          <div className="footer-frame1">
            <div className="postal-code">Phone Number</div>
            <div className="input-field63">
              <input className="code" placeholder="Phone number" type="number"
              value={telephone}
              onChange={(e) => settelephoneNo(e.target.value)} />
            </div>
          </div>

          <div className="footer-frame1">
            <div className="postal-code">User Name</div>
            <div className="input-field63">
              <input className="code" placeholder="User Name" type="text"
              value={username}
              onChange={(e) => setusername(e.target.value)} />
            </div>
          </div>

          <div className="footer-frame1">
            <div className="postal-code">Password</div>
            <div className="input-field63">
              <input className="code" placeholder="Password" type="text"
              value={password}
              onChange={(e) => setpassword(e.target.value)} />
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
                  value={info}
                  onChange={(e) => setinfo(e.target.value)}
                  style={{ width: "100%", height: "150px", marginBottom: "-50px" }}
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
                    // onChange={handleFileChange}
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
              <Button href="low-admin-parants"
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
                onClick={createAccount}
              >
                Save
              </Button>
            </div>
          </div>


        </div>
      </section>

      <Footer />
      <Snackbar
        open={notification.open}
        autoHideDuration={6000}
        onClose={handleCloseNotification}
      >
        <Alert onClose={handleCloseNotification} severity={notification.severity} sx={{ width: '100%' }}>
          {notification.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default HAddPerant;
