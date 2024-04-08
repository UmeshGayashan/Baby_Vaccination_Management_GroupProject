import HomeLink from "../../components/HomeLink";
import Footer from "../../components/Footer";
import "../pageCss/AddChild.css";
import DatePicker2 from "../../components/Datepicker_2";
import { Button,} from "@mui/material";
import HAACNavbar from "../../components/HA_addchildnavbar";

const HUpdateChild = () => {

  return (
    <div className="add-child">
      {/* Navbar */}
    <HAACNavbar/>

      {/* header  */}
      <HomeLink addChild="Update Child" />

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
              <div className="input-text-label3">Mother NIC</div>
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
              <div className="input-text-label3">Guardian NIC</div>
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
              <div className="input-text-label4">Child Name</div>
              <div className="input-field5">
                <div className="text4">
                  <input
                    className="type-here6"
                    placeholder="Enter name"
                    type="text"
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
                    placeholder="Enter name"
                    type="text"
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
                    placeholder="Enter name"
                    type="text"
                  />

                </div>
              </div>

            </div>
            <div className="password3">
              <div className="input-text-label8">Weigh</div>
              <div className="input-field9">
                <div className="text8">
                  <input
                    className="type-here6"
                    placeholder="Weigh"
                    type="text"
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
                  <DatePicker2 />
                </div>
              </div>

              <div className="go-button">
              <div className="input-birth-day">Registered Date</div>
                <div className="spacing-vertical28">
                </div>
                <div className="spacing-vertical29">
                  <div className="min-height57" />
                </div>
                <div className="native-chrome-date-picker-2">
                  <DatePicker2 />
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
            <div className="gender1">Gender</div>
            <div className="radio-button1">
              <input className="radio" type="radio" name="radioGroup-1" />
              <div className="radio-selection">Male</div>
            </div>
          </div>
          <div className="radio-button2">
          <input className="radio1" type="radio" name="radioGroup-1" />
              <div className="radio-selection1">Female</div>
          </div>
        </div>
       
        <div className="row210">
          <div className="checkbox31">
             
          <input className="checkbox34" type="checkbox" />
            <div className="checked">Vaccine 01 </div>
          </div>
          <div className="username5">
            <div className="input-text-label10">Date</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Data" type="text" />
                
              </div>
            </div>
           
          </div>

          <div className="username5">
            <div className="input-text-label10">Location</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Location" type="text" />
                
              </div>
            </div>
           
          </div>

          <div className="username5">
            <div className="input-text-label10">Time</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Time" type="text" />
                
              </div>
            </div>
           
          </div>

          <div className="username5">
            <div className="input-text-label10">Age</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Age" type="text" />
                
              </div>
            </div>
           
          </div>

       
          <div className="username5">
            <div className="input-text-label11">Bottle Code</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Code" type="text" />
                
              </div>
            </div>

            
          </div>
          <div className="username5">
            <div className="input-text-label12">Vaccinator Name</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Name" type="text" />
                
              </div>
            </div>

           
          </div>
          <div className="spacing-horizontal12">
            <div className="frame-spacer-array">
              <div className="spacer12" />
            </div>
          </div>
        </div>


        <div className="row211">
          <div className="checkbox33">
            <input className="checkbox34" type="checkbox" />
            <div className="checked1">Vaccine 02 </div>
          </div>

          <div className="username5">
            <div className="input-text-label10">Date</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Data" type="text" /> 
              </div>
            </div>
          </div>

          <div className="username5">
            <div className="input-text-label10">Location</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Location" type="text" />
              </div>
            </div>
           
          </div>

          <div className="username5">
            <div className="input-text-label10">Time</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Time" type="text" />
                
              </div>
            </div>
           
          </div>

          <div className="username5">
            <div className="input-text-label10">Age</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Age" type="text" />
                
              </div>
            </div>
           
          </div>

          <div className="username5">
            <div className="input-text-label10">Bottle Code</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Code" type="text" />
                
              </div>
            </div>
           
          </div>

          <div className="username5">
            <div className="input-text-label10">Vaccinator Name</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Name" type="text" />
                
              </div>
            </div>
           
          </div>
          <div className="spacing-horizontal12">
            <div className="frame-spacer-array">
              <div className="spacer12" />
            </div>
          </div>
        </div>


        <div className="row212">
          <div className="checkbox35">
            <input className="checkbox36" type="checkbox" />
            <div className="unchecked">Vaccine 03 </div>
          </div>
          <div className="username5">
            <div className="input-text-label10">Date</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Data" type="text" /> 
              </div>
            </div>
          </div>

          <div className="username5">
            <div className="input-text-label10">Location</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Location" type="text" />
              </div>
            </div>
           
          </div>

          <div className="username5">
            <div className="input-text-label10">Time</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Time" type="text" />
                
              </div>
            </div>
           
          </div>

          <div className="username5">
            <div className="input-text-label10">Age</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Age" type="text" />
                
              </div>
            </div>
           
          </div>

          <div className="username5">
            <div className="input-text-label10">Bottle Code</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Code" type="text" />
                
              </div>
            </div>
           
          </div>

          <div className="username5">
            <div className="input-text-label10">Vaccinator Name</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Name" type="text" />
                
              </div>
            </div>
           
          </div>
          <div className="spacing-horizontal12">
            <div className="frame-spacer-array">
              <div className="spacer12" />
            </div>
          </div>
        </div>


        <div className="row213">
          <div className="checkbox37">
            <input className="checkbox38" type="checkbox" />
            <div className="unchecked1">Vaccine 04 </div>
          </div>
          <div className="username5">
            <div className="input-text-label10">Date</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Data" type="text" /> 
              </div>
            </div>
          </div>

          <div className="username5">
            <div className="input-text-label10">Location</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Location" type="text" />
              </div>
            </div>
           
          </div>

          <div className="username5">
            <div className="input-text-label10">Time</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Time" type="text" />
                
              </div>
            </div>
           
          </div>

          <div className="username5">
            <div className="input-text-label10">Age</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Age" type="text" />
                
              </div>
            </div>
           
          </div>

          <div className="username5">
            <div className="input-text-label10">Bottle Code</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Code" type="text" />
                
              </div>
            </div>
           
          </div>

          <div className="username5">
            <div className="input-text-label10">Vaccinator Name</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Name" type="text" />
                
              </div>
            </div>
           
          </div>
          <div className="spacing-horizontal12">
            <div className="frame-spacer-array">
              <div className="spacer12" />
            </div>
          </div>
        </div>


        <div className="row214">
          <div className="checkbox39">
            <input className="checkbox40" type="checkbox" />
            <div className="unchecked2">Vaccine 05 </div>
          </div>
          <div className="username5">
            <div className="input-text-label10">Date</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Data" type="text" /> 
              </div>
            </div>
          </div>

          <div className="username5">
            <div className="input-text-label10">Location</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Location" type="text" />
              </div>
            </div>
           
          </div>

          <div className="username5">
            <div className="input-text-label10">Time</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Time" type="text" />
                
              </div>
            </div>
           
          </div>

          <div className="username5">
            <div className="input-text-label10">Age</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Age" type="text" />
                
              </div>
            </div>
           
          </div>

          <div className="username5">
            <div className="input-text-label10">Bottle Code</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Code" type="text" />
                
              </div>
            </div>
           
          </div>

          <div className="username5">
            <div className="input-text-label10">Vaccinator Name</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Name" type="text" />
                
              </div>
            </div>
           
          </div>
          <div className="spacing-horizontal12">
            <div className="frame-spacer-array">
              <div className="spacer12" />
            </div>
          </div>
        </div>


        <div className="row215">
          <div className="checkbox41">
            <input className="checkbox42" type="checkbox" />
            <div className="unchecked3">Vaccine 06 </div>
          </div>
          <div className="username5">
            <div className="input-text-label10">Date</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Data" type="text" /> 
              </div>
            </div>
          </div>

          <div className="username5">
            <div className="input-text-label10">Location</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Location" type="text" />
              </div>
            </div>
           
          </div>

          <div className="username5">
            <div className="input-text-label10">Time</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Time" type="text" />
                
              </div>
            </div>
           
          </div>

          <div className="username5">
            <div className="input-text-label10">Age</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Age" type="text" />
                
              </div>
            </div>
           
          </div>

          <div className="username5">
            <div className="input-text-label10">Bottle Code</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Code" type="text" />
                
              </div>
            </div>
           
          </div>

          <div className="username5">
            <div className="input-text-label10">Vaccinator Name</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Name" type="text" />
                
              </div>
            </div>
           
          </div>
          <div className="spacing-horizontal12">
            <div className="frame-spacer-array">
              <div className="spacer12" />
            </div>
          </div>
        </div>


        <div className="row216">
          <div className="checkbox43">
            <input className="checkbox44" type="checkbox" />
            <div className="unchecked4">Vaccine 07 </div>
          </div>
          <div className="username5">
            <div className="input-text-label10">Date</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Data" type="text" /> 
              </div>
            </div>
          </div>

          <div className="username5">
            <div className="input-text-label10">Location</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Location" type="text" />
              </div>
            </div>
           
          </div>

          <div className="username5">
            <div className="input-text-label10">Time</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Time" type="text" />
                
              </div>
            </div>
           
          </div>

          <div className="username5">
            <div className="input-text-label10">Age</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Age" type="text" />
                
              </div>
            </div>
           
          </div>

          <div className="username5">
            <div className="input-text-label10">Bottle Code</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Code" type="text" />
                
              </div>
            </div>
           
          </div>

          <div className="username5">
            <div className="input-text-label10">Vaccinator Name</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Name" type="text" />
                
              </div>
            </div>
           
          </div>
          <div className="spacing-horizontal12">
            <div className="frame-spacer-array">
              <div className="spacer12" />
            </div>
          </div>
        </div>


        <div className="row217">
          <div className="checkbox45">
            <input className="checkbox46" type="checkbox" />
            <div className="unchecked5">Vaccine 08 </div>
          </div>
          <div className="username5">
            <div className="input-text-label10">Date</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Data" type="text" /> 
              </div>
            </div>
          </div>

          <div className="username5">
            <div className="input-text-label10">Location</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Location" type="text" />
              </div>
            </div>
           
          </div>

          <div className="username5">
            <div className="input-text-label10">Time</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Time" type="text" />
                
              </div>
            </div>
           
          </div>

          <div className="username5">
            <div className="input-text-label10">Age</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Age" type="text" />
                
              </div>
            </div>
           
          </div>

          <div className="username5">
            <div className="input-text-label10">Bottle Code</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Code" type="text" />
                
              </div>
            </div>
           
          </div>

          <div className="username5">
            <div className="input-text-label10">Vaccinator Name</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Name" type="text" />
                
              </div>
            </div>
           
          </div>
          <div className="spacing-horizontal12">
            <div className="frame-spacer-array">
              <div className="spacer12" />
            </div>
          </div>
        </div>


        <div className="row218">
          <div className="checkbox47">
            <input className="checkbox48" type="checkbox" />
            <div className="unchecked6">Vaccine 09 </div>
          </div>
          <div className="username5">
            <div className="input-text-label10">Date</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Data" type="text" /> 
              </div>
            </div>
          </div>

          <div className="username5">
            <div className="input-text-label10">Location</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Location" type="text" />
              </div>
            </div>
           
          </div>

          <div className="username5">
            <div className="input-text-label10">Time</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Time" type="text" />
                
              </div>
            </div>
           
          </div>

          <div className="username5">
            <div className="input-text-label10">Age</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Age" type="text" />
                
              </div>
            </div>
           
          </div>

          <div className="username5">
            <div className="input-text-label10">Bottle Code</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Code" type="text" />
                
              </div>
            </div>
           
          </div>

          <div className="username5">
            <div className="input-text-label10">Vaccinator Name</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Name" type="text" />
                
              </div>
            </div>
           
          </div>
          <div className="spacing-horizontal12">
            <div className="frame-spacer-array">
              <div className="spacer12" />
            </div>
          </div>
        </div>


        <div className="row219">
          <div className="checkbox49">
            <input className="checkbox50" type="checkbox" />
            <div className="unchecked7">Vaccine 10 </div>
          </div>
          <div className="username5">
            <div className="input-text-label10">Date</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Data" type="text" /> 
              </div>
            </div>
          </div>

          <div className="username5">
            <div className="input-text-label10">Location</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Location" type="text" />
              </div>
            </div>
           
          </div>

          <div className="username5">
            <div className="input-text-label10">Time</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Time" type="text" />
                
              </div>
            </div>
           
          </div>

          <div className="username5">
            <div className="input-text-label10">Age</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Age" type="text" />
                
              </div>
            </div>
           
          </div>

          <div className="username5">
            <div className="input-text-label10">Bottle Code</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Code" type="text" />
                
              </div>
            </div>
           
          </div>

          <div className="username5">
            <div className="input-text-label10">Vaccinator Name</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Name" type="text" />
                
              </div>
            </div>
           
          </div>
          <div className="spacing-horizontal12">
            <div className="frame-spacer-array">
              <div className="spacer12" />
            </div>
          </div>
        </div>


        <div className="row220">
          <div className="checkbox51">
            <input className="checkbox52" type="checkbox" />
            <div className="unchecked8">Vaccine 11 </div>
          </div>
          <div className="username5">
            <div className="input-text-label10">Date</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Data" type="text" /> 
              </div>
            </div>
          </div>

          <div className="username5">
            <div className="input-text-label10">Location</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Location" type="text" />
              </div>
            </div>
           
          </div>

          <div className="username5">
            <div className="input-text-label10">Time</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Time" type="text" />
                
              </div>
            </div>
           
          </div>

          <div className="username5">
            <div className="input-text-label10">Age</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Age" type="text" />
                
              </div>
            </div>
           
          </div>

          <div className="username5">
            <div className="input-text-label10">Bottle Code</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Code" type="text" />
                
              </div>
            </div>
           
          </div>

          <div className="username5">
            <div className="input-text-label10">Vaccinator Name</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Name" type="text" />
                
              </div>
            </div>
           
          </div>
          <div className="spacing-horizontal12">
            <div className="frame-spacer-array">
              <div className="spacer12" />
            </div>
          </div>
        </div>
        <div className="row221">
          <div className="checkbox53">
            <input className="checkbox54" type="checkbox" />
            <div className="unchecked9">Vaccine 12 </div>
          </div>
          <div className="username5">
            <div className="input-text-label10">Date</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Data" type="text" /> 
              </div>
            </div>
          </div>

          <div className="username5">
            <div className="input-text-label10">Location</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Location" type="text" />
              </div>
            </div>
           
          </div>

          <div className="username5">
            <div className="input-text-label10">Time</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Time" type="text" />
                
              </div>
            </div>
           
          </div>

          <div className="username5">
            <div className="input-text-label10">Age</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Age" type="text" />
                
              </div>
            </div>
           
          </div>

          <div className="username5">
            <div className="input-text-label10">Bottle Code</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Code" type="text" />
                
              </div>
            </div>
           
          </div>

          <div className="username5">
            <div className="input-text-label10">Vaccinator Name</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Name" type="text" />
                
              </div>
            </div>
           
          </div>
          <div className="spacing-horizontal12">
            <div className="frame-spacer-array">
              <div className="spacer12" />
            </div>
          </div>
        </div>


        <div className="toggle1">
        <input className="radio" type="radio" name="radioGroup-1" />
          <div className="off">Sent Email to Admin and Pearant</div>
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
    </section>
      
      <Footer />
    </div>
  );
};

export default HUpdateChild;
