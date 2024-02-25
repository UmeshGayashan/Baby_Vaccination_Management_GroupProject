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
} from "@mui/material";
import Row from "./Row";
import "./Minheight.css";

const Minheight = () => {
  return (
    <div className="minheight">
      <div className="select-slot">
        <div className="input-slot">
          <div className="default-slot">Child 01</div>
        </div>
        <div className="m-icon3">
          <h1 className="v-icon6">arrow_drop_down</h1>
        </div>
      </div>
      <div className="custom-page-heading">
        <div className="box7">
          <div className="title-and-contents">
            <div className="breadcrumbs">
              <div className="link">
                <div className="icon33">
                  <img
                    className="homefilled-icon"
                    alt=""
                    src="/homefilled.svg"
                  />
                </div>
                <div className="link1">
                  <div className="link2">Home</div>
                </div>
              </div>
              <div className="separator">
                <div className="div2">/</div>
              </div>
              <img
                className="breadcrumb-collapsed"
                alt=""
                src="/breadcrumb--collapsed.svg"
              />
              <div className="separator1">
                <div className="div3">/</div>
              </div>
              <div className="link3">
                <div className="icon34">
                  <img
                    className="starsharp-icon24"
                    alt=""
                    src="/starsharp-26.svg"
                  />
                </div>
                <div className="link4">
                  <div className="link5">Users</div>
                </div>
              </div>
            </div>
            <h1 className="page-header">Track Your Child Vaccinations</h1>
            <div className="stack">
              <div className="instance-1">
                <div className="instance-slot">Instance Slot</div>
              </div>
            </div>
          </div>
          <div className="spacing-horizontal4">
            <div className="navbarbuttontext">
              <div className="spacer4" />
            </div>
          </div>
          <div className="stack1">
            <div className="instance-11">
              <div className="instance-slot1">Instance Slot</div>
            </div>
          </div>
        </div>
        <div className="spacing-vertical4">
          <div className="min-height17" />
        </div>
        <div className="divider-horizontal13">
          <div className="min-height18" />
          <div className="divider13" />
        </div>
      </div>
      <div className="card">
        <div className="paper">
          <div className="custom-users-management-tabl">
            <div className="custom-table-toolbar">
              <div className="queries">
                <div className="textfield1">
                  <div className="input5">
                    <input
                      className="content2"
                      placeholder="Name, email, etc..."
                      type="text"
                    />
                    <div className="label-container1">
                      <div className="label1">Search</div>
                    </div>
                  </div>
                  <div className="formhelpertext1">
                    <div className="helper-text1">Helper text</div>
                  </div>
                </div>
                <div className="select">
                  <div className="input6">
                    <div className="label-frame">
                      <div className="label-container2">
                        <div className="label2">Attribute</div>
                      </div>
                    </div>
                    <FormControl
                      className="container14"
                      variant="standard"
                      sx={{
                        borderTopWidth: "1px",
                        borderRightWidth: "1px",
                        borderBottomWidth: "1px",
                        borderLeftWidth: "1px",
                        borderRadius: "0px 0px 0px 0px",
                        width: "86.66666666666667%",
                        height: "24px",
                        m: 0,
                        p: 0,
                        "& .MuiInputBase-root": {
                          m: 0,
                          p: 0,
                          minHeight: "24px",
                          justifyContent: "center",
                          display: "inline-flex",
                        },
                        "& .MuiInputLabel-root": {
                          m: 0,
                          p: 0,
                          minHeight: "24px",
                          display: "inline-flex",
                        },
                        "& .MuiMenuItem-root": {
                          m: 0,
                          p: 0,
                          height: "24px",
                          display: "inline-flex",
                        },
                        "& .MuiSelect-select": {
                          m: 0,
                          p: 0,
                          height: "24px",
                          alignItems: "center",
                          display: "inline-flex",
                        },
                        "& .MuiInput-input": { m: 0, p: 0 },
                        "& .MuiInputBase-input": {
                          color: "rgba(0, 0, 0, 0.87)",
                          fontSize: 16,
                          fontWeight: "Regular",
                          fontFamily: "Roboto",
                          textAlign: "left",
                          p: "0 !important",
                        },
                      }}
                    >
                      <InputLabel color="primary" />
                      <Select
                        color="primary"
                        disableUnderline
                        displayEmpty
                        IconComponent={() => (
                          <img
                            width="24px"
                            height="24px"
                            src="/arrowdropdownfilled.svg"
                            style={{}}
                          />
                        )}
                      >
                        <MenuItem>Selected Child</MenuItem>
                      </Select>
                      <FormHelperText />
                    </FormControl>
                  </div>
                  <div className="formhelpertext2">
                    <div className="helper-text2">Helper text</div>
                  </div>
                </div>
                <div className="iconbutton10">
                  <div className="icon35">
                    <img
                      className="filteraltfilled-icon"
                      alt=""
                      src="/filteraltfilled.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="actions">
                <div className="button5">
                  <div className="base1">
                    <img
                      className="masked-icon2"
                      alt=""
                      src="/masked-icon.svg"
                    />
                    <div className="button6">Action</div>
                    <img
                      className="masked-icon3"
                      alt=""
                      src="/masked-icon.svg"
                    />
                  </div>
                </div>
                <div className="button7">
                  <div className="base2">
                    <img
                      className="masked-icon4"
                      alt=""
                      src="/masked-icon.svg"
                    />
                    <div className="button8">New</div>
                    <img
                      className="masked-icon5"
                      alt=""
                      src="/masked-icon.svg"
                    />
                  </div>
                </div>
                <div className="iconbutton11">
                  <div className="icon36">
                    <img
                      className="settingsfilled-icon"
                      alt=""
                      src="/settingsfilled.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="table">
              <div className="tableheadrow">
                <button className="tablehead">
                  <div className="checkbox1">
                    <div className="padding1">
                      <input className="hidden1" type="checkbox" />
                    </div>
                  </div>
                  <div className="mask">
                    <img
                      className="arrowdownwardfilled-icon"
                      alt=""
                      src="/arrowdownwardfilled.svg"
                    />
                  </div>
                  <div className="head">{`Vaccination `}</div>
                  <div className="mask1">
                    <img
                      className="arrowdownwardfilled-icon1"
                      alt=""
                      src="/arrowdownwardfilled.svg"
                    />
                  </div>
                </button>
                <TextField
                  className="tablehead1"
                  placeholder="Place"
                  variant="outlined"
                  sx={{
                    "& fieldset": { border: "none" },
                    "& .MuiInputBase-root": {
                      height: "56px",
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      borderRadius: "0px 0px 0px 0px",
                      fontSize: "14px",
                    },
                    "& .MuiInputBase-input": { color: "rgba(0, 0, 0, 0.87)" },
                  }}
                />
                <TextField
                  className="tablehead2"
                  placeholder="Date"
                  variant="outlined"
                  sx={{
                    "& fieldset": { border: "none" },
                    "& .MuiInputBase-root": {
                      height: "56px",
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      borderRadius: "0px 0px 0px 0px",
                      fontSize: "14px",
                    },
                    "& .MuiInputBase-input": { color: "rgba(0, 0, 0, 0.87)" },
                  }}
                />
                <TextField
                  className="tablehead3"
                  placeholder="Verification"
                  variant="outlined"
                  sx={{
                    "& fieldset": { border: "none" },
                    "& .MuiInputBase-root": {
                      height: "56px",
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      borderRadius: "0px 0px 0px 0px",
                      fontSize: "14px",
                    },
                    "& .MuiInputBase-input": { color: "rgba(0, 0, 0, 0.87)" },
                  }}
                />
                <TextField
                  className="tablehead4"
                  placeholder="Bottel code"
                  variant="outlined"
                  sx={{
                    "& fieldset": { border: "none" },
                    "& .MuiInputBase-root": {
                      height: "56px",
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      borderRadius: "0px 0px 0px 0px",
                      fontSize: "14px",
                    },
                    "& .MuiInputBase-input": { color: "rgba(0, 0, 0, 0.87)" },
                  }}
                />
                <TextField
                  className="tablehead5"
                  placeholder="Vaccinator"
                  variant="outlined"
                  sx={{
                    "& fieldset": { border: "none" },
                    "& .MuiInputBase-root": {
                      height: "56px",
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      borderRadius: "0px 0px 0px 0px",
                      fontSize: "14px",
                    },
                    "& .MuiInputBase-input": { color: "rgba(0, 0, 0, 0.87)" },
                  }}
                />
              </div>
              <div className="row-1">
                <div className="cell-11">
                  <div className="height1">
                    <div className="checkbox2">
                      <div className="padding2">
                        <input className="hidden2" type="checkbox" />
                      </div>
                    </div>
                  </div>
                  <div className="box8">
                    <div className="typography12">
                      <div className="body211">Cell</div>
                    </div>
                    <div className="typography13">
                      <div className="body212">Typography</div>
                    </div>
                  </div>
                </div>
                <div className="cell-21">
                  <div className="box9">
                    <div className="typography14">
                      <div className="body213">Cell</div>
                    </div>
                    <div className="typography15">
                      <div className="body214">Typography</div>
                    </div>
                  </div>
                </div>
                <div className="cell-31">
                  <div className="box10">
                    <div className="typography16">
                      <div className="body215">Cell</div>
                    </div>
                    <div className="typography17">
                      <div className="body216">Typography</div>
                    </div>
                  </div>
                </div>
                <div className="cell-41">
                  <div className="box11">
                    <div className="typography18">
                      <div className="body217">Cell</div>
                    </div>
                    <div className="typography19">
                      <div className="body218">Typography</div>
                    </div>
                  </div>
                </div>
                <div className="cell-51">
                  <div className="box12">
                    <div className="typography20">
                      <div className="body219">Cell</div>
                    </div>
                    <div className="typography21">
                      <div className="body220">Typography</div>
                    </div>
                  </div>
                </div>
                <div className="cell-61">
                  <div className="box13">
                    <div className="typography22">
                      <div className="body221">Cell</div>
                    </div>
                    <div className="typography23">
                      <div className="body222">Typography</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row-2">
                <div className="cell-12">
                  <div className="height2">
                    <div className="checkbox3">
                      <div className="padding3">
                        <input className="hidden3" type="checkbox" />
                      </div>
                    </div>
                  </div>
                  <div className="box14">
                    <div className="typography24">
                      <div className="body223">Cell</div>
                    </div>
                    <div className="typography25">
                      <div className="body224">Typography</div>
                    </div>
                  </div>
                </div>
                <div className="cell-22">
                  <div className="box15">
                    <div className="typography26">
                      <div className="body225">Cell</div>
                    </div>
                    <div className="typography27">
                      <div className="body226">Typography</div>
                    </div>
                  </div>
                </div>
                <div className="cell-32">
                  <div className="box16">
                    <div className="typography28">
                      <div className="body227">Cell</div>
                    </div>
                    <div className="typography29">
                      <div className="body228">Typography</div>
                    </div>
                  </div>
                </div>
                <div className="cell-42">
                  <div className="box17">
                    <div className="typography30">
                      <div className="body229">Cell</div>
                    </div>
                    <div className="typography31">
                      <div className="body230">Typography</div>
                    </div>
                  </div>
                </div>
                <div className="cell-52">
                  <div className="box18">
                    <div className="typography32">
                      <div className="body231">Cell</div>
                    </div>
                    <div className="typography33">
                      <div className="body232">Typography</div>
                    </div>
                  </div>
                </div>
                <div className="cell-62">
                  <div className="box19">
                    <div className="typography34">
                      <div className="body233">Mr. Umata</div>
                    </div>
                    <div className="typography35">
                      <div className="body234">Typography</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row-3">
                <div className="cell-13">
                  <div className="height3">
                    <div className="checkbox4">
                      <div className="padding4">
                        <img
                          className="hidden-icon"
                          alt=""
                          src="/-hidden-3.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="box20">
                    <div className="typography36">
                      <div className="body235">Cell</div>
                    </div>
                    <div className="typography37">
                      <div className="body236">Typography</div>
                    </div>
                  </div>
                </div>
                <div className="cell-23">
                  <div className="box21">
                    <div className="typography38">
                      <div className="body237">Cell</div>
                    </div>
                    <div className="typography39">
                      <div className="body238">Typography</div>
                    </div>
                  </div>
                </div>
                <div className="cell-33">
                  <div className="box22">
                    <div className="typography40">
                      <div className="body239">Cell</div>
                    </div>
                    <div className="typography41">
                      <div className="body240">Typography</div>
                    </div>
                  </div>
                </div>
                <div className="cell-43">
                  <div className="box23">
                    <div className="typography42">
                      <div className="body241">Cell</div>
                    </div>
                    <div className="typography43">
                      <div className="body242">Typography</div>
                    </div>
                  </div>
                </div>
                <div className="cell-53">
                  <div className="box24">
                    <div className="typography44">
                      <div className="body243">Cell</div>
                    </div>
                    <div className="typography45">
                      <div className="body244">Typography</div>
                    </div>
                  </div>
                </div>
                <div className="cell-63">
                  <div className="box25">
                    <div className="typography46">
                      <div className="body245">Cell</div>
                    </div>
                    <div className="typography47">
                      <div className="body246">Typography</div>
                    </div>
                  </div>
                </div>
              </div>
              <Row chip="Pandding" body2="MrKamal" />
              <Row
                chip="Approwed"
                body2="Cell"
                propBackgroundColor="#2e7d32"
                propBackgroundColor1="#1b5e20"
                propPadding="var(--padding-10xs) var(--padding-8xs)"
                propAlignSelf="unset"
                propWidth="75px"
              />
              <div className="tablecellrow">
                <div className="cell-14">
                  <div className="height4">
                    <div className="checkbox5">
                      <div className="padding5">
                        <input className="hidden4" type="checkbox" />
                      </div>
                    </div>
                  </div>
                  <div className="box26">
                    <div className="typography48">
                      <div className="body247">Cell</div>
                    </div>
                    <div className="typography49">
                      <div className="body248">Typography</div>
                    </div>
                  </div>
                </div>
                <div className="cell-24">
                  <div className="box27">
                    <div className="typography50">
                      <div className="body249">Cell</div>
                    </div>
                    <div className="typography51">
                      <div className="body250">Typography</div>
                    </div>
                  </div>
                </div>
                <div className="cell-3-container">
                  <div className="cell-34">
                    <div className="box28">
                      <div className="typography52">
                        <div className="body251">Cell</div>
                      </div>
                      <div className="typography53">
                        <div className="body252">Typography</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cell-44">
                  <div className="box29">
                    <div className="typography54">
                      <div className="body253">Cell</div>
                    </div>
                    <div className="typography55">
                      <div className="body254">Typography</div>
                    </div>
                  </div>
                </div>
                <div className="cell-54">
                  <div className="box30">
                    <div className="typography56">
                      <div className="body255">Cell</div>
                    </div>
                    <div className="typography57">
                      <div className="body256">Typography</div>
                    </div>
                  </div>
                </div>
                <div className="cell-6-container">
                  <div className="cell-64">
                    <div className="box31">
                      <div className="typography58">
                        <div className="body257">Cell</div>
                      </div>
                      <div className="typography59">
                        <div className="body258">Typography</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tablecellrow1">
                <div className="cell-15">
                  <div className="height5">
                    <div className="checkbox6">
                      <div className="padding6">
                        <input className="hidden5" type="checkbox" />
                      </div>
                    </div>
                  </div>
                  <div className="box32">
                    <div className="typography60">
                      <div className="body259">Cell</div>
                    </div>
                    <div className="typography61">
                      <div className="body260">Typography</div>
                    </div>
                  </div>
                </div>
                <div className="cell-25">
                  <div className="box33">
                    <div className="typography62">
                      <div className="body261">Cell</div>
                    </div>
                    <div className="typography63">
                      <div className="body262">Typography</div>
                    </div>
                  </div>
                </div>
                <div className="cell-3-frame">
                  <div className="cell-35">
                    <div className="box34">
                      <div className="typography64">
                        <div className="body263">Cell</div>
                      </div>
                      <div className="typography65">
                        <div className="body264">Typography</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cell-45">
                  <div className="box35">
                    <div className="typography66">
                      <div className="body265">Cell</div>
                    </div>
                    <div className="typography67">
                      <div className="body266">Typography</div>
                    </div>
                  </div>
                </div>
                <div className="cell-55">
                  <div className="box36">
                    <div className="typography68">
                      <div className="body267">Cell</div>
                    </div>
                    <div className="typography69">
                      <div className="body268">Typography</div>
                    </div>
                  </div>
                </div>
                <div className="cell-6-frame">
                  <div className="cell-65">
                    <div className="box37">
                      <div className="typography70">
                        <div className="body269">Cell</div>
                      </div>
                      <div className="typography71">
                        <div className="body270">Typography</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tablecellrow2">
                <div className="cell-16">
                  <div className="height6">
                    <div className="checkbox7">
                      <div className="padding7">
                        <input className="hidden6" type="checkbox" />
                      </div>
                    </div>
                  </div>
                  <div className="box38">
                    <div className="typography72">
                      <div className="body271">Cell</div>
                    </div>
                    <div className="typography73">
                      <div className="body272">Typography</div>
                    </div>
                  </div>
                </div>
                <div className="cell-26">
                  <div className="box39">
                    <div className="typography74">
                      <div className="body273">Cell</div>
                    </div>
                    <div className="typography75">
                      <div className="body274">Typography</div>
                    </div>
                  </div>
                </div>
                <div className="frame-div">
                  <div className="cell-36">
                    <div className="box40">
                      <div className="typography76">
                        <div className="body275">Cell</div>
                      </div>
                      <div className="typography77">
                        <div className="body276">Typography</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cell-46">
                  <div className="box41">
                    <div className="typography78">
                      <div className="body277">Cell</div>
                    </div>
                    <div className="typography79">
                      <div className="body278">Typography</div>
                    </div>
                  </div>
                </div>
                <div className="cell-56">
                  <div className="box42">
                    <div className="typography80">
                      <div className="body279">Cell</div>
                    </div>
                    <div className="typography81">
                      <div className="body280">Typography</div>
                    </div>
                  </div>
                </div>
                <div className="cell-6-wrapper1">
                  <div className="cell-66">
                    <div className="box43">
                      <div className="typography82">
                        <div className="body281">Cell</div>
                      </div>
                      <div className="typography83">
                        <div className="body282">Typography</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tablecellrow3">
                <div className="cell-17">
                  <div className="height7">
                    <div className="checkbox8">
                      <div className="padding8">
                        <input className="hidden7" type="checkbox" />
                      </div>
                    </div>
                  </div>
                  <div className="box44">
                    <div className="typography84">
                      <div className="body283">Cell</div>
                    </div>
                    <div className="typography85">
                      <div className="body284">Typography</div>
                    </div>
                  </div>
                </div>
                <div className="cell-27">
                  <div className="box45">
                    <div className="typography86">
                      <div className="body285">Cell</div>
                    </div>
                    <div className="typography87">
                      <div className="body286">Typography</div>
                    </div>
                  </div>
                </div>
                <div className="cell-3-wrapper1">
                  <div className="cell-37">
                    <div className="box46">
                      <div className="typography88">
                        <div className="body287">Cell</div>
                      </div>
                      <div className="typography89">
                        <div className="body288">Typography</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cell-47">
                  <div className="box47">
                    <div className="typography90">
                      <div className="body289">Cell</div>
                    </div>
                    <div className="typography91">
                      <div className="body290">Typography</div>
                    </div>
                  </div>
                </div>
                <div className="cell-57">
                  <div className="box48">
                    <div className="typography92">
                      <div className="body291">Cell</div>
                    </div>
                    <div className="typography93">
                      <div className="body292">Typography</div>
                    </div>
                  </div>
                </div>
                <div className="cell-6-wrapper2">
                  <div className="cell-67">
                    <div className="box49">
                      <div className="typography94">
                        <div className="body293">Cell</div>
                      </div>
                      <div className="typography95">
                        <div className="body294">Typography</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tablecellrow4">
                <div className="cell-18">
                  <div className="height8">
                    <div className="checkbox9">
                      <div className="padding9">
                        <input className="hidden8" type="checkbox" />
                      </div>
                    </div>
                  </div>
                  <div className="box50">
                    <div className="typography96">
                      <div className="body295">Cell</div>
                    </div>
                    <div className="typography97">
                      <div className="body296">Typography</div>
                    </div>
                  </div>
                </div>
                <div className="cell-28">
                  <div className="box51">
                    <div className="typography98">
                      <div className="body297">Cell</div>
                    </div>
                    <div className="typography99">
                      <div className="body298">Typography</div>
                    </div>
                  </div>
                </div>
                <div className="cell-3-wrapper2">
                  <div className="cell-38">
                    <div className="box52">
                      <div className="typography100">
                        <div className="body299">Cell</div>
                      </div>
                      <div className="typography101">
                        <div className="body2100">Typography</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cell-48">
                  <div className="box53">
                    <div className="typography102">
                      <div className="body2101">Cell</div>
                    </div>
                    <div className="typography103">
                      <div className="body2102">Typography</div>
                    </div>
                  </div>
                </div>
                <div className="cell-58">
                  <div className="box54">
                    <div className="typography104">
                      <div className="body2103">Cell</div>
                    </div>
                    <div className="typography105">
                      <div className="body2104">Typography</div>
                    </div>
                  </div>
                </div>
                <div className="cell-6-wrapper3">
                  <div className="cell-68">
                    <div className="box55">
                      <div className="typography106">
                        <div className="body2105">Cell</div>
                      </div>
                      <div className="typography107">
                        <div className="body2106">Typography</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tablefooter">
                <div className="container15">
                  <div className="rows-per-page">Rows per page:</div>
                  <FormControl
                    className="page"
                    variant="standard"
                    sx={{
                      borderTopWidth: "0px",
                      borderRightWidth: "0px",
                      borderBottomWidth: "0px",
                      borderLeftWidth: "0px",
                      borderRadius: "0px 0px 0px 0px",
                      width: "38px",
                      height: "24px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "24px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "24px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "24px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "24px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        color: "rgba(0, 0, 0, 0.87)",
                        fontSize: 12,
                        fontWeight: "Regular",
                        fontFamily: "Roboto",
                        textAlign: "left",
                        p: "0 !important",
                      },
                    }}
                  >
                    <InputLabel color="primary" />
                    <Select
                      color="primary"
                      disableUnderline
                      displayEmpty
                      IconComponent={() => (
                        <img
                          width="24px"
                          height="24px"
                          src="/arrowdropdownfilled-1.svg"
                          style={{}}
                        />
                      )}
                    >
                      <MenuItem>10</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                </div>
                <div className="of-100">1-5 of 13</div>
                <div className="navigation">
                  <div className="iconbutton12">
                    <div className="icon37">
                      <img
                        className="starsharp-icon25"
                        alt=""
                        src="/starsharp.svg"
                      />
                    </div>
                  </div>
                  <div className="iconbutton13">
                    <div className="icon38">
                      <img
                        className="starsharp-icon26"
                        alt=""
                        src="/starsharp.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Minheight;
