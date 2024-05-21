import HomeLink from "../../components/HomeLink";
import Footer from "../../components/Footer";
import "../pageCss/AddChild.css";
import DatePicker2 from "../../components/Datepicker_2";
import { Button, } from "@mui/material";
import HAACNavbar from "../../components/HA_addchildnavbar";
import React, { useState, useEffect } from 'react';

const HUpdateChild = () => {

  const [bid, setBid] = useState('');
  const [mfirstName, setFirstName] = useState('');
  const [mlastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [mnic, setNic] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [fatherNic, setFatherNic] = useState('');
  const [ofc, setOfc] = useState('');
  const [birthDate, setBirthday] = useState('');
  const [weight, setWeight] = useState('');
  const [hospitalName, setHospitalName] = useState('');
  const [accountInfo, setAccountInfo] = useState(null);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showFailureAlert, setShowFailureAlert] = useState(false);

  // Function to update account information
  const updateAccount = async () => {
    try {
      const response = await fetch(`http://localhost:4000/admin/update-acc/${bid}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify({ babyName.firstName: mfirstName, babyName.lastName: mlastName,gender,mnic,fatherName,fatherNic,ofc,birthDate,weight,hospitalName, }),
      });

      if (response.status === 200) {
        const data = await response.json();
        //Alert
        setShowSuccessAlert(true);
        setTimeout(() => {
        setShowSuccessAlert(false);}, 2000);

        setAccountInfo(data);
      } else {
        console.error('Account update failed');
        //Alert
        setShowFailureAlert(true);
        setTimeout(() => {
        setShowFailureAlert(false);}, 2000);
      }
    } catch (error) {
      console.error('Error:', error);
      //Alert
      setShowFailureAlert(true);
      setTimeout(() => {
      setShowFailureAlert(false);}, 2000);
    }
  };

  // Function to retrieve account information
  const getAccountInfo = async () => {
    try {
      const response = await fetch(`http://localhost:4000/admin/baby-acc-info/${bid}`);
      if (response.status === 200) {
        const data = await response.json();
        setAccountInfo(data);
        console.log(data)
      } else {
        console.error('Account information retrieval failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    if (accountNo) {
      getAccountInfo();
    }
  }, [accountNo]);


  return (
    <div className="add-child">
      {/* Navbar */}
      <HAACNavbar />

      {/* header  */}
      <HomeLink addChild="Update Child Details" />

      <section className="blog-link">
        <div className="linked-in-link" />
      </section>
    

          < section className="facebook-link" >
        <div className="instagram-link">
        
          <div className="text-input">
            <div className="icon-container">

              <div className="password3">
                <div className="input-text-label3" style={{fontSize:'20px', marginBottom:"10px"}}>Child ID</div>
                <div className="input-field4">
                  <div className="text3">
                    <input
                      className="type-here6"
                      placeholder="Enter Child ID"
                      type="text"
                    />
                  </div>
                </div>
              </div>

              <div className="password3">
                <div className="input-text-label3" style={{fontSize:'20px', marginBottom:"10px"}}>Child  First Name : </div>
              </div>

              <div className="password3">
                <div className="input-text-label3" style={{fontSize:'20px', marginBottom:"10px"}}>Child  Last Name : </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Vaccination Form */}

      < section className="facebook-link"  style={{marginTop:"-100px"}}>
        <div className="instagram-link">
          <h1 className="information-form">Vaccination Form</h1>
          <div className="text-input">
            <div className="icon-container">

              <div className="password3">
                <div className="input-text-label3">Vaccination Name</div>
                <div className="input-field4">
                  <div className="text3">
                    <input
                      className="type-here6"
                      placeholder="Enter Child ID"
                      type="text"
                    />
                  </div>
                </div>
              </div>

              <div className="password3">
                <div className="input-text-label3">Vaccinator</div>
                <div className="input-field4">
                  <div className="text3">
                    <input
                      className="type-here6"
                      placeholder="Enter name"
                      type="text"
                    />
                  </div>
                </div>
              </div>

              <div className="password3">
                <div className="input-text-label3">Bottle Code</div>
                <div className="input-field4">
                  <div className="text3">
                    <input
                      className="type-here6"
                      placeholder="Enter name"
                      type="text"
                    />
                  </div>
                </div>

              </div>
              <div className="password3">
                <div className="input-text-label4">Place</div>
                <div className="input-field5">
                  <div className="text4">
                    <input
                      className="type-here6"
                      placeholder="Enter name"
                      type="text"
                    />

                  </div>
                </div>

                <div className="cta3" style={{marginTop:"60px"}}>
                  <Button href="/low-admin"
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
                  <Button href="/low-admin"
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
        </div>
      </section >
   <Footer />
    </div >
  );
};



export default HUpdateChild;
