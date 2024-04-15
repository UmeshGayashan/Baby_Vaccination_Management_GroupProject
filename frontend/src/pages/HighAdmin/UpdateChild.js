import HomeLink from "../../components/HomeLink";
import Footer from "../../components/Footer";
import "../pageCss/AddChild.css";
import DatePicker2 from "../../components/Datepicker_2";
import { Button, } from "@mui/material";
import HAACNavbar from "../../components/HA_addchildnavbar";

const HUpdateChild = () => {

  return (
    <div className="add-child">
      {/* Navbar */}
      <HAACNavbar />

      {/* header  */}
      <HomeLink addChild="Add Vaccination Details" />

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
