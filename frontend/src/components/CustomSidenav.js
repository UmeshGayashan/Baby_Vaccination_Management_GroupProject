import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./CustomSidenav.css";

const CustomSidenav = () => {
  const navigate = useNavigate();

  const onListItemClick = useCallback(() => {
    navigate("/vaccines");
  }, [navigate]);

  return (
    <div className="custom-sidenav">
      <div className="spacing-vertical">
        <div className="min-height" />
      </div>
      <div className="logo">
        <div className="spacing-horizontal">
          <div className="singleline-item">
            <div className="spacer" />
          </div>
        </div>
        <div className="library-logo-placeholder">
          <img className="shape-icon" loading="eager" alt="" src="/shape.svg" />
        </div>
        <div className="spacing-horizontal1">
          <div className="frame">
            <div className="spacer1" />
          </div>
        </div>
      </div>
      <div className="spacing-vertical1">
        <div className="min-height1" />
      </div>
      <div className="box">
        <div className="spacing-horizontal2">
          <div className="card-paper">
            <div className="spacer2" />
          </div>
        </div>
        <div className="custom-actions-slot">
          <div className="textfield">
            <div className="input4">
              <div className="content1">
                <div className="adorn-start-container">
                  <div className="icon6">
                    <img
                      className="starsharp-icon"
                      alt=""
                      src="/starsharp.svg"
                    />
                  </div>
                </div>
                <div className="value">Value</div>
                <div className="placeholder">Placeholder</div>
                <div className="adorn-end-container">
                  <img
                    className="removeredeyefilled-icon"
                    alt=""
                    src="/removeredeyefilled.svg"
                  />
                </div>
              </div>
              <div className="label-container">
                <div className="label">Label</div>
              </div>
            </div>
            <div className="formhelpertext">
              <div className="helper-text">Helper text</div>
            </div>
          </div>
          <div className="spacing-vertical2">
            <div className="min-height2" />
          </div>
          <div className="button3">
            <div className="base">
              <img className="masked-icon" alt="" src="/masked-icon.svg" />
              <div className="button4">Label</div>
              <img className="masked-icon1" alt="" src="/masked-icon.svg" />
            </div>
          </div>
        </div>
        <div className="spacing-horizontal3">
          <div className="frame1">
            <div className="spacer3" />
          </div>
        </div>
      </div>
      <div className="spacing-vertical3">
        <div className="min-height3" />
      </div>
      <div className="ul">
        <div className="custom-expandable-nav-item">
          <div className="listitem">
            <div className="container1">
              <div className="left-content">
                <div className="icon7">
                  <img
                    className="starsharp-icon1"
                    alt=""
                    src="/starsharp.svg"
                  />
                </div>
              </div>
              <div className="listitem-text">
                <div className="list-item3">Vaccinations</div>
                <div className="secondary">Secondary</div>
              </div>
              <div className="right-action">
                <div className="icon8">
                  <img
                    className="expandlessfilled-icon"
                    loading="eager"
                    alt=""
                    src="/expandlessfilled.svg"
                  />
                </div>
              </div>
            </div>
            <div className="divider-horizontal">
              <div className="min-height4" />
              <div className="divider" />
            </div>
          </div>
          <Button
            className="listitem1"
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "rgba(0, 0, 0, 0.87)",
              fontSize: "14",
              background: "rgba(0, 0, 0, 0.04)",
              borderRadius: "4px",
              "&:hover": { background: "rgba(0, 0, 0, 0.04)" },
              height: 36,
            }}
            onClick={onListItemClick}
          >
            Vaccine 1
          </Button>
          <div className="listitem2">
            <div className="container2">
              <div className="left-content1">
                <div className="icon9">
                  <img
                    className="starsharp-icon2"
                    alt=""
                    src="/starsharp.svg"
                  />
                </div>
              </div>
              <div className="listitem-text1">
                <div className="list-item4">Vaccine 2</div>
                <div className="secondary1">Secondary</div>
              </div>
              <div className="iconbutton">
                <div className="icon10">
                  <img
                    className="starsharp-icon3"
                    alt=""
                    src="/starsharp.svg"
                  />
                </div>
              </div>
            </div>
            <div className="divider-horizontal1">
              <div className="min-height5" />
              <div className="divider1" />
            </div>
          </div>
          <div className="listitem3">
            <div className="container3">
              <div className="left-content2">
                <div className="icon11">
                  <img
                    className="starsharp-icon4"
                    alt=""
                    src="/starsharp.svg"
                  />
                </div>
              </div>
              <div className="listitem-text2">
                <div className="list-item5">Vaccine 3</div>
                <div className="secondary2">Secondary</div>
              </div>
              <div className="iconbutton1">
                <div className="icon12">
                  <img
                    className="starsharp-icon5"
                    alt=""
                    src="/starsharp.svg"
                  />
                </div>
              </div>
            </div>
            <div className="divider-horizontal2">
              <div className="min-height6" />
              <div className="divider2" />
            </div>
          </div>
          <div className="listitem4">
            <div className="container4">
              <div className="left-content3">
                <div className="icon13">
                  <img
                    className="starsharp-icon6"
                    alt=""
                    src="/starsharp.svg"
                  />
                </div>
              </div>
              <div className="listitem-text3">
                <div className="list-item6">Vaccine 4</div>
                <div className="secondary3">Secondary</div>
              </div>
              <div className="iconbutton2">
                <div className="icon14">
                  <img
                    className="starsharp-icon7"
                    alt=""
                    src="/starsharp.svg"
                  />
                </div>
              </div>
            </div>
            <div className="divider-horizontal3">
              <div className="min-height7" />
              <div className="divider3" />
            </div>
          </div>
        </div>
        <div className="custom-expandable-nav-item1">
          <div className="listitem5">
            <div className="container5">
              <div className="left-content4">
                <div className="icon15">
                  <img
                    className="starsharp-icon8"
                    alt=""
                    src="/starsharp.svg"
                  />
                </div>
              </div>
              <div className="listitem-text4">
                <div className="list-item7">Importent</div>
                <div className="secondary4">Secondary</div>
              </div>
              <div className="right-action1">
                <div className="icon16">
                  <img
                    className="expandlessfilled-icon1"
                    alt=""
                    src="/expandlessfilled.svg"
                  />
                </div>
              </div>
            </div>
            <div className="divider-horizontal4">
              <div className="min-height8" />
              <div className="divider4" />
            </div>
          </div>
          <div className="listitem6">
            <div className="container6">
              <div className="left-content5">
                <div className="icon17">
                  <img
                    className="starsharp-icon9"
                    alt=""
                    src="/starsharp.svg"
                  />
                </div>
              </div>
              <div className="listitem-text5">
                <div className="list-item8">Why?</div>
                <div className="secondary5">Secondary</div>
              </div>
              <div className="iconbutton3">
                <div className="icon18">
                  <img
                    className="starsharp-icon10"
                    alt=""
                    src="/starsharp.svg"
                  />
                </div>
              </div>
            </div>
            <div className="divider-horizontal5">
              <div className="min-height9" />
              <div className="divider5" />
            </div>
          </div>
          <div className="listitem7">
            <div className="container7">
              <div className="left-content6">
                <div className="icon19">
                  <img
                    className="starsharp-icon11"
                    alt=""
                    src="/starsharp.svg"
                  />
                </div>
              </div>
              <div className="listitem-text6">
                <div className="list-item9">List item</div>
                <div className="secondary6">Secondary</div>
              </div>
              <div className="iconbutton4">
                <div className="icon20">
                  <img
                    className="starsharp-icon12"
                    alt=""
                    src="/starsharp.svg"
                  />
                </div>
              </div>
            </div>
            <div className="divider-horizontal6">
              <div className="min-height10" />
              <div className="divider6" />
            </div>
          </div>
          <div className="listitem8">
            <div className="container8">
              <div className="left-content7">
                <div className="icon21">
                  <img
                    className="starsharp-icon13"
                    alt=""
                    src="/starsharp.svg"
                  />
                </div>
              </div>
              <div className="listitem-text7">
                <div className="list-item10">List item</div>
                <div className="secondary7">Secondary</div>
              </div>
              <div className="iconbutton5">
                <div className="icon22">
                  <img
                    className="starsharp-icon14"
                    alt=""
                    src="/starsharp.svg"
                  />
                </div>
              </div>
            </div>
            <div className="divider-horizontal7">
              <div className="min-height11" />
              <div className="divider7" />
            </div>
          </div>
          <div className="listitem9">
            <div className="container9">
              <div className="left-content8">
                <div className="icon23">
                  <img
                    className="starsharp-icon15"
                    alt=""
                    src="/starsharp.svg"
                  />
                </div>
              </div>
              <div className="listitem-text8">
                <div className="list-item11">List item</div>
                <div className="secondary8">Secondary</div>
              </div>
              <div className="iconbutton6">
                <div className="icon24">
                  <img
                    className="starsharp-icon16"
                    alt=""
                    src="/starsharp.svg"
                  />
                </div>
              </div>
            </div>
            <div className="divider-horizontal8">
              <div className="min-height12" />
              <div className="divider8" />
            </div>
          </div>
        </div>
        <div className="custom-expandable-nav-item2">
          <div className="listitem10">
            <div className="container10">
              <div className="left-content9">
                <div className="icon25">
                  <img
                    className="starsharp-icon17"
                    alt=""
                    src="/starsharp.svg"
                  />
                </div>
              </div>
              <div className="listitem-text9">
                <div className="list-item12">List item</div>
                <div className="secondary9">Secondary</div>
              </div>
              <div className="right-action2">
                <div className="icon26">
                  <img
                    className="expandmorefilled-icon"
                    loading="eager"
                    alt=""
                    src="/expandmorefilled.svg"
                  />
                </div>
              </div>
            </div>
            <div className="divider-horizontal9">
              <div className="min-height13" />
              <div className="divider9" />
            </div>
          </div>
        </div>
        <div className="listitem11">
          <div className="container11">
            <div className="left-content10">
              <div className="icon27">
                <img className="starsharp-icon18" alt="" src="/starsharp.svg" />
              </div>
            </div>
            <div className="listitem-text10">
              <div className="list-item13">List item</div>
              <div className="secondary10">Secondary</div>
            </div>
            <div className="iconbutton7">
              <div className="icon28">
                <img className="starsharp-icon19" alt="" src="/starsharp.svg" />
              </div>
            </div>
          </div>
          <div className="divider-horizontal10">
            <div className="min-height14" />
            <div className="divider10" />
          </div>
        </div>
        <div className="listitem12">
          <div className="container12">
            <div className="left-content11">
              <div className="icon29">
                <img className="starsharp-icon20" alt="" src="/starsharp.svg" />
              </div>
            </div>
            <div className="listitem-text11">
              <div className="list-item14">List item</div>
              <div className="secondary11">Secondary</div>
            </div>
            <div className="iconbutton8">
              <div className="icon30">
                <img className="starsharp-icon21" alt="" src="/starsharp.svg" />
              </div>
            </div>
          </div>
          <div className="divider-horizontal11">
            <div className="min-height15" />
            <div className="divider11" />
          </div>
        </div>
        <div className="listitem13">
          <div className="container13">
            <div className="left-content12">
              <div className="icon31">
                <img className="starsharp-icon22" alt="" src="/starsharp.svg" />
              </div>
            </div>
            <div className="listitem-text12">
              <div className="list-item15">List item</div>
              <div className="secondary12">Secondary</div>
            </div>
            <div className="iconbutton9">
              <div className="icon32">
                <img className="starsharp-icon23" alt="" src="/starsharp.svg" />
              </div>
            </div>
          </div>
          <div className="divider-horizontal12">
            <div className="min-height16" />
            <div className="divider12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSidenav;
