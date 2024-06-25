import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "../pageCss/AddPerant.css";
import HomeLink from "../../components/HomeLink";
import Footer from "../../components/Footer";
import '../../components/comCss/MothersNameField.css';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import HAAProNavbar from "../../components/ADDprofessionnavbar";


const UpdateProffessions = () => {

  const navigate = useNavigate();

  const onNavButtons1Click = useCallback(() => {
    navigate("/high-admin-proffessions");
  }, [navigate]);

  //==========

  const [hcpNIC, setHcpNIC] = useState("");
  const [hcpData, setHcpData] = useState({
    firstName: "",
    lastName: "",
    nic: "",
    postalCode: "",
    telephone: "",
    position: "",
    age: "",
    email: "",
    password: "",
    username: "",
    address: "",
    additionalInfo: ""
  });

//================================
  const [orderNotes, setOrderNotes] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

 //======================
  const handleFetchHcpInfo = () => {

    const url = `https://baby-vaccination-management-groupproject-w51l.onrender.com/admin/get-health-acc/${hcpNIC}`; 
    axios.get(url)
     .then(response => {
        const data = response.data;
        setHcpData({
          firstName: data.hcpName.firstName,
          lastName: data.hcpName.lastName,
          nic: data.hcpNIC,
          postalCode: data.hcpPostalCode,
          telephone: data. hcpTelephone,
          position: data.hcpPosition,
          age: data.hcpAge,
          email: data. hcpEmail,
          password:  " ",
          username: data.username,
          address: data.hcpAddress,
          additionalInfo: data.hcpinfo
        });
      })
     .catch(error => {
        console.error("Error fetching Healthcare prof. information: ",error);
      });
  };

  //update hcp information

  const handleUpdateHcpInfo =() => {
    const url = `https://baby-vaccination-management-groupproject-w51l.onrender.com/admin/update-health-acc/${hcpNIC}`;
    axios.put(url, {
      hcpName: {
        firstName: hcpData.firstName,
        lastName: hcpData.lastName
      },
      hcpNIC: hcpData.nic,
      hcpPostalCode: hcpData.postalCode,
      hcpTelephone: hcpData.telephone,
      hcpPosition: hcpData.position,
      hcpAge: hcpData.age,
      hcpEmail: hcpData.email,
      username: hcpData.username,
      hcpAddress: hcpData.address,
      hcpinfo: hcpData.additionalInfo,
      password: hcpData.password,
     
    }). then(response => {
      console.log("Healthcare prof. information updated successfully:", response.data);
      navigate("/high-admin-proffessions");
    })
    .catch(error => {
      console.error("Error updating Healthcare prof. information:", error);
    });

  };

  //delete hcp account
  const handleDeleteHcpInfo = () => {
    const url = `https://baby-vaccination-management-groupproject-w51l.onrender.com/admin/delete-health-acc/${hcpNIC}`;
    axios.delete(url)
     .then(response => {
        console.log("Healthcare prof. account deleted successfully:", response.data);
        navigate("/high-admin-proffessions");
      })
     .catch(error => {
        console.error("Error deleting Healthcare prof. account:", error);
      });
  };

  const onButtons1Click = useCallback( () => {
    navigate("/high-admin-proffessions");
  }, [navigate]);

 
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };



  return (
    <div className="add-perant">
      {/* navbar */}
      <HAAProNavbar/>
      <HomeLink addChild="Update Health Care Proffesions" />

      <section className="blog-link">
        <div className="linked-in-link" />
      </section>


      
    <section className="facebook-link" style={{marginLeft:"50px"}}>
        <div className="instagram-link">
          <div className="text-input">
            <div className="icon-container">
              <div className="password3">
                <div className="input-text-label3" style={{ fontSize: '20px', marginBottom: "10px" }}>Healthcare NIC</div>
                <div className="input-field4" style={{ marginBottom: "20px" }}>
                  <div className="text3">
                    <input
                      className="type-here6"
                      placeholder="Enter Healthcare Proffesion's NIC"
                      type="text"
                      value={hcpNIC}
                      onChange={(e) => setHcpNIC(e.target.value)}
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
                  }} onClick={handleFetchHcpInfo}>Get Account Info</Button>
              <Button className="primary-button"
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
                  }} onClick={handleDeleteHcpInfo}>Delete Healthcare Proffesion</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mothers-name-field">
        {/* inputfield */}
        <div className="mothers-name-field1" style={{marginLeft:"50px"}}>
      <div className="mothers-name-field2">
        <h1 className="information-form1" style={{marginTop:"30px"}}>Information Form</h1>
      </div>
      <div className="mothers-name-field3" style={{width:"1200px"}}>
        <div className="postal-code-field1">
          <div className="password-input-field"  style={{width:"300px"}}>
            <div className="mothers-guardians-first" style={{width:"300px"}}>
              First name
            </div>
            <div className="input-field59" >
              <input style={{width:"400px"}}
                className="filledgmailcom"
                placeholder="Your first name"
                type="text"
                value={hcpData.firstName}
                onChange={(e) => setHcpData({...hcpData, firstName: e.target.value})}
              />
            </div>
          </div>
          <div className="street-address">Street Address</div>
        </div>
        <div className="fathers-name-field" style={{marginLeft:"100px ", width:"300px"}}>
          <div className="mothersguardians-last-name" >
            Last name
          </div>
          <div className="input-field60">
            <input
            style={{width:"400px"}}
              className="filledgmailcom1"
              placeholder="Your last name"
              type="text"
              value={hcpData.lastName}
              onChange={(e) => setHcpData({...hcpData, lastName: e.target.value})}
            />
          </div>
        </div>
        <div className="fathers-name-field1" style={{marginLeft:"100px ", width:"300px"}}>
          <div className="mothersguardians-nic"> NIC Number</div>
          <div className="input-field61">
            <input
            
            style={{width:"400px"}}
              className="filledgmailcom2"
              placeholder="NIc No"
              type="text"
              value={hcpData.nic}
              onChange={(e) => setHcpData({...hcpData, nic: e.target.value})}
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
              value={hcpData.address}
              onChange={(e) => setHcpData({...hcpData, address: e.target.value})}
            />
          </div>
      <div className="footer-frame1">
        <div className="postal-code">Postal Code</div>
        <div className="input-field63">
          <input className="code" placeholder="Code" type="text"
          value={hcpData.postalCode} 
          onChange={(e) => setHcpData({...hcpData, postalcode: e.target.value})}
           />
        </div>
      </div>

      <div className="footer-frame1">
        <div className="postal-code">Position</div>
        <div className="input-field63">
          <input className="code" placeholder="Position" type="text"
          value={hcpData.position}
          onChange={(e) => setHcpData({...hcpData, position: e.target.value})} />
        </div>
      </div>

            <div className="footer-frame1">
        <div className="postal-code">Age</div>
        <div className="input-field63">
          <input className="code" placeholder="Age" type="text"
          value = {hcpData.age}
          onChange={(e) => setHcpData({...hcpData, age: e.target.value})}/>
        </div>
      </div>

      <div className="footer-frame1">
        <div className="postal-code">Email</div>
        <div className="input-field63">
          <input className="code" placeholder="Email Address" type="Email" 
          value={hcpData.email}
          onChange={(e)=> setHcpData({...hcpData, email: e.target.value })}/>
        </div>
      </div>

      <div className="footer-frame1">
        <div className="postal-code">Phone Number</div>
        <div className="input-field63">
          <input className="code" placeholder="Phone number" type="number"
          value= {hcpData.telephone} 
          onChange={(e) => setHcpData({...hcpData, telephone: e.target.value})}/>
        </div>
      </div>

      <div className="footer-frame1">
        <div className="postal-code">User Name</div>
        <div className="input-field63">
          <input className="code" placeholder="User Name" type="text" 
          value={hcpData.username}
          onChange={(e) => setHcpData({...hcpData, username: e.target.value})}/>
        </div>
      </div>

      <div className="footer-frame1">
        <div className="postal-code">Password</div>
        <div className="input-field63">
          <input className="code" placeholder="Password" type="text"
          value={hcpData.password}
          onChange={(e) => setHcpData({...hcpData, password:e.target.value})} />
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
          value={hcpData.additionalInfo}
          onChange={(e) => setHcpData({...hcpData, additionalInfo:e.target.value})}
          style={{ width: "100%", height: "150px" ,marginBottom:"-50px" }}
        />
      </div>
      </div>

      
      <div className="about-us-link-instance" style={{ marginTop: "30px" }}>
        <b className="upload-parant-image">Upload a Image</b>
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
        <Button href="/high-admin-proffessions"
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
          onClick={handleUpdateHcpInfo}
        >
          Save
        </Button>
      </div>
    </div>

      
    </div>
      </section>

      
      <Footer/>

    </div>
  );
};

export default UpdateProffessions;
