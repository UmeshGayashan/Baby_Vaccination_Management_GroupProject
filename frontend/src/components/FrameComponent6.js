import { useState } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  TextField,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import "./FrameComponent6.css";

const FrameComponent6 = () => {

  return (
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
            {/* <input
              className="checkbox32"
              checked={checkboxIconChecked}
              type="checkbox"
              onChange={(event) => setCheckboxIconChecked(event.target.checked)}
            /> */}
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
            {/* <TextField
              className="input-field13"
              placeholder="No"
              variant="outlined"
              
              sx={{
                "& fieldset": { borderColor: "#ccc" },
                "& .MuiInputBase-root": {
                  height: "56px",
                  backgroundColor: "#fff",
                  paddingLeft: "10px",
                  borderRadius: "8px",
                },
                "& .MuiInputBase-input": {
                  paddingLeft: "-18px",
                  color: "#666",
                },
              }} */}
            {/* /> */}
            
          </div>
          <div className="username5">
            <div className="input-text-label12">Vaccinator Name</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Name" type="text" />
                
              </div>
            </div>
            {/* <TextField
              className="input-field14"
              placeholder="Name"
              variant="outlined"
             
              sx={{
                "& fieldset": { borderColor: "#ccc" },
                "& .MuiInputBase-root": {
                  height: "56px",
                  backgroundColor: "#fff",
                  paddingLeft: "10px",
                  borderRadius: "8px",
                },
                "& .MuiInputBase-input": {
                  paddingLeft: "-18px",
                  color: "#666",
                },
              }}
            /> */}
           
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
          <Button
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
          <Button href="/user-page"
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
  );
};

export default FrameComponent6;
