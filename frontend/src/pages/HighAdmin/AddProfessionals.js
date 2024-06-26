import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../pageCss/AddPerant.css";
import HomeLink from "../../components/HomeLink";
import Footer from "../../components/Footer";
import '../../components/comCss/MothersNameField.css';
import React, { useState,  } from 'react';
import Button from '@mui/material/Button';
import HAAProNavbar from "../../components/ADDprofessionnavbar";




const AddProffessions = () => {

  const navigate = useNavigate();
  const [orderNotes, setOrderNotes] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const onButtons1Click = useCallback(() => {
    navigate("/high-admin-proffessions");
  }, [navigate]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };


  const onNavButtonClick = useCallback(() => {
    navigate("/high-admin-proffessions");
  }, [navigate]);

  const [firstName, setFName] = useState('');
  const [lastName, setLName] = useState('');
  const [nic, setNIC] = useState('');
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [position, setPosition] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, settelephoneNo] = useState('');
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [info, setinfo] = useState('');


   // Function to create an account
   const createAccount = async () => {
    try {
      const response = await fetch('https://baby-vaccination-management-groupproject-w51l.onrender.com/admin/create-health-acc', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, nic, address, postalCode,position,age, email, telephone, username, password, info }),
      });

      // if (response.status === 201) {
      //   const data = await response.json();
      //   //handle success
      // }else {
      //   console.error('Account creation failed');
      // }
    }catch (error) {
      console.error('Error:', error);
    }
      
      // if (response.status === 201) {
      //   const data = await response.json();
        
      //   setAccountNo(data.accountNo);
      //   //Alert
      //   setShowSuccessAlert(true);
      //   setTimeout(() => {
      //   setShowSuccessAlert(fse);}, 2000);
      // } else {
      //   console.erralor('Account creation failed');
      //   //Alert
      //   setShowFailureAlert(true);
      //   setTimeout(() => {
      //   setShowFailureAlert(false);}, 2000);
      // }
    // } catch (error) {
    //   console.error('Error:', error);
    //   // //Alert
    //   // setShowFailureAlert(true);
    //   // setTimeout(() => {
    //   // setShowFailureAlert(false);}, 2000);
    // }
  };

 








  return (
    <div className="add-perant">
      {/* navbar */}
      <HAAProNavbar/>
      <HomeLink addChild="Add Health Care Professions" />

      <section className="blog-link">
        <div className="linked-in-link" />
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
                value={firstName}
            onChange={(e) => setFName(e.target.value)}
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
              value={lastName}
            onChange={(e) => setLName(e.target.value)}
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
              value={nic}
            onChange={(e) => setNIC(e.target.value)}
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
              value={address}
            onChange={(e) => setAddress(e.target.value)}
            />
          </div>
      <div className="footer-frame1">
        <div className="postal-code">Postal Code</div>
        <div className="input-field63">
          <input className="code" placeholder="Code" type="text"
           value={postalCode}
           onChange={(e) => setPostalCode(e.target.value)} />
        </div>
      </div>

      <div className="footer-frame1">
        <div className="postal-code">Position</div>
        <div className="input-field63">
          <input className="code" placeholder="Posion" type="text" 
           value={position}
           onChange={(e) => setPosition(e.target.value)}/>
        </div>
      </div>

            <div className="footer-frame1">
        <div className="postal-code">Age</div>
        <div className="input-field63">
          <input className="code" placeholder="Age" type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)} />
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
          onChange={(e) => settelephoneNo(e.target.value)}/>
        </div>
      </div>

      <div className="footer-frame1">
        <div className="postal-code">User Name</div>
        <div className="input-field63">
          <input className="code" placeholder="User Name" type="text" 
           value={username}
           onChange={(e) => setusername(e.target.value)}/>
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
          // onClick={onButtons1Click}
          onClick={createAccount}
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

export default AddProffessions;
