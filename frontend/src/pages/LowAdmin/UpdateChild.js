import { useNavigate } from "react-router-dom";
import HomeLink from "../../components/HomeLink";
import Footer from "../../components/Footer";
import "../pageCss/AddChild.css";
import DatePicker2 from "../../components/Datepicker_2";
import { Button, Snackbar, Alert} from "@mui/material";
import HAACNavbar from "../../components/HA_addchildnavbar";
import React, { useState, useEffect } from 'react';
import axios from "axios";

const UpdateChild = () => {

  const navigate = useNavigate();

  const [bid, setBid] = useState('');
  const [firstName, setFName] = useState('');
  const [lastName, setLName] = useState('');
  const [motherorGuardianNIC, setNIC] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [fatherNic, setFatherNic] = useState('');
  const [gender, setGender] = useState('');
  const [ofc, setOfc] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [weight, setBirthweight] = useState('');
  const [hospitalName, setBirthHospital] = useState('');
  const [accountInfo, setAccountInfo] = useState(null);
  const [notification, setNotification] = useState({ open: false, message: '', severity: '' });

    // Utility function to get a cookie by name
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null; // Return null if the cookie is not found
}

  // Function to update account information
  const updateAccount = async () => {
    try {

      const jwtToken = getCookie('jwt');
        if (!jwtToken) {
            console.error('No JWT token found');
            return null;
        }

      const response = await fetch(`https://baby-vaccination-management-groupproject-w51l.onrender.com/admin/update-baby-acc/${bid}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwtToken}`
        },
        body: JSON.stringify({
          babyId: bid, // Ensure babyId is sent in the request body
          babyName: { firstName, lastName },
          gender,
          motherorGuardianNIC, // Use the correct attribute name
          fatherName,
          fatherNic,
          ofc,
          birthDate,
          weight, // Use the correct attribute name
          hospitalName, // Use the correct attribute name
        }),
      });

      if (response.status === 200) {
        const data = await response.json();
        // Alert
        setNotification({ open: true, message: 'Account updated successfully', severity: 'success' });

        setAccountInfo(data);
      } else {
        console.error('Account update failed');
        // Alert
        setNotification({ open: true, message: 'Failed to update account', severity: 'error' });
      }
    } catch (error) {
      console.error('Error:', error);
      // Alert
      setNotification({ open: true, message: 'An error occurred', severity: 'error' });
    }
  };
  // Function to retrieve account information
  const getAccountInfo = async () => {
    try {
      const response = await fetch(`https://baby-vaccination-management-groupproject-w51l.onrender.com/healthcare/baby-acc-info/${bid}`); // Use the correct API route
      if (response.status === 200) {
        const data = await response.json();
        setAccountInfo(data);
        // Populate form fields with retrieved data
        setFName(data.babyName.firstName);
        setLName(data.babyName.lastName);
        setNIC(data.motherorGuardianNIC);
        setFatherName(data.fatherName);
        setFatherNic(data.fatherNic);
        setGender(data.gender);
        setOfc(data.ofc);
        setBirthDate(data.birthDate);
        setBirthweight(data.weight);
        setBirthHospital(data.hospitalName);
      } else {
        console.error('Account information retrieval failed');
        setNotification({ open: true, message: 'Failed to get account details', severity: 'error' });
      }
    } catch (error) {
      console.error('Error:', error);
      setNotification({ open: true, message: 'An error occurred', severity: 'error' });
    }
  };

  useEffect(() => {
    if (bid) {
      getAccountInfo();
    }
  }, [bid]);

  // const handleDeleteBabyInfo = () => {
  //   const url = `http://localhost:4000/admin/delete-baby-acc/${bid}`;
  //   axios.delete(url)
  //     .then(response => {
  //       console.log("Baby account deleted successfully:", response.data);
  //       navigate("/low-admin");
  //     })
  //     .catch(error => {
  //       console.error("Error deleting parent account:", error);
  //     });
  // };

  const handleCloseNotification = () => {
    setNotification({ ...notification, open: false });
  };

  return (
    <div className="add-child">
      {/* Navbar */}
      <HAACNavbar />

      {/* header */}
      <HomeLink addChild="Update Child Details" />

      <section className="blog-link">
        <div className="linked-in-link" />
      </section>

      <section className="facebook-link">
        <div className="instagram-link">
          <div className="text-input">
            <div className="icon-container">
              <div className="password3">
                <div className="input-text-label3" style={{ fontSize: '20px', marginBottom: "10px" }}>Child ID</div>
                <div className="input-field4" style={{ marginBottom: "20px" }}>
                  <div className="text3">
                    <input
                      className="type-here6"
                      placeholder="Enter Child ID"
                      type="text"
                      value={bid}
                      onChange={(e) => setBid(e.target.value)}
                    />
                  </div>
                </div>
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
                  }} onClick={handleDeleteBabyInfo}>Delete Baby</Button> */}
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
                  }} onClick={getAccountInfo}>Get Account Info</Button>
                {accountInfo && (
                  <div className='container'>
                    <div className="password3">
                      <div className="input-text-label3" style={{ fontSize: '20px', margin: "10px" }}>Account Information :</div>
                    </div>
                    <div style={{ fontSize: '18px', margin: "10px" }}>
                      <p>First Name: <span style={{ marginLeft: "147px", fontWeight: "600" }}>{accountInfo.babyName.firstName}</span></p>
                      <p>Last Name:<span style={{ marginLeft: "147px", fontWeight: "600" }}> {accountInfo.babyName.lastName}</span></p>
                      <p>Mother's or Guardian’s NIC:<span style={{ marginLeft: "10px", fontWeight: "600" }}> {accountInfo.motherorGuardianNIC}</span></p>
                      <p>Father’s NIC:<span style={{ marginLeft: "135px", fontWeight: "600" }}> {accountInfo.fatherNic}</span></p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Vaccination Form */}
      <section className="facebook-link" style={{ marginTop: "-100px" }}>
        <div className="instagram-link">
          <h1 className="information-form">Vaccination Form</h1>
          <div className="text-input">
            <div className="icon-container">
              <div className="password3">
                <div className="input-text-label3">First Name</div>
                <div className="input-field4">
                  <div className="text3">
                    <input
                      className="type-here6"
                      placeholder="Enter name"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFName(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="password3">
                <div className="input-text-label3">Last Name</div>
                <div className="input-field4">
                  <div className="text3">
                    <input
                      className="type-here6"
                      placeholder="Enter name"
                      type="text"
                      value={lastName}
                      onChange={(e) => setLName(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="password3">
                <div className="input-text-label4">Mother/Guardian’s NIC</div>
                <div className="input-field5">
                  <div className="text4">
                    <input
                      className="type-here6"
                      placeholder="Enter NIC in Uppercase"
                      type="text"
                      value={motherorGuardianNIC}
                      onChange={(e) => setNIC(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="password3">
                <div className="input-text-label5">Father Name</div>
                <div className="input-field6">
                  <div className="text5">
                    <input
                      className="type-here6"
                      placeholder="Enter name"
                      type="text"
                      value={fatherName}
                      onChange={(e) => setFatherName(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="password3">
                <div className="input-text-label6">Father NIC</div>
                <div className="input-field7">
                  <div className="text6">
                    <input
                      className="type-here6"
                      placeholder="Enter NIC in Uppercase"
                      type="text"
                      value={fatherNic}
                      onChange={(e) => setFatherNic(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="password3">
                <div className="input-text-label7">Birth Hospital</div>
                <div className="input-field8">
                  <div className="text7">
                    <input
                      className="type-here6"
                      placeholder="Enter hospital name"
                      type="text"
                      value={hospitalName}
                      onChange={(e) => setBirthHospital(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="password3">
                <div className="input-text-label8">Birth Weight</div>
                <div className="input-field9">
                  <div className="text8">
                    <input
                      className="type-here6"
                      placeholder="kg"
                      type="text"
                      value={weight}
                      onChange={(e) => setBirthweight(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="password3">
                <div className="input-text-label9">OFC</div>
                <div className="input-field10">
                  <div className="text8">
                    <input
                      className="type-here6"
                      placeholder="mm"
                      type="text"
                      value={ofc}
                      onChange={(e) => setOfc(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              {/* <div className="password3">
                <div className="input-text-label9">Gender</div>
                <div className="input-field10">
                  <div className="text8">
                    <input
                      className="type-here6"
                      placeholder="Male or Female or Other"
                      type="text"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    />
                  </div>
                </div>
              </div> */}
              <div className="password3" style={{ display: 'flex', alignItems: 'center' }}>
                <div className="gender1" style={{ marginRight: '20px' }}>Gender:</div>
                <div className="radio-button1" style={{ marginRight: '10px' }}>
                  <input
                    className="radio"
                    type="radio"
                    name="radioGroup-1"
                    value="Male"
                    checked={gender === 'Male'}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label className="radio-selection">Male</label>
                </div>
                <div className="radio-button2" style={{ marginRight: '10px' }}>
                  <input
                    className="radio1"
                    type="radio"
                    name="radioGroup-1"
                    value="Female"
                    checked={gender === 'Female'}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label className="radio-selection1">Female</label>
                </div>
                <div className="radio-button2">
                  <input
                    className="radio"
                    type="radio"
                    name="radioGroup-1"
                    value="Other"
                    checked={gender === 'Other'}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label className="radio-selection">Other</label>
                </div>
              </div>
              <div className="password3">
                <div className="input-text-label9">BirthDay</div>
                <div className="input-field10">
                  <div className="text8">
                    <input
                      className="type-here6"
                      placeholder="YYYY-MM-DD"
                      type="text"
                      value={birthDate}
                      onChange={(e) => setBirthDate(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="cta3" style={{ marginTop: "60px" }}>
                <Button
                  href="/low-admin"
                  className="buttons"
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
                  onClick={updateAccount}
                  className="buttons1"
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
                >
                  Save
                </Button>
              </div>
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

export default UpdateChild;
