import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Button,
} from "@mui/material";
import DesktopDatePicker from "./DesktopDatePicker";
import "./comCss/Property1Default.css";

const Property1Default = () => {
  return (
    <div className="property-1default">
      <div className="march">
        <div className="custom-sidenav1">
          <div className="spacing-vertical11">
            <div className="min-height25" />
          </div>
          <div className="logo1">
            <div className="spacing-horizontal5">
              <div className="frame2">
                <div className="spacer5" />
              </div>
            </div>
            <div className="library-logo-placeholder1">
              <img className="shape-icon1" alt="" src="/shape.svg" />
            </div>
            <div className="spacing-horizontal6">
              <div className="frame3">
                <div className="spacer6" />
              </div>
            </div>
          </div>
          <div className="spacing-vertical12">
            <div className="min-height26" />
          </div>
          <TextField
            className="box56"
            placeholder="Placeholder"
            variant="outlined"
            sx={{
              "& fieldset": { border: "none" },
              "& .MuiInputBase-root": {
                height: "40px",
                borderRadius: "0px 0px 0px 0px",
              },
              "& .MuiInputBase-input": { color: "rgba(0, 0, 0, 0.38)" },
            }}
          />
          <div className="spacing-vertical13">
            <div className="min-height27" />
          </div>
          <div className="ul1">
            <div className="custom-expandable-nav-item3">
              <div className="listitem14">
                <div className="container21">
                  <div className="left-content13">
                    <div className="icon42">
                      <img
                        className="starsharp-icon27"
                        alt=""
                        src="/starsharp.svg"
                      />
                    </div>
                  </div>
                  <div className="listitem-text13">
                    <div className="list-item16">Paraent List</div>
                    <div className="secondary13">Secondary</div>
                  </div>
                  <div className="right-action3">
                    <div className="icon43">
                      <img
                        className="expandmorefilled-icon1"
                        alt=""
                        src="/expandmorefilled.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="divider-horizontal14">
                  <div className="min-height28" />
                  <div className="divider14" />
                </div>
              </div>
            </div>
            <div className="custom-expandable-nav-item4">
              <div className="listitem15">
                <div className="container22">
                  <div className="left-content14">
                    <div className="icon44">
                      <img
                        className="starsharp-icon28"
                        alt=""
                        src="/starsharp.svg"
                      />
                    </div>
                  </div>
                  <div className="listitem-text14">
                    <div className="list-item17">Child List</div>
                    <div className="secondary14">Secondary</div>
                  </div>
                  <div className="right-action4">
                    <div className="icon45">
                      <img
                        className="expandmorefilled-icon2"
                        alt=""
                        src="/expandmorefilled.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="divider-horizontal15">
                  <div className="min-height29" />
                  <div className="divider15" />
                </div>
              </div>
            </div>
            <div className="custom-expandable-nav-item5">
              <div className="listitem16">
                <div className="container23">
                  <div className="left-content15">
                    <div className="icon46">
                      <img
                        className="starsharp-icon29"
                        alt=""
                        src="/starsharp.svg"
                      />
                    </div>
                  </div>
                  <div className="listitem-text15">
                    <div className="list-item18">About</div>
                    <div className="secondary15">Secondary</div>
                  </div>
                  <div className="right-action5">
                    <div className="icon47">
                      <img
                        className="expandmorefilled-icon3"
                        alt=""
                        src="/expandmorefilled.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="divider-horizontal16">
                  <div className="min-height30" />
                  <div className="divider16" />
                </div>
              </div>
            </div>
            <div className="listitem17">
              <div className="container24">
                <div className="left-content16">
                  <div className="icon48">
                    <img
                      className="starsharp-icon30"
                      alt=""
                      src="/starsharp.svg"
                    />
                  </div>
                </div>
                <div className="listitem-text16">
                  <div className="list-item19">List item</div>
                  <div className="secondary16">Secondary</div>
                </div>
                <div className="iconbutton17">
                  <div className="icon49">
                    <img
                      className="starsharp-icon31"
                      alt=""
                      src="/starsharp.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="divider-horizontal17">
                <div className="min-height31" />
                <div className="divider17" />
              </div>
            </div>
            <div className="listitem18">
              <div className="container25">
                <div className="left-content17">
                  <div className="icon50">
                    <img
                      className="starsharp-icon32"
                      alt=""
                      src="/starsharp.svg"
                    />
                  </div>
                </div>
                <div className="listitem-text17">
                  <div className="list-item20">List item</div>
                  <div className="secondary17">Secondary</div>
                </div>
                <div className="iconbutton18">
                  <div className="icon51">
                    <img
                      className="starsharp-icon33"
                      alt=""
                      src="/starsharp.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="divider-horizontal18">
                <div className="min-height32" />
                <div className="divider18" />
              </div>
            </div>
            <div className="listitem19">
              <div className="container26">
                <div className="left-content18">
                  <div className="icon52">
                    <img
                      className="starsharp-icon34"
                      alt=""
                      src="/starsharp.svg"
                    />
                  </div>
                </div>
                <div className="listitem-text18">
                  <div className="list-item21">List item</div>
                  <div className="secondary18">Secondary</div>
                </div>
                <div className="iconbutton19">
                  <div className="icon53">
                    <img
                      className="starsharp-icon35"
                      alt=""
                      src="/starsharp.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="divider-horizontal19">
                <div className="min-height33" />
                <div className="divider19" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container27">
        <div className="custom-page-heading1">
          <div className="box57">
            <div className="title-and-contents1">
              <div className="breadcrumbs1">
                <div className="link6">
                  <div className="icon54">
                    <img
                      className="homefilled-icon1"
                      alt=""
                      src="/homefilled.svg"
                    />
                  </div>
                  <div className="link7">
                    <div className="link8">Home</div>
                  </div>
                </div>
                <div className="separator2">
                  <div className="div26">/</div>
                </div>
                <img
                  className="breadcrumb-collapsed1"
                  alt=""
                  src="/breadcrumb--collapsed.svg"
                />
                <div className="separator3">
                  <div className="div27">/</div>
                </div>
                <div className="link9">
                  <div className="icon55">
                    <img
                      className="starsharp-icon36"
                      alt=""
                      src="/starsharp-26.svg"
                    />
                  </div>
                  <div className="link10">
                    <div className="link11">Users</div>
                  </div>
                </div>
              </div>
              <h1 className="page-header1">Child Collection</h1>
              <div className="stack2">
                <div className="instance-12">
                  <div className="instance-slot2">Instance Slot</div>
                </div>
              </div>
            </div>
            <div className="spacing-horizontal7">
              <div className="cell-stack">
                <div className="spacer7" />
              </div>
            </div>
            <div className="stack3">
              <div className="instance-13">
                <div className="instance-slot3">Instance Slot</div>
              </div>
            </div>
          </div>
          <div className="spacing-vertical14">
            <div className="min-height34" />
          </div>
          <div className="divider-horizontal20">
            <div className="min-height35" />
            <div className="divider20" />
          </div>
        </div>
        <div className="card4">
          <div className="paper4">
            <div className="custom-users-management-tabl1">
              <div className="custom-table-toolbar1">
                <div className="queries1">
                  <div className="textfield2">
                    <div className="input8">
                      <input
                        className="content3"
                        placeholder="Name, email, etc..."
                        type="text"
                      />
                      <div className="label-container3">
                        <div className="label6">Search</div>
                      </div>
                    </div>
                    <div className="formhelpertext3">
                      <div className="helper-text3">Helper text</div>
                    </div>
                  </div>
                  <div className="select1">
                    <div className="input9">
                      <div className="footer-b-g">
                        <div className="label-container4">
                          <div className="label7">Attribute</div>
                        </div>
                      </div>
                      <FormControl
                        className="container28"
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
                          <MenuItem>Property</MenuItem>
                        </Select>
                        <FormHelperText />
                      </FormControl>
                    </div>
                    <div className="formhelpertext4">
                      <div className="helper-text4">Helper text</div>
                    </div>
                  </div>
                  <div className="iconbutton20">
                    <div className="icon56">
                      <img
                        className="filteraltfilled-icon1"
                        alt=""
                        src="/filteraltfilled.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="actions1">
                  <Button
                    className="button11"
                    disableElevation={true}
                    variant="outlined"
                    sx={{
                      color: "rgba(0, 0, 0, 0.87)",
                      fontSize: "14",
                      borderColor: "rgba(0, 0, 0, 0.87)",
                      borderRadius: "4px",
                      "&:hover": { borderColor: "rgba(0, 0, 0, 0.87)" },
                      height: 36,
                    }}
                  >
                    UPDATE
                  </Button>
                  <Button
                    className="button12"
                    variant="contained"
                    sx={{
                      color: "#fff",
                      fontSize: "14",
                      background: "#2196f3",
                      borderRadius: "4px",
                      "&:hover": { background: "#2196f3" },
                      width: 67,
                      height: 36,
                    }}
                  >
                    VIEW
                  </Button>
                  <div className="iconbutton21">
                    <div className="icon57">
                      <img
                        className="settingsfilled-icon1"
                        alt=""
                        src="/settingsfilled.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="table1">
                <div className="tableheadrow1">
                  <Button
                    className="tablehead6"
                    startIcon={
                      <img width="24px" height="24px" src="/-hidden.svg" />
                    }
                    disableElevation={true}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "rgba(0, 0, 0, 0.87)",
                      fontSize: "14",
                      background: "rgba(0, 0, 0, 0)",
                      borderRadius: "0px 0px 0px 0px",
                      "&:hover": { background: "rgba(0, 0, 0, 0)" },
                      height: 56,
                    }}
                  >
                    Child Name
                  </Button>
                  <div className="tablehead7">
                    <div className="mask3">
                      <img
                        className="arrowdownwardfilled-icon2"
                        alt=""
                        src="/arrowdownwardfilled.svg"
                      />
                    </div>
                    <div className="head1">Email</div>
                    <div className="mask4">
                      <img
                        className="arrowdownwardfilled-icon3"
                        alt=""
                        src="/arrowdownwardfilled.svg"
                      />
                    </div>
                  </div>
                  <div className="tablehead8">
                    <div className="mask5">
                      <img
                        className="arrowdownwardfilled-icon4"
                        alt=""
                        src="/arrowdownwardfilled.svg"
                      />
                    </div>
                    <div className="head2">Location</div>
                    <div className="mask6">
                      <img
                        className="arrowdownwardfilled-icon5"
                        alt=""
                        src="/arrowdownwardfilled.svg"
                      />
                    </div>
                  </div>
                  <div className="tablehead9">
                    <div className="mask7">
                      <img
                        className="arrowdownwardfilled-icon6"
                        alt=""
                        src="/arrowdownwardfilled.svg"
                      />
                    </div>
                    <div className="head3">Mother/Gardian name</div>
                    <div className="mask8">
                      <img
                        className="arrowdownwardfilled-icon7"
                        alt=""
                        src="/arrowdownwardfilled.svg"
                      />
                    </div>
                  </div>
                  <TextField
                    className="tablehead10"
                    placeholder="    ID"
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
                  <div className="tablehead11">
                    <div className="mask9">
                      <img
                        className="arrowdownwardfilled-icon8"
                        alt=""
                        src="/arrowdownwardfilled.svg"
                      />
                    </div>
                    <div className="head4">Head</div>
                    <div className="mask10">
                      <img
                        className="arrowdownwardfilled-icon9"
                        alt=""
                        src="/arrowdownwardfilled.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="row-11">
                  <div className="cell-19">
                    <div className="height9">
                      <div className="checkbox10">
                        <div className="padding10">
                          <input className="hidden9" type="checkbox" />
                        </div>
                      </div>
                    </div>
                    <div className="box58">
                      <div className="custom-table-custom-cell">
                        <div className="avatar4">
                          <div className="border4">
                            <div className="badge4">
                              <div className="min-width8" />
                            </div>
                          </div>
                        </div>
                        <div className="xin-yue">Prabodhan Fitzgerald</div>
                      </div>
                      <div className="typography108">
                        <div className="body2107">Typography</div>
                      </div>
                    </div>
                  </div>
                  <div className="cell-29">
                    <div className="box59">
                      <div className="typography109">
                        <div className="body2108">Cell</div>
                      </div>
                      <div className="typography110">
                        <div className="body2109">Typography</div>
                      </div>
                    </div>
                  </div>
                  <div className="cell-39">
                    <div className="box60">
                      <div className="stack4">
                        <div className="instance-14">
                          <img
                            className="locationonfilled-icon"
                            alt=""
                            src="/locationonfilled.svg"
                          />
                        </div>
                        <div className="instance-2">
                          <div className="body2110">Izaiahport</div>
                        </div>
                      </div>
                      <div className="typography111">
                        <div className="body2111">Typography</div>
                      </div>
                    </div>
                  </div>
                  <div className="cell-49">
                    <div className="box61">
                      <div className="chip2">
                        <div className="avatar5">
                          <div className="border5">
                            <div className="badge5">
                              <div className="min-width9" />
                            </div>
                          </div>
                          <div className="op4">OP</div>
                          <div className="min-width10" />
                        </div>
                        <div className="typography112">
                          <div className="chip3">Active</div>
                        </div>
                        <img
                          className="cancelfilled-icon1"
                          alt=""
                          src="/cancelfilled.svg"
                        />
                      </div>
                      <div className="typography113">
                        <div className="body2112">Typography</div>
                      </div>
                    </div>
                  </div>
                  <div className="cell-59">
                    <div className="box62">
                      <div className="typography114">
                        <div className="body2113">Cell</div>
                      </div>
                      <div className="typography115">
                        <div className="body2114">Typography</div>
                      </div>
                    </div>
                  </div>
                  <div className="cell-69">
                    <div className="box63">
                      <div className="typography116">
                        <div className="body2115">Cell</div>
                      </div>
                      <div className="typography117">
                        <div className="body2116">Typography</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row-21">
                  <div className="cell-110">
                    <div className="height10">
                      <div className="checkbox11">
                        <div className="padding11">
                          <input className="hidden10" type="checkbox" />
                        </div>
                      </div>
                    </div>
                    <div className="box64">
                      <div className="custom-table-custom-cell1">
                        <div className="avatar6">
                          <div className="border6">
                            <div className="badge6">
                              <div className="min-width11" />
                            </div>
                          </div>
                        </div>
                        <div className="xin-yue1">Hiro Joyce</div>
                      </div>
                      <div className="typography118">
                        <div className="body2117">Typography</div>
                      </div>
                    </div>
                  </div>
                  <div className="cell-210">
                    <div className="box65">
                      <div className="typography119">
                        <div className="body2118">Cell</div>
                      </div>
                      <div className="typography120">
                        <div className="body2119">Typography</div>
                      </div>
                    </div>
                  </div>
                  <div className="cell-310">
                    <div className="box66">
                      <div className="stack5">
                        <div className="instance-15">
                          <div className="instance-slot4">Instance Slot</div>
                        </div>
                        <div className="instance-21">
                          <div className="instance-slot5">Instance Slot</div>
                        </div>
                      </div>
                      <div className="typography121">
                        <div className="body2120">Typography</div>
                      </div>
                    </div>
                  </div>
                  <div className="cell-410">
                    <div className="box67">
                      <div className="chip4">
                        <div className="avatar7">
                          <div className="border7">
                            <div className="badge7">
                              <div className="min-width12" />
                            </div>
                          </div>
                          <div className="op5">OP</div>
                          <div className="min-width13" />
                        </div>
                        <div className="typography122">
                          <div className="chip5">Active</div>
                        </div>
                        <img
                          className="cancelfilled-icon2"
                          alt=""
                          src="/cancelfilled.svg"
                        />
                      </div>
                      <div className="typography123">
                        <div className="body2121">Typography</div>
                      </div>
                    </div>
                  </div>
                  <div className="cell-510">
                    <div className="box68">
                      <div className="typography124">
                        <div className="body2122">Cell</div>
                      </div>
                      <div className="typography125">
                        <div className="body2123">Typography</div>
                      </div>
                    </div>
                  </div>
                  <div className="cell-610">
                    <div className="box69">
                      <div className="typography126">
                        <div className="body2124">Cell</div>
                      </div>
                      <div className="typography127">
                        <div className="body2125">Typography</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row-31">
                  <div className="c-t-a-container">
                    <button className="cell-111">
                      <div className="height11">
                        <div className="checkbox12">
                          <div className="padding12">
                            <input className="hidden11" type="checkbox" />
                          </div>
                        </div>
                      </div>
                      <div className="box70">
                        <div className="custom-table-custom-cell2">
                          <div className="avatar8">
                            <div className="border8">
                              <div className="badge8">
                                <div className="min-width14" />
                              </div>
                            </div>
                          </div>
                          <div className="xin-yue2">Lloyd Jefferson</div>
                        </div>
                        <div className="typography128">
                          <div className="body2126">Typography</div>
                        </div>
                      </div>
                    </button>
                    <div className="cell-211">
                      <div className="box71">
                        <div className="typography129">
                          <div className="body2127">Cell</div>
                        </div>
                        <div className="typography130">
                          <div className="body2128">Typography</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cell-311">
                    <div className="box72">
                      <div className="stack6">
                        <div className="instance-16">
                          <img className="locationonfilled-icon1" alt="" />
                        </div>
                        <div className="typography131">
                          <div className="body2129">Kandy</div>
                        </div>
                      </div>
                      <div className="typography132">
                        <div className="body2130">Typography</div>
                      </div>
                    </div>
                  </div>
                  <div className="table-footer-frame">
                    <TextField
                      className="cell-411"
                      placeholder="Kamala Dissanayake"
                      variant="outlined"
                      sx={{
                        "& fieldset": { border: "none" },
                        "& .MuiInputBase-root": {
                          height: "57px",
                          backgroundColor: "rgba(0, 0, 0, 0)",
                          borderRadius: "0px 0px 0px 0px",
                          fontSize: "14px",
                        },
                        "& .MuiInputBase-input": {
                          color: "rgba(0, 0, 0, 0.87)",
                        },
                        width: "152px",
                      }}
                    />
                    <div className="cell-511">
                      <div className="box73">
                        <div className="typography133">
                          <div className="body2131">2004235254252</div>
                        </div>
                        <div className="typography134">
                          <div className="body2132">Typography</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cell-611">
                    <div className="box74">
                      <div className="typography135">
                        <div className="body2133">Cell</div>
                      </div>
                      <div className="typography136">
                        <div className="body2134">Typography</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row-41">
                  <div className="cell-112">
                    <div className="height12">
                      <div className="checkbox13">
                        <div className="padding13">
                          <input className="hidden12" type="checkbox" />
                        </div>
                      </div>
                    </div>
                    <div className="box75">
                      <div className="custom-table-custom-cell3">
                        <div className="avatar9">
                          <div className="border9">
                            <div className="badge9">
                              <div className="min-width15" />
                            </div>
                          </div>
                        </div>
                        <div className="xin-yue3">Ceiran Mayo</div>
                      </div>
                      <div className="typography137">
                        <div className="body2135">Typography</div>
                      </div>
                    </div>
                  </div>
                  <div className="cell-212">
                    <div className="box76">
                      <div className="typography138">
                        <div className="body2136">Cell</div>
                      </div>
                      <div className="typography139">
                        <div className="body2137">Typography</div>
                      </div>
                    </div>
                  </div>
                  <div className="cell-312">
                    <div className="box77">
                      <div className="stack7">
                        <div className="instance-17">
                          <img
                            className="locationonfilled-icon2"
                            alt=""
                            src="/locationonfilled.svg"
                          />
                        </div>
                        <div className="instance-22">
                          <div className="body2138">Lake Esmeralda</div>
                        </div>
                      </div>
                      <div className="typography140">
                        <div className="body2139">Typography</div>
                      </div>
                    </div>
                  </div>
                  <div className="cell-412">
                    <div className="box78">
                      <div className="chip6">
                        <div className="avatar10">
                          <div className="border10">
                            <div className="badge10">
                              <div className="min-width16" />
                            </div>
                          </div>
                          <div className="op6">OP</div>
                          <div className="min-width17" />
                        </div>
                        <div className="typography141">
                          <div className="chip7">Chip</div>
                        </div>
                        <img
                          className="cancelfilled-icon3"
                          alt=""
                          src="/cancelfilled.svg"
                        />
                      </div>
                      <div className="typography142">
                        <div className="body2140">Typography</div>
                      </div>
                    </div>
                  </div>
                  <div className="cell-512">
                    <div className="box79">
                      <div className="typography143">
                        <div className="body2141">Cell</div>
                      </div>
                      <div className="typography144">
                        <div className="body2142">Typography</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row-5">
                  <div className="cell-113">
                    <div className="height13">
                      <div className="checkbox14">
                        <div className="padding14">
                          <input className="hidden13" type="checkbox" />
                        </div>
                      </div>
                    </div>
                    <div className="box80">
                      <div className="custom-table-custom-cell4">
                        <div className="avatar11">
                          <div className="border11">
                            <div className="badge11">
                              <div className="min-width18" />
                            </div>
                          </div>
                        </div>
                        <div className="xin-yue4">Thumbiko James</div>
                      </div>
                      <div className="typography145">
                        <div className="body2143">Typography</div>
                      </div>
                    </div>
                  </div>
                  <div className="cell-213">
                    <div className="box81">
                      <div className="typography146">
                        <div className="body2144">Cell</div>
                      </div>
                      <div className="typography147">
                        <div className="body2145">Typography</div>
                      </div>
                    </div>
                  </div>
                  <div className="cell-313">
                    <div className="box82">
                      <div className="stack8">
                        <div className="instance-18">
                          <img
                            className="locationonfilled-icon3"
                            alt=""
                            src="/locationonfilled.svg"
                          />
                        </div>
                        <div className="instance-23">
                          <div className="body2146">East Paige</div>
                        </div>
                      </div>
                      <div className="typography148">
                        <div className="body2147">Typography</div>
                      </div>
                    </div>
                  </div>
                  <div className="cell-413">
                    <div className="box83">
                      <div className="chip8">
                        <div className="avatar12">
                          <div className="border12">
                            <div className="badge12">
                              <div className="min-width19" />
                            </div>
                          </div>
                          <div className="op7">OP</div>
                          <div className="min-width20" />
                        </div>
                        <div className="typography149">
                          <div className="chip9">Chip</div>
                        </div>
                        <img
                          className="cancelfilled-icon4"
                          alt=""
                          src="/cancelfilled.svg"
                        />
                      </div>
                      <div className="typography150">
                        <div className="body2148">Typography</div>
                      </div>
                    </div>
                  </div>
                  <div className="cell-513">
                    <div className="box84">
                      <div className="typography151">
                        <div className="body2149">Cell</div>
                      </div>
                      <div className="typography152">
                        <div className="body2150">Typography</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row-6">
                  <div className="cell-114">
                    <div className="height14">
                      <div className="checkbox15">
                        <div className="padding15">
                          <input className="hidden14" type="checkbox" />
                        </div>
                      </div>
                    </div>
                    <div className="box85">
                      <div className="typography153">
                        <div className="body2151">Cell</div>
                      </div>
                      <div className="typography154">
                        <div className="body2152">Typography</div>
                      </div>
                    </div>
                  </div>
                  <div className="cell-214">
                    <div className="box86">
                      <div className="typography155">
                        <div className="body2153">Cell</div>
                      </div>
                      <div className="typography156">
                        <div className="body2154">Typography</div>
                      </div>
                    </div>
                  </div>
                  <div className="cell-314">
                    <div className="box87">
                      <div className="typography157">
                        <div className="body2155">Cell</div>
                      </div>
                      <div className="typography158">
                        <div className="body2156">Typography</div>
                      </div>
                    </div>
                  </div>
                  <div className="cell-414">
                    <div className="box88">
                      <div className="typography159">
                        <div className="body2157">Cell</div>
                      </div>
                      <div className="typography160">
                        <div className="body2158">Typography</div>
                      </div>
                    </div>
                  </div>
                  <div className="cell-514">
                    <div className="box89">
                      <div className="typography161">
                        <div className="body2159">Cell</div>
                      </div>
                      <div className="typography162">
                        <div className="body2160">Typography</div>
                      </div>
                    </div>
                  </div>
                  <div className="cell-612">
                    <div className="box90">
                      <div className="typography163">
                        <div className="body2161">Cell</div>
                      </div>
                      <div className="typography164">
                        <div className="body2162">Typography</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row-7">
                  <div className="cell-115">
                    <div className="height15">
                      <div className="checkbox16">
                        <div className="padding16">
                          <input className="hidden15" type="checkbox" />
                        </div>
                      </div>
                    </div>
                    <div className="box91">
                      <div className="typography165">
                        <div className="body2163">Cell</div>
                      </div>
                      <div className="typography166">
                        <div className="body2164">Typography</div>
                      </div>
                    </div>
                  </div>
                  <div className="cell-215">
                    <div className="box92">
                      <div className="typography167">
                        <div className="body2165">Cell</div>
                      </div>
                      <div className="typography168">
                        <div className="body2166">Typography</div>
                      </div>
                    </div>
                  </div>
                  <div className="cell-315">
                    <div className="box93">
                      <div className="typography169">
                        <div className="body2167">Cell</div>
                      </div>
                      <div className="typography170">
                        <div className="body2168">Typography</div>
                      </div>
                    </div>
                  </div>
                  <div className="cell-415">
                    <div className="box94">
                      <div className="typography171">
                        <div className="body2169">Cell</div>
                      </div>
                      <div className="typography172">
                        <div className="body2170">Typography</div>
                      </div>
                    </div>
                  </div>
                  <div className="cell-515">
                    <div className="box95">
                      <div className="typography173">
                        <div className="body2171">Cell</div>
                      </div>
                      <div className="typography174">
                        <div className="body2172">Typography</div>
                      </div>
                    </div>
                  </div>
                  <div className="cell-613">
                    <div className="box96">
                      <div className="typography175">
                        <div className="body2173">Cell</div>
                      </div>
                      <div className="typography176">
                        <div className="body2174">Typography</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row-8">
                  <div className="cell-116">
                    <div className="height16">
                      <div className="checkbox17">
                        <div className="padding17">
                          <input className="hidden16" type="checkbox" />
                        </div>
                      </div>
                    </div>
                    <div className="box97">
                      <div className="typography177">
                        <div className="body2175">Cell</div>
                      </div>
                      <div className="typography178">
                        <div className="body2176">Typography</div>
                      </div>
                    </div>
                  </div>
                  <div className="cell-216">
                    <div className="box98">
                      <div className="typography179">
                        <div className="body2177">Cell</div>
                      </div>
                      <div className="typography180">
                        <div className="body2178">Typography</div>
                      </div>
                    </div>
                  </div>
                  <div className="cell-316">
                    <div className="box99">
                      <div className="typography181">
                        <div className="body2179">Cell</div>
                      </div>
                      <div className="typography182">
                        <div className="body2180">Typography</div>
                      </div>
                    </div>
                  </div>
                  <div className="cell-416">
                    <div className="box100">
                      <div className="typography183">
                        <div className="body2181">Cell</div>
                      </div>
                      <div className="typography184">
                        <div className="body2182">Typography</div>
                      </div>
                    </div>
                  </div>
                  <div className="cell-516">
                    <div className="box101">
                      <div className="typography185">
                        <div className="body2183">Cell</div>
                      </div>
                      <div className="typography186">
                        <div className="body2184">Typography</div>
                      </div>
                    </div>
                  </div>
                  <div className="cell-614">
                    <div className="box102">
                      <div className="typography187">
                        <div className="body2185">Cell</div>
                      </div>
                      <div className="typography188">
                        <div className="body2186">Typography</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row-9">
                  <div className="cell-117">
                    <div className="height17">
                      <div className="checkbox18">
                        <div className="padding18">
                          <input className="hidden17" type="checkbox" />
                        </div>
                      </div>
                    </div>
                    <div className="box103">
                      <div className="typography189">
                        <div className="body2187">Cell</div>
                      </div>
                      <div className="typography190">
                        <div className="body2188">Typography</div>
                      </div>
                    </div>
                  </div>
                  <div className="cell-217">
                    <div className="box104">
                      <div className="typography191">
                        <div className="body2189">Cell</div>
                      </div>
                      <div className="typography192">
                        <div className="body2190">Typography</div>
                      </div>
                    </div>
                  </div>
                  <div className="cell-317">
                    <div className="box105">
                      <div className="typography193">
                        <div className="body2191">Cell</div>
                      </div>
                      <div className="typography194">
                        <div className="body2192">Typography</div>
                      </div>
                    </div>
                  </div>
                  <div className="cell-417">
                    <div className="box106">
                      <div className="typography195">
                        <div className="body2193">Cell</div>
                      </div>
                      <div className="typography196">
                        <div className="body2194">Typography</div>
                      </div>
                    </div>
                  </div>
                  <div className="cell-517">
                    <div className="box107">
                      <div className="typography197">
                        <div className="body2195">Cell</div>
                      </div>
                      <div className="typography198">
                        <div className="body2196">Typography</div>
                      </div>
                    </div>
                  </div>
                  <div className="cell-615">
                    <div className="box108">
                      <div className="typography199">
                        <div className="body2197">Cell</div>
                      </div>
                      <div className="typography200">
                        <div className="body2198">Typography</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row-10">
                  <div className="cell-118">
                    <div className="height18">
                      <div className="checkbox19">
                        <div className="padding19">
                          <input className="hidden18" type="checkbox" />
                        </div>
                      </div>
                    </div>
                    <div className="box109">
                      <div className="typography201">
                        <div className="body2199">Cell</div>
                      </div>
                      <div className="typography202">
                        <div className="body2200">Typography</div>
                      </div>
                    </div>
                  </div>
                  <div className="cell-218">
                    <div className="box110">
                      <div className="typography203">
                        <div className="body2201">Cell</div>
                      </div>
                      <div className="typography204">
                        <div className="body2202">Typography</div>
                      </div>
                    </div>
                  </div>
                  <div className="cell-318">
                    <div className="box111">
                      <div className="typography205">
                        <div className="body2203">Cell</div>
                      </div>
                      <div className="typography206">
                        <div className="body2204">Typography</div>
                      </div>
                    </div>
                  </div>
                  <div className="cell-418">
                    <div className="box112">
                      <div className="typography207">
                        <div className="body2205">Cell</div>
                      </div>
                      <div className="typography208">
                        <div className="body2206">Typography</div>
                      </div>
                    </div>
                  </div>
                  <div className="cell-518">
                    <div className="box113">
                      <div className="typography209">
                        <div className="body2207">Cell</div>
                      </div>
                      <div className="typography210">
                        <div className="body2208">Typography</div>
                      </div>
                    </div>
                  </div>
                  <div className="cell-616">
                    <div className="box114">
                      <div className="typography211">
                        <div className="body2209">Cell</div>
                      </div>
                      <div className="typography212">
                        <div className="body2210">Typography</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tablefooter1">
                  <div className="container29">
                    <div className="rows-per-page1">Rows per page:</div>
                    <FormControl
                      className="page1"
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
                  <div className="of-1001">1-5 of 13</div>
                  <div className="navigation1">
                    <div className="iconbutton22">
                      <div className="icon58">
                        <img
                          className="starsharp-icon37"
                          alt=""
                          src="/starsharp.svg"
                        />
                      </div>
                    </div>
                    <div className="iconbutton23">
                      <div className="icon59">
                        <img
                          className="starsharp-icon38"
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
      <DesktopDatePicker
        propAlignSelf="unset"
        propPadding="unset"
        propHeight="356px"
        propWidth="278px"
        propGap="10px 0px"
        propAlignSelf1="unset"
        propPadding1="unset"
        propPadding2="0px var(--padding-6xs)"
        propPadding3="0px var(--padding-6xs)"
        propPadding4="0px var(--padding-6xs)"
        propPadding5="0px var(--padding-6xs)"
        propPadding6="0px var(--padding-6xs)"
      />
    </div>
  );
};

export default Property1Default;
