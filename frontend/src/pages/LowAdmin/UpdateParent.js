import { useNavigate } from "react-router-dom";
import "../pageCss/AddPerant.css";
import HomeLink from "../../components/HomeLink";
import axios from "axios";
import Footer from "../../components/Footer";
import "../../components/comCss/MothersNameField.css";
import React, { useCallback, useState } from "react";
import { Button } from "@mui/material";
import LAAPNavbar from "../../components/LA_addparentnavbar";

const UpdatePerant = () => {
  const navigate = useNavigate();

  const onNavButtonClick = useCallback(() => {
    navigate("/low-admin-parants");
  }, [navigate]);
  const [parentNIC, setParentNIC] = useState("");
  const [parentData, setParentData] = useState({
    firstName: "",
    lastName: "",
    nic: "",
    address: "",
    postalCode: "",
    email: "",
    phoneNumber: "",
    userName: "",
    password: "",
    additionalInfo: ""
  });

  const [orderNotes, setOrderNotes] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFetchParentInfo = () => {
    const url = `https://baby-vaccination-management-groupproject-w51l.onrender.com/admin/get-parent-acc/${parentNIC}`; 
    axios.get(url)
      .then(response => {
        const data = response.data;
        setParentData({
          firstName: data.motherorGuardianName.firstName,
          lastName: data.motherorGuardianName.lastName,
          nic: data.motherorGuardianNIC,
          address: data.Address,
          postalCode: data.PostalCode,
          email: data.guardianEmail,
          phoneNumber: data.guardianTelephoneNumber,
          userName: data.username,
          password: "",
          additionalInfo: data.additionalInfo
        });
      })
      .catch(error => {
        console.error("Error fetching parent information:", error);
      });
  };


  const handleUpdateParentInfo = () => {
    const url = `https://baby-vaccination-management-groupproject-w51l.onrender.com/healthcare/update-parent-acc/${parentNIC}`; 
    axios.put(url, {
      motherorGuardianName: {
        firstName: parentData.firstName,
        lastName: parentData.lastName
      },
      motherorGuardianNIC: parentData.nic,
      Address: parentData.address,
      PostalCode: parentData.postalCode,
      guardianEmail: parentData.email,
      guardianTelephoneNumber: parentData.phoneNumber,
      username: parentData.userName,
      password: parentData.password,
      additionalInfo: parentData.additionalInfo
    })
      .then(response => {
        console.log("Parent information updated successfully:", response.data);
        navigate("/low-admin-parants"); 
      })
      .catch(error => {
        console.error("Error updating parent information:", error);
      });
  };

  // //delete parent info
  // const handleDeleteParentInfo = () => {
  //   const url = `http://localhost:4000/admin/delete-parent-acc/${parentNIC}`;
  //   axios.delete(url)
  //     .then(response => {
  //       console.log("Parent account deleted successfully:", response.data);
  //       navigate("/high-admin-parants");
  //     })
  //     .catch(error => {
  //       console.error("Error deleting parent account:", error);
  //     });
  // };


  const onButtons1Click = useCallback(() => {
    navigate("low-admin-parants");
  }, [navigate]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  return (
    <div className="add-perant">
      {/* Navbar */}
     <LAAPNavbar/>
      <HomeLink addChild="Update Parent" />

      <section className="blog-link">
        <div className="linked-in-link" />
      </section>

      

    <section className="facebook-link" style={{marginLeft:"50px"}}>
        <div className="instagram-link">
          <div className="text-input">
            <div className="icon-container">
              <div className="password3">
                <div className="input-text-label3" style={{ fontSize: '20px', marginBottom: "10px" }}>Parent NIC</div>
                <div className="input-field4" style={{ marginBottom: "20px" }}>
                  <div className="text3">
                    <input
                      className="type-here6"
                      placeholder="Enter Parent NIC"
                      type="text"
                      value={parentNIC}
                      onChange={(e) => setParentNIC(e.target.value)}
                    />
                  </div>
                </div>
                <Button className="primary-button"
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
                  }} onClick={handleFetchParentInfo}>Get Account Info</Button>
                   {/* <Button className="primary-button"
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "16",
                    background: "#f44336",
                    borderRadius: "4px",
                    "&:hover": { background: "#d32f2f" },
                    width: 187,
                    height: 51,
                  }} onClick={handleDeleteParentInfo}>Delete Parent</Button> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mothers-name-field" style={{ marginTop: "-150px" }}>
        {/* Inputfield */}
        {/* <MothersNameField /> */}
        <div className="mothers-name-field1" >
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
                    value={parentData.firstName}
                    onChange={(e) => setParentData({ ...parentData, firstName: e.target.value })}
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
                  value={parentData.lastName}
                  onChange={(e) => setParentData({ ...parentData, lastName: e.target.value })}
                />
              </div>
            </div>
            <div className="fathers-name-field1" style={{ marginLeft: "100px ", width: "300px" }}>
              <div className="mothersguardians-nic">Mother’s\Guardian’s NIC</div>
              <div className="input-field61">
                <input

                  style={{ width: "400px" }}
                  className="filledgmailcom2"
                  placeholder="NIc No"
                  type="text"
                  value={parentData.nic}
                  onChange={(e) => setParentData({ ...parentData, nic: e.target.value })}
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
              value={parentData.address}
              onChange={(e) => setParentData({ ...parentData, address: e.target.value })}
            />
          </div>
          <div className="footer-frame1">
            <div className="postal-code">Postal Code</div>
            <div className="input-field63">
              <input className="code" placeholder="Code" type="text"
              value={parentData.postalCode}
              onChange={(e) => setParentData({ ...parentData, postalCode: e.target.value })} />
            </div>
          </div>

          <div className="footer-frame1">
            <div className="postal-code">Email</div>
            <div className="input-field63">
              <input className="code" placeholder="Email Address" type="Email" 
              value={parentData.email}
              onChange={(e) => setParentData({ ...parentData, email: e.target.value })}/>
            </div>
          </div>

          <div className="footer-frame1">
            <div className="postal-code">Phone Number</div>
            <div className="input-field63">
              <input className="code" placeholder="Phone number" type="number" 
              value={parentData.phoneNumber}
              onChange={(e) => setParentData({ ...parentData, phoneNumber: e.target.value })}/>
            </div>
          </div>

          <div className="footer-frame1">
            <div className="postal-code">User Name</div>
            <div className="input-field63">
              <input className="code" placeholder="User Name" type="text" 
              value={parentData.userName}
              onChange={(e) => setParentData({ ...parentData, userName: e.target.value })}/>
            </div>
          </div>

          <div className="footer-frame1">
            <div className="postal-code">Password</div>
            <div className="input-field63">
              <input className="code" placeholder="Password" type="text" 
              value={parentData.password}
              onChange={(e) => setParentData({ ...parentData, password: e.target.value })}
           />
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
                  value={parentData.additionalInfo}
                  onChange={(e) => setParentData({ ...parentData, additionalInfo: e.target.value })}
                  style={{ width: "100%", height: "150px", marginBottom: "-50px" }}
                />
              </div>
            </div>


            {/* <div className="about-us-link-instance" style={{ marginTop: "30px" }}>
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
            </div> */}

            <div className="cta4" style={{marginTop:"30px"}}>
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
                onClick={handleUpdateParentInfo}
              >
                Save
              </Button>
            </div>
          </div>


        </div>
      </section>

      <Footer />

    </div>
  );
};

export default UpdatePerant;


