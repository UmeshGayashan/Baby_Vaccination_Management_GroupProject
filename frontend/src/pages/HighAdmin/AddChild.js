import { useNavigate } from "react-router-dom";
import HomeLink from "../../components/HomeLink";
import Footer from "../../components/Footer";
import "../pageCss/AddChild.css";
import LAACNavbar from "../../components/LA_addchildNavBar";
import DatePicker2 from "../../components/Datepicker_2";
import React, { useCallback, useState } from "react";
import { Button } from "@mui/material";
import HAACNavbar from "../../components/HA_addchildnavbar";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const HAddChild = () => {

  const navigate = useNavigate();

  // const onNavButtonClick = useCallback(() => {
  //   navigate("/low-admin-parants");
  // }, [navigate]);


  // const [orderNotes, setOrderNotes] = useState("");
  // const [selectedImage, setSelectedImage] = useState(null);

  // const onButtons1Click = useCallback(() => {
  //   navigate("low-admin-parants");
  // }, [navigate]);

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   setSelectedImage(file);
  // };
 
    
  const [mfirstName, setFName] = useState('');
  const [mlastName, setLName] = useState('');
  const [mnic, setNIC] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [fatherNic, setFatherNic] = useState('');
  const [bid, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [ofc, setOfc] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [birthweight, setBirthweight] = useState('');
  const [birthHospital, setBirthHospital] = useState('');

  // Function to create an account
  const createAccount = async () => {
    try {
      console.log(birthweight);
      const response = await fetch('http://localhost:4000/admin/create-baby-acc', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mfirstName, mlastName, mnic, fatherName, fatherNic, bid, gender, ofc, birthDate,birthweight , birthHospital}),
      });
      
      if (response.ok) {
        const data = await response.json();
        return data.token;
      } else {
        console.error('Failed to get token');
        return null;
      }
    } catch (error) {
      console.error('Error:', error);
      // //Alert
      // setShowFailureAlert(true);
      // setTimeout(() => {
      // setShowFailureAlert(false);}, 2000);
    }
  };

  function onChangeHandler(value) {
    setBirthDate(value);
};
const handleGenderChange = (event) => {
  setGender(event.target.value);
};

   
  


  return (
    <div className="add-child">
      {/* Navbar */}
      <HAACNavbar/>

      {/* header  */}
      <HomeLink addChild="Add Child" />

      <section className="blog-link">
        <div className="linked-in-link" />
      </section>
      {/* first Input fields */}
      <section className="facebook-link">
      <div className="instagram-link">
        <h1 className="information-form">Information Form</h1>
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
                    value={mfirstName}
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
                    value={mlastName}
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
                    value={mnic}
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
              <div className="input-text-label7">Hospital Name</div>
              <div className="input-field8">
                <div className="text7">
                  <input
                    className="type-here6"
                    placeholder="Enter Hospital"
                    type="text"
                    value={birthHospital}
                    onChange={(e) => setBirthHospital(e.target.value)}
                  />

                </div>
              </div>

            </div>
            <div className="password3">
              <div className="input-text-label8">Weight</div>
              <div className="input-field9">
                <div className="text8">
                  <input
                    className="type-here6"
                    placeholder="Weigh"
                    type="text"
                    value={birthweight}
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

            <div className="password3">
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
            </div>

            <div className="password3" style={{ display: 'flex', alignItems: 'center' }}>
            <div className="gender1" style={{ marginRight: '20px' }}>Gender:</div>
            <div className="radio-button1" style={{ marginRight: '10px' }}>
                <input
                    className="radio"
                    type="radio"
                    name="radioGroup-1"
                    value="Male"
                    checked={gender === 'Male'}
                    onChange={handleGenderChange}
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
                    onChange={handleGenderChange}
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
                    onChange={handleGenderChange}
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
                    placeholder="Male or Female or Other"
                    type="text"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="clear-button">
              <div className="go-button">
              <div className="input-birth-day">Input Birth Day</div>
                <div className="spacing-vertical28">
                </div>
                <div className="spacing-vertical29">
                  <div className="min-height57" />
                </div>
                <div className="native-chrome-date-picker-2">
                <DatePicker
                    id="dateStartEnd"
                    selected={birthDate}
                    onChange={onChangeHandler}
                    dateFormat="dd MMM yyyy"
                    className={'form-control form-control-sm'}
                    showDisabledMonthNavigation
                    open            
                />
                </div>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </section>
      <section className="add-child-inner">
      <div className="horizontal-spacing-array-parent">
        <div className="horizontal-spacing-array">
          <div className="gender-frame">
            <div className="gender1"></div>
            
          </div>
          
        </div>

        <div className="toggle1">
        <input className="radio" type="radio" name="radioGroup-1" />
          <div className="off">Sent Email to Parent</div>
        </div>
        <div className="cta3">
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
          <Button
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
            onClick={createAccount}
          >
            Save
          </Button>
        </div>
      </div>
    </section>
      
      <Footer />
    </div>
  );
};

export default HAddChild;
