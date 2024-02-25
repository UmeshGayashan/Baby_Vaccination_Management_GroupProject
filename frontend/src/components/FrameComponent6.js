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

const FrameComponent6 = ({
  icon,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  icon7,
  icon8,
  icon9,
  icon10,
  icon11,
  onButtons1Click,
}) => {
  const [checkboxIconChecked, setCheckboxIconChecked] = useState(true);
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
            <input
              className="radio1"
              checked={true}
              type="radio"
              name="radioGroup-1"
            />
            <div className="radio-selection1">Female</div>
          </div>
        </div>
        <div className="frame-for-text-area">
          <div className="text-area4">
            <div className="div135">Father Noticers</div>
            <div className="text-block1">
              <div className="hint-text-frame-for-text-area">
                <div className="hint-text">
                  <p className="text10"> text</p>
                  <p className="blank-line2">&nbsp;</p>
                  <p className="blank-line3">&nbsp;</p>
                  <p className="blank-line4">&nbsp;</p>
                </div>
              </div>
              <div className="value3">0 / 225</div>
            </div>
          </div>
        </div>
        <div className="row210">
          <div className="checkbox31">
            <input
              className="checkbox32"
              checked={checkboxIconChecked}
              type="checkbox"
              onChange={(event) => setCheckboxIconChecked(event.target.checked)}
            />
            <div className="checked">Vaccine 01 (Done)</div>
          </div>
          <div className="username5">
            <div className="input-text-label10">Date</div>
            <div className="input-field11">
              <div className="text11">
                <input className="type-here7" placeholder="Data" type="text" />
                <img className="icon98" alt="" src={icon} />
              </div>
            </div>
            <div className="assistive-text9">
              Your password is between 4 and 12 characters
            </div>
          </div>
          <div className="dropdowns">
            <div className="dropdown-title">Location</div>
            <FormControl
              className="input-field12"
              variant="standard"
              sx={{
                borderColor: "#ccc",
                borderStyle: "SOLID",
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                backgroundColor: "#fff",
                borderRadius: "8px",
                width: "100%",
                height: "56px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "56px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "56px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "56px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "56px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#666",
                  fontSize: 16,
                  fontWeight: "Regular",
                  fontFamily: "Noto Sans",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "16px",
                },
              }}
            >
              <InputLabel color="secondary" />
              <Select
                color="secondary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="24px"
                    height="24px"
                    src="/icon-10.svg"
                    style={{ marginRight: "16px" }}
                  />
                )}
              >
                <MenuItem>Dropdown option</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </div>
          <div className="username6">
            <div className="input-text-label11">Bottle No</div>
            <TextField
              className="input-field13"
              placeholder="No"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <img width="24px" height="24px" src="/icon-11.svg" />
                ),
              }}
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
            />
            <div className="assistive-text10">
              Your password is between 4 and 12 characters
            </div>
          </div>
          <div className="username7">
            <div className="input-text-label12">Vaccinator Name</div>
            <TextField
              className="input-field14"
              placeholder="Name"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <img width="24px" height="24px" src="/icon-12.svg" />
                ),
              }}
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
            />
            <div className="assistive-text11">
              Your password is between 4 and 12 characters
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
            <div className="checked1">Vaccine 02 (Done)</div>
          </div>
          <div className="username8">
            <div className="input-text-label13">Date</div>
            <div className="input-field15">
              <div className="text12">
                <input className="type-here8" placeholder="Data" type="text" />
                <img className="icon99" alt="" src={icon1} />
              </div>
            </div>
            <div className="assistive-text12">
              Your password is between 4 and 12 characters
            </div>
          </div>
          <div className="dropdowns1">
            <div className="dropdown-title1">Location</div>
            <FormControl
              className="input-field16"
              variant="standard"
              sx={{
                borderColor: "#ccc",
                borderStyle: "SOLID",
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                backgroundColor: "#fff",
                borderRadius: "8px",
                width: "100%",
                height: "56px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "56px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "56px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "56px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "56px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#666",
                  fontSize: 16,
                  fontWeight: "Regular",
                  fontFamily: "Noto Sans",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "16px",
                },
              }}
            >
              <InputLabel color="secondary" />
              <Select
                color="secondary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="24px"
                    height="24px"
                    src="/icon-14.svg"
                    style={{ marginRight: "16px" }}
                  />
                )}
              >
                <MenuItem>Dropdown option</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </div>
          <div className="username9">
            <div className="input-text-label14">Bottle No</div>
            <TextField
              className="input-field17"
              placeholder="No"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <img width="24px" height="24px" src="/icon-15.svg" />
                ),
              }}
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
            />
            <div className="assistive-text13">
              Your password is between 4 and 12 characters
            </div>
          </div>
          <div className="username10">
            <div className="input-text-label15">Vaccinator Name</div>
            <TextField
              className="input-field18"
              placeholder="Name"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <img width="24px" height="24px" src="/icon-16.svg" />
                ),
              }}
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
            />
            <div className="assistive-text14">
              Your password is between 4 and 12 characters
            </div>
          </div>
          <div className="spacing-horizontal13">
            <div className="frame9">
              <div className="spacer13" />
            </div>
          </div>
        </div>
        <div className="row212">
          <div className="checkbox35">
            <input className="checkbox36" type="checkbox" />
            <div className="unchecked">Vaccine 03 (Not yet)</div>
          </div>
          <div className="username11">
            <div className="input-text-label16">Date</div>
            <div className="input-field19">
              <div className="text13">
                <input className="type-here9" placeholder="Data" type="text" />
                <img className="icon100" alt="" src={icon2} />
              </div>
            </div>
            <div className="assistive-text15">
              Your password is between 4 and 12 characters
            </div>
          </div>
          <div className="dropdowns2">
            <div className="dropdown-title2">Location</div>
            <FormControl
              className="input-field20"
              variant="standard"
              sx={{
                borderColor: "#ccc",
                borderStyle: "SOLID",
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                backgroundColor: "#fff",
                borderRadius: "8px",
                width: "100%",
                height: "56px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "56px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "56px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "56px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "56px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#666",
                  fontSize: 16,
                  fontWeight: "Regular",
                  fontFamily: "Noto Sans",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "16px",
                },
              }}
            >
              <InputLabel color="secondary" />
              <Select
                color="secondary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="24px"
                    height="24px"
                    src="/icon-18.svg"
                    style={{ marginRight: "16px" }}
                  />
                )}
              >
                <MenuItem>Dropdown option</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </div>
          <div className="username12">
            <div className="input-text-label17">Bottle No</div>
            <TextField
              className="input-field21"
              placeholder="No"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <img width="24px" height="24px" src="/icon-19.svg" />
                ),
              }}
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
            />
            <div className="assistive-text16">
              Your password is between 4 and 12 characters
            </div>
          </div>
          <div className="username13">
            <div className="input-text-label18">Vaccinator Name</div>
            <TextField
              className="input-field22"
              placeholder="Name"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <img width="24px" height="24px" src="/icon-20.svg" />
                ),
              }}
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
            />
            <div className="assistive-text17">
              Your password is between 4 and 12 characters
            </div>
          </div>
          <div className="spacing-horizontal14">
            <div className="frame10">
              <div className="spacer14" />
            </div>
          </div>
        </div>
        <div className="row213">
          <div className="checkbox37">
            <input className="checkbox38" type="checkbox" />
            <div className="unchecked1">Vaccine 04 (Not yet)</div>
          </div>
          <div className="username14">
            <div className="input-text-label19">Date</div>
            <div className="input-field23">
              <div className="text14">
                <input className="type-here10" placeholder="Data" type="text" />
                <img className="icon101" alt="" src={icon3} />
              </div>
            </div>
            <div className="assistive-text18">
              Your password is between 4 and 12 characters
            </div>
          </div>
          <div className="dropdowns3">
            <div className="dropdown-title3">Location</div>
            <FormControl
              className="input-field24"
              variant="standard"
              sx={{
                borderColor: "#ccc",
                borderStyle: "SOLID",
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                backgroundColor: "#fff",
                borderRadius: "8px",
                width: "100%",
                height: "56px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "56px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "56px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "56px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "56px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#666",
                  fontSize: 16,
                  fontWeight: "Regular",
                  fontFamily: "Noto Sans",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "16px",
                },
              }}
            >
              <InputLabel color="secondary" />
              <Select
                color="secondary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="24px"
                    height="24px"
                    src="/icon-22.svg"
                    style={{ marginRight: "16px" }}
                  />
                )}
              >
                <MenuItem>Dropdown option</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </div>
          <div className="username15">
            <div className="input-text-label20">Bottle No</div>
            <TextField
              className="input-field25"
              placeholder="No"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <img width="24px" height="24px" src="/icon-23.svg" />
                ),
              }}
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
            />
            <div className="assistive-text19">
              Your password is between 4 and 12 characters
            </div>
          </div>
          <div className="username16">
            <div className="input-text-label21">Vaccinator Name</div>
            <TextField
              className="input-field26"
              placeholder="Name"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <img width="24px" height="24px" src="/icon-24.svg" />
                ),
              }}
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
            />
            <div className="assistive-text20">
              Your password is between 4 and 12 characters
            </div>
          </div>
          <div className="spacing-horizontal15">
            <div className="frame11">
              <div className="spacer15" />
            </div>
          </div>
        </div>
        <div className="row214">
          <div className="checkbox39">
            <input className="checkbox40" type="checkbox" />
            <div className="unchecked2">Vaccine 05 (Not yet)</div>
          </div>
          <div className="username17">
            <div className="input-text-label22">Date</div>
            <div className="input-field27">
              <div className="text15">
                <input className="type-here11" placeholder="Data" type="text" />
                <img className="icon102" alt="" src={icon4} />
              </div>
            </div>
            <div className="assistive-text21">
              Your password is between 4 and 12 characters
            </div>
          </div>
          <div className="dropdowns4">
            <div className="dropdown-title4">Location</div>
            <FormControl
              className="input-field28"
              variant="standard"
              sx={{
                borderColor: "#ccc",
                borderStyle: "SOLID",
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                backgroundColor: "#fff",
                borderRadius: "8px",
                width: "100%",
                height: "56px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "56px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "56px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "56px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "56px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#666",
                  fontSize: 16,
                  fontWeight: "Regular",
                  fontFamily: "Noto Sans",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "16px",
                },
              }}
            >
              <InputLabel color="secondary" />
              <Select
                color="secondary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="24px"
                    height="24px"
                    src="/icon-26.svg"
                    style={{ marginRight: "16px" }}
                  />
                )}
              >
                <MenuItem>Dropdown option</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </div>
          <div className="username18">
            <div className="input-text-label23">Bottle No</div>
            <TextField
              className="input-field29"
              placeholder="No"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <img width="24px" height="24px" src="/icon-27.svg" />
                ),
              }}
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
            />
            <div className="assistive-text22">
              Your password is between 4 and 12 characters
            </div>
          </div>
          <div className="username19">
            <div className="input-text-label24">Vaccinator Name</div>
            <TextField
              className="input-field30"
              placeholder="Name"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <img width="24px" height="24px" src="/icon-28.svg" />
                ),
              }}
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
            />
            <div className="assistive-text23">
              Your password is between 4 and 12 characters
            </div>
          </div>
          <div className="spacing-horizontal16">
            <div className="frame12">
              <div className="spacer16" />
            </div>
          </div>
        </div>
        <div className="row215">
          <div className="checkbox41">
            <input className="checkbox42" type="checkbox" />
            <div className="unchecked3">Vaccine 06 (Not yet)</div>
          </div>
          <div className="username20">
            <div className="input-text-label25">Date</div>
            <div className="input-field31">
              <div className="text16">
                <input className="type-here12" placeholder="Data" type="text" />
                <img className="icon103" alt="" src={icon5} />
              </div>
            </div>
            <div className="assistive-text24">
              Your password is between 4 and 12 characters
            </div>
          </div>
          <div className="dropdowns5">
            <div className="dropdown-title5">Location</div>
            <FormControl
              className="input-field32"
              variant="standard"
              sx={{
                borderColor: "#ccc",
                borderStyle: "SOLID",
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                backgroundColor: "#fff",
                borderRadius: "8px",
                width: "100%",
                height: "56px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "56px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "56px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "56px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "56px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#666",
                  fontSize: 16,
                  fontWeight: "Regular",
                  fontFamily: "Noto Sans",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "16px",
                },
              }}
            >
              <InputLabel color="secondary" />
              <Select
                color="secondary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="24px"
                    height="24px"
                    src="/icon-30.svg"
                    style={{ marginRight: "16px" }}
                  />
                )}
              >
                <MenuItem>Dropdown option</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </div>
          <div className="username21">
            <div className="input-text-label26">Bottle No</div>
            <TextField
              className="input-field33"
              placeholder="No"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <img width="24px" height="24px" src="/icon-31.svg" />
                ),
              }}
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
            />
            <div className="assistive-text25">
              Your password is between 4 and 12 characters
            </div>
          </div>
          <div className="username22">
            <div className="input-text-label27">Vaccinator Name</div>
            <TextField
              className="input-field34"
              placeholder="Name"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <img width="24px" height="24px" src="/icon-32.svg" />
                ),
              }}
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
            />
            <div className="assistive-text26">
              Your password is between 4 and 12 characters
            </div>
          </div>
          <div className="spacing-horizontal17">
            <div className="frame13">
              <div className="spacer17" />
            </div>
          </div>
        </div>
        <div className="row216">
          <div className="checkbox43">
            <input className="checkbox44" type="checkbox" />
            <div className="unchecked4">Vaccine 07 (Not yet)</div>
          </div>
          <div className="username23">
            <div className="input-text-label28">Date</div>
            <div className="input-field35">
              <div className="text17">
                <input className="type-here13" placeholder="Data" type="text" />
                <img className="icon104" alt="" src={icon6} />
              </div>
            </div>
            <div className="assistive-text27">
              Your password is between 4 and 12 characters
            </div>
          </div>
          <div className="dropdowns6">
            <div className="dropdown-title6">Location</div>
            <FormControl
              className="input-field36"
              variant="standard"
              sx={{
                borderColor: "#ccc",
                borderStyle: "SOLID",
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                backgroundColor: "#fff",
                borderRadius: "8px",
                width: "100%",
                height: "56px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "56px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "56px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "56px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "56px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#666",
                  fontSize: 16,
                  fontWeight: "Regular",
                  fontFamily: "Noto Sans",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "16px",
                },
              }}
            >
              <InputLabel color="secondary" />
              <Select
                color="secondary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="24px"
                    height="24px"
                    src="/icon-34.svg"
                    style={{ marginRight: "16px" }}
                  />
                )}
              >
                <MenuItem>Dropdown option</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </div>
          <div className="username24">
            <div className="input-text-label29">Bottle No</div>
            <TextField
              className="input-field37"
              placeholder="No"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <img width="24px" height="24px" src="/icon-35.svg" />
                ),
              }}
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
            />
            <div className="assistive-text28">
              Your password is between 4 and 12 characters
            </div>
          </div>
          <div className="username25">
            <div className="input-text-label30">Vaccinator Name</div>
            <TextField
              className="input-field38"
              placeholder="Name"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <img width="24px" height="24px" src="/icon-36.svg" />
                ),
              }}
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
            />
            <div className="assistive-text29">
              Your password is between 4 and 12 characters
            </div>
          </div>
          <div className="spacing-horizontal18">
            <div className="frame14">
              <div className="spacer18" />
            </div>
          </div>
        </div>
        <div className="row217">
          <div className="checkbox45">
            <input className="checkbox46" type="checkbox" />
            <div className="unchecked5">Vaccine 08 (Not yet)</div>
          </div>
          <div className="username26">
            <div className="input-text-label31">Date</div>
            <div className="input-field39">
              <div className="text18">
                <input className="type-here14" placeholder="Data" type="text" />
                <img className="icon105" alt="" src={icon7} />
              </div>
            </div>
            <div className="assistive-text30">
              Your password is between 4 and 12 characters
            </div>
          </div>
          <div className="dropdowns7">
            <div className="dropdown-title7">Location</div>
            <FormControl
              className="input-field40"
              variant="standard"
              sx={{
                borderColor: "#ccc",
                borderStyle: "SOLID",
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                backgroundColor: "#fff",
                borderRadius: "8px",
                width: "100%",
                height: "56px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "56px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "56px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "56px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "56px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#666",
                  fontSize: 16,
                  fontWeight: "Regular",
                  fontFamily: "Noto Sans",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "16px",
                },
              }}
            >
              <InputLabel color="secondary" />
              <Select
                color="secondary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="24px"
                    height="24px"
                    src="/icon-38.svg"
                    style={{ marginRight: "16px" }}
                  />
                )}
              >
                <MenuItem>Dropdown option</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </div>
          <div className="username27">
            <div className="input-text-label32">Bottle No</div>
            <TextField
              className="input-field41"
              placeholder="No"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <img width="24px" height="24px" src="/icon-39.svg" />
                ),
              }}
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
            />
            <div className="assistive-text31">
              Your password is between 4 and 12 characters
            </div>
          </div>
          <div className="username28">
            <div className="input-text-label33">Vaccinator Name</div>
            <TextField
              className="input-field42"
              placeholder="Name"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <img width="24px" height="24px" src="/icon-40.svg" />
                ),
              }}
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
            />
            <div className="assistive-text32">
              Your password is between 4 and 12 characters
            </div>
          </div>
          <div className="spacing-horizontal19">
            <div className="frame15">
              <div className="spacer19" />
            </div>
          </div>
        </div>
        <div className="row218">
          <div className="checkbox47">
            <input className="checkbox48" type="checkbox" />
            <div className="unchecked6">Vaccine 09 (Not yet)</div>
          </div>
          <div className="username29">
            <div className="input-text-label34">Date</div>
            <div className="input-field43">
              <div className="text19">
                <input className="type-here15" placeholder="Data" type="text" />
                <img className="icon106" alt="" src={icon8} />
              </div>
            </div>
            <div className="assistive-text33">
              Your password is between 4 and 12 characters
            </div>
          </div>
          <div className="dropdowns8">
            <div className="dropdown-title8">Location</div>
            <FormControl
              className="input-field44"
              variant="standard"
              sx={{
                borderColor: "#ccc",
                borderStyle: "SOLID",
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                backgroundColor: "#fff",
                borderRadius: "8px",
                width: "100%",
                height: "56px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "56px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "56px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "56px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "56px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#666",
                  fontSize: 16,
                  fontWeight: "Regular",
                  fontFamily: "Noto Sans",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "16px",
                },
              }}
            >
              <InputLabel color="secondary" />
              <Select
                color="secondary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="24px"
                    height="24px"
                    src="/icon-42.svg"
                    style={{ marginRight: "16px" }}
                  />
                )}
              >
                <MenuItem>Dropdown option</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </div>
          <div className="username30">
            <div className="input-text-label35">Bottle No</div>
            <TextField
              className="input-field45"
              placeholder="No"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <img width="24px" height="24px" src="/icon-43.svg" />
                ),
              }}
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
            />
            <div className="assistive-text34">
              Your password is between 4 and 12 characters
            </div>
          </div>
          <div className="username31">
            <div className="input-text-label36">Vaccinator Name</div>
            <TextField
              className="input-field46"
              placeholder="Name"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <img width="24px" height="24px" src="/icon-44.svg" />
                ),
              }}
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
            />
            <div className="assistive-text35">
              Your password is between 4 and 12 characters
            </div>
          </div>
          <div className="spacing-horizontal20">
            <div className="frame16">
              <div className="spacer20" />
            </div>
          </div>
        </div>
        <div className="row219">
          <div className="checkbox49">
            <input className="checkbox50" type="checkbox" />
            <div className="unchecked7">Vaccine 10 (Not yet)</div>
          </div>
          <div className="username32">
            <div className="input-text-label37">Date</div>
            <div className="input-field47">
              <div className="text20">
                <input className="type-here16" placeholder="Data" type="text" />
                <img className="icon107" alt="" src={icon9} />
              </div>
            </div>
            <div className="assistive-text36">
              Your password is between 4 and 12 characters
            </div>
          </div>
          <div className="dropdowns9">
            <div className="dropdown-title9">Location</div>
            <FormControl
              className="input-field48"
              variant="standard"
              sx={{
                borderColor: "#ccc",
                borderStyle: "SOLID",
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                backgroundColor: "#fff",
                borderRadius: "8px",
                width: "100%",
                height: "56px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "56px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "56px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "56px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "56px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#666",
                  fontSize: 16,
                  fontWeight: "Regular",
                  fontFamily: "Noto Sans",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "16px",
                },
              }}
            >
              <InputLabel color="secondary" />
              <Select
                color="secondary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="24px"
                    height="24px"
                    src="/icon-46.svg"
                    style={{ marginRight: "16px" }}
                  />
                )}
              >
                <MenuItem>Dropdown option</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </div>
          <div className="username33">
            <div className="input-text-label38">Bottle No</div>
            <TextField
              className="input-field49"
              placeholder="No"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <img width="24px" height="24px" src="/icon-47.svg" />
                ),
              }}
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
            />
            <div className="assistive-text37">
              Your password is between 4 and 12 characters
            </div>
          </div>
          <div className="username34">
            <div className="input-text-label39">Vaccinator Name</div>
            <TextField
              className="input-field50"
              placeholder="Name"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <img width="24px" height="24px" src="/icon-48.svg" />
                ),
              }}
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
            />
            <div className="assistive-text38">
              Your password is between 4 and 12 characters
            </div>
          </div>
          <div className="spacing-horizontal21">
            <div className="frame17">
              <div className="spacer21" />
            </div>
          </div>
        </div>
        <div className="row220">
          <div className="checkbox51">
            <input className="checkbox52" type="checkbox" />
            <div className="unchecked8">Vaccine 11 (Not yet)</div>
          </div>
          <div className="username35">
            <div className="input-text-label40">Date</div>
            <div className="input-field51">
              <div className="text21">
                <input className="type-here17" placeholder="Data" type="text" />
                <img className="icon108" alt="" src={icon10} />
              </div>
            </div>
            <div className="assistive-text39">
              Your password is between 4 and 12 characters
            </div>
          </div>
          <div className="dropdowns10">
            <div className="dropdown-title10">Location</div>
            <FormControl
              className="input-field52"
              variant="standard"
              sx={{
                borderColor: "#ccc",
                borderStyle: "SOLID",
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                backgroundColor: "#fff",
                borderRadius: "8px",
                width: "100%",
                height: "56px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "56px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "56px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "56px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "56px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#666",
                  fontSize: 16,
                  fontWeight: "Regular",
                  fontFamily: "Noto Sans",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "16px",
                },
              }}
            >
              <InputLabel color="secondary" />
              <Select
                color="secondary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="24px"
                    height="24px"
                    src="/icon-50.svg"
                    style={{ marginRight: "16px" }}
                  />
                )}
              >
                <MenuItem>Dropdown option</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </div>
          <div className="username36">
            <div className="input-text-label41">Bottle No</div>
            <TextField
              className="input-field53"
              placeholder="No"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <img width="24px" height="24px" src="/icon-51.svg" />
                ),
              }}
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
            />
            <div className="assistive-text40">
              Your password is between 4 and 12 characters
            </div>
          </div>
          <div className="username37">
            <div className="input-text-label42">Vaccinator Name</div>
            <TextField
              className="input-field54"
              placeholder="Name"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <img width="24px" height="24px" src="/icon-52.svg" />
                ),
              }}
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
            />
            <div className="assistive-text41">
              Your password is between 4 and 12 characters
            </div>
          </div>
          <div className="spacing-horizontal22">
            <div className="frame18">
              <div className="spacer22" />
            </div>
          </div>
        </div>
        <div className="row221">
          <div className="checkbox53">
            <input className="checkbox54" type="checkbox" />
            <div className="unchecked9">Vaccine 12 (Not yet)</div>
          </div>
          <div className="username38">
            <div className="input-text-label43">Date</div>
            <div className="input-field55">
              <div className="text22">
                <input className="type-here18" placeholder="Data" type="text" />
                <img className="icon109" alt="" src={icon11} />
              </div>
            </div>
            <div className="assistive-text42">
              Your password is between 4 and 12 characters
            </div>
          </div>
          <div className="dropdowns11">
            <div className="dropdown-title11">Location</div>
            <FormControl
              className="input-field56"
              variant="standard"
              sx={{
                borderColor: "#ccc",
                borderStyle: "SOLID",
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                backgroundColor: "#fff",
                borderRadius: "8px",
                width: "100%",
                height: "56px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "56px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "56px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "56px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "56px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#666",
                  fontSize: 16,
                  fontWeight: "Regular",
                  fontFamily: "Noto Sans",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "16px",
                },
              }}
            >
              <InputLabel color="secondary" />
              <Select
                color="secondary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="24px"
                    height="24px"
                    src="/icon-54.svg"
                    style={{ marginRight: "16px" }}
                  />
                )}
              >
                <MenuItem>Dropdown option</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </div>
          <div className="username39">
            <div className="input-text-label44">Bottle No</div>
            <TextField
              className="input-field57"
              placeholder="No"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <img width="24px" height="24px" src="/icon-55.svg" />
                ),
              }}
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
            />
            <div className="assistive-text43">
              Your password is between 4 and 12 characters
            </div>
          </div>
          <div className="username40">
            <div className="input-text-label45">Vaccinator Name</div>
            <TextField
              className="input-field58"
              placeholder="Name"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <img width="24px" height="24px" src="/icon-56.svg" />
                ),
              }}
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
            />
            <div className="assistive-text44">
              Your password is between 4 and 12 characters
            </div>
          </div>
          <div className="spacing-horizontal23">
            <div className="frame19">
              <div className="spacer23" />
            </div>
          </div>
        </div>
        <div className="toggle1">
          <div className="toggle-off">
            <div className="toggle2" />
            <div className="dot" />
          </div>
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
            onClick={onButtons1Click}
          >
            Save
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent6;
