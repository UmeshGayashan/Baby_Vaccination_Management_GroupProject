import HomeLink from "../../components/HomeLink";
import Footer from "../../components/Footer";
import "../pageCss/AddChild.css";
import React, { useState } from "react";
import { Button } from "@mui/material";
import LAACNavbar from "../../components/LA_addchildNavBar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import this to style the DatePicker

const LAVaccination = () => {
  const [babyId, setBabyId] = useState("");
  const [accountInfo, setAccountInfo] = useState(null);
  const [vaccine, setVaccineName] = useState("");
  const [vaccineNo, setVaccineNo] = useState("");
  const [vaccinator, setVaccinator] = useState("");
  const [bcode, setBottle_code] = useState("");
  const [location, setLocation] = useState("");
  const [nextDate, setnextDate] = useState(null);
  const [notification, setNotification] = useState({ open: false, message: '', severity: '' });

  const onChangeHandler = (value) => {
    setnextDate(value);
  };

  const createAccount = async () => {
    try {
      const response = await fetch("http://localhost:4000/healthcare/vacc-adding", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          babyId,
          vaccine,
          vaccineNo,
          vaccinator,
          bcode,
          location,
          nextDate,
        }),
      });

      if (response.status === 201) {
        const data = await response.json();
        // Handle success case
      } else {
        console.error("Account creation failed");
        // Handle failure case
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle error case
    }
  };

  const getAccountInfo = async () => {
    try {
      const response = await fetch(`http://localhost:4000/healthcare/baby-acc-info/${babyId}`);
      if (response.status === 200) {
        const data = await response.json();
        setAccountInfo(data);
      } else {
        console.error("Account information retrieval failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleVaccineNameChange = (event) => {
    setVaccineName(event.target.value);
  };

  return (
    <div className="add-child">
      <LAACNavbar />
      <HomeLink addChild="Add Vaccination Details" />
      <section className="blog-link">
        <div className="linked-in-link" />
      </section>
      <section className="facebook-link">
        <div className="instagram-link">
          <div className="text-input">
            <div className="icon-container">
              <div className="password3">
                <div className="input-text-label3" style={{ fontSize: "20px", marginBottom: "10px" }}>
                  Child ID
                </div>
                <div className="input-field4" style={{ marginBottom: "20px" }}>
                  <div className="text3">
                    <input
                      className="type-here6"
                      placeholder="Enter Child ID"
                      type="text"
                      value={babyId}
                      onChange={(e) => setBabyId(e.target.value)}
                    />
                  </div>
                </div>
                <Button
                  className="primary-button"
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#000",
                    fontSize: 16,
                    background: "#f2c94c",
                    borderRadius: "4px",
                    "&:hover": { background: "#f2c94c" },
                    width: 187,
                    height: 51,
                  }}
                  onClick={getAccountInfo}
                >
                  Get Account Info
                </Button>
                {accountInfo && (
                  <div className="container">
                    <div className="password3">
                      <div className="input-text-label3" style={{ fontSize: "20px", margin: "10px" }}>
                        Account Information :
                      </div>
                    </div>
                    <div style={{ fontSize: "18px", margin: "10px" }}>
                      <p>
                        First Name: <span style={{ marginLeft: "147px", fontWeight: "600" }}>{accountInfo.babyName.firstName}</span>
                      </p>
                      <p>
                        Last Name: <span style={{ marginLeft: "147px", fontWeight: "600" }}>{accountInfo.babyName.lastName}</span>
                      </p>
                      <p>
                        Mother's or Guardian’s NIC: <span style={{ marginLeft: "10px", fontWeight: "600" }}>{accountInfo.motherorGuardianNIC}</span>
                      </p>
                      <p>
                        Father’s NIC: <span style={{ marginLeft: "135px", fontWeight: "600" }}>{accountInfo.fatherNic}</span>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="facebook-link" style={{ marginTop: "-60px" }}>
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
                      placeholder="Enter Another Vaccination Name"
                      type="text"
                      value={vaccine}
                      onChange={(e) => setVaccineName(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="password3" style={{ display: "flex", alignItems: "center" }}>
                <div className="gender1" style={{ marginRight: "20px" }}>Vaccine Name:</div>
                {["BCG", "DPT-HepB-Hib or OPV & DTP", "MMR", "Live JE", "HPV", "Adult Tetanus Diphtheria"].map((vaccineOption) => (
                  <div className="radio-button1" style={{ marginRight: "10px" }} key={vaccineOption}>
                    <input
                      className="radio"
                      type="radio"
                      name="radioGroup-1"
                      value={vaccineOption}
                      checked={vaccine === vaccineOption}
                      onChange={handleVaccineNameChange}
                    />
                    <label className="radio-selection">{vaccineOption}</label>
                  </div>
                ))}
              </div>
              <div className="password3">
                <div className="input-text-label3">Dose Number</div>
                <div className="input-field4">
                  <div className="text3">
                    <input
                      className="type-here6"
                      placeholder="Enter Number"
                      type="number"
                      value={vaccineNo}
                      onChange={(e) => setVaccineNo(e.target.value)}
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
                      value={vaccinator}
                      onChange={(e) => setVaccinator(e.target.value)}
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
                      placeholder="Enter Code"
                      type="text"
                      value={bcode}
                      onChange={(e) => setBottle_code(e.target.value)}
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
                      placeholder="Enter Location"
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                </div>
                <div style={{ height: "120px", backgroundColor: "#fff9c7" }}>
                  <div className="clear-button">
                    <div className="go-button">
                      <div className="input-birth-day" style={{ textAlign: "center" }}>Input Next Day</div>
                      <div style={{ margin: "20px" }}>
                        <DatePicker
                          id="dateStartEnd"
                          selected={nextDate}
                          onChange={onChangeHandler}
                          dateFormat="dd MMM yyyy"
                          className={"form-control form-control-sm"}
                          showIcon
                        />
                      </div>
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
                      fontSize: 16,
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
                    className="buttons1"
                    disableElevation={true}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#000",
                      fontSize: 16,
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
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LAVaccination;
