
import "./FrameContainer.css";
import { useMemo } from "react";
import { Button } from "@mui/material";


  const FrameContainer = ({
    propHeight,
    propWidth,
    propPadding,
    propAlignSelf,
    propWidth1,
    propRight,
    propPadding1,
  }) => {
    const frameDiv1Style = useMemo(() => {
      return {
        height: propHeight,
        width: propWidth,
        padding: propPadding,
        alignSelf: propAlignSelf,
      };
    }, [propHeight, propWidth, propPadding, propAlignSelf]);
  
    const rectangleShapeStyle = useMemo(() => {
      return {
        width: propWidth1,
        right: propRight,
      };
    }, [propWidth1, propRight]);
  
    const frameDiv2Style = useMemo(() => {
      return {
        padding: propPadding1,
      };
    }, [propPadding1]);
 
  return (
    <section className="frame-container">
       <div className="rectangle-shape-parent" style={frameDiv1Style}>
      <div className="rectangle-shape2" style={rectangleShapeStyle} />
      <div className="factsheet-vaccine">
        <div className="knowledge-of-vaccine-wrapper">
          <h1 className="knowledge-of-vaccine">Knowledge of Vaccine</h1>
        </div>
        <h2 className="vaccines-are-biological">
          Vaccines are biological substances that stimulate the immune system to
          recognize and fight against specific pathogens, such as bacteria or
          viruses. They are a crucial tool in preventing and controlling
          infectious diseases
        </h2>
      </div>
      <div className="custom-integration-switch-parent" style={frameDiv2Style}>
        <div className="custom-integration-switch1">
          <div className="advice-content" />
          <div className="row8">
            <div className="card1">
              <div className="paper1">
                <div className="cardcontent">
                  <div className="custom-integration-switch2">
                    <div className="container18">
                      <div className="avatar1">
                        <div className="border1">
                          <div className="badge1">
                            <div className="min-width2" />
                          </div>
                        </div>
                        <div className="op1">OP</div>
                        <div className="min-width3" />
                      </div>
                      <div className="spacing-vertical5">
                        <div className="min-height19" />
                      </div>
                      <h3 className="label3">Label</h3>
                      <div className="spacing-vertical6">
                        <div className="min-height20" />
                      </div>
                      <div className="switch">
                        <div className="switch1">
                          <div className="slide">
                            <div className="slide1" />
                          </div>
                          <div className="knob">
                            <div className="knob1" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="it-is-a">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card2">
              <div className="paper2">
                <div className="cardcontent1">
                  <div className="custom-integration-switch3">
                    <div className="container19">
                      <div className="avatar2">
                        <div className="border2">
                          <div className="badge2">
                            <div className="min-width4" />
                          </div>
                        </div>
                        <div className="op2">OP</div>
                        <div className="min-width5" />
                      </div>
                      <div className="spacing-vertical7">
                        <div className="min-height21" />
                      </div>
                      <h3 className="label4">Label</h3>
                      <div className="spacing-vertical8">
                        <div className="min-height22" />
                      </div>
                      <div className="switch2">
                        <div className="switch3">
                          <div className="slide2">
                            <div className="slide3" />
                          </div>
                          <div className="knob2">
                            <div className="knob3" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="it-is-a1">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card3">
              <div className="paper3">
                <div className="cardcontent2">
                  <div className="custom-integration-switch4">
                    <div className="container20">
                      <div className="avatar3">
                        <div className="border3">
                          <div className="badge3">
                            <div className="min-width6" />
                          </div>
                        </div>
                        <div className="op3">OP</div>
                        <div className="min-width7" />
                      </div>
                      <div className="spacing-vertical9">
                        <div className="min-height23" />
                      </div>
                      <h3 className="label5">Label</h3>
                      <div className="spacing-vertical10">
                        <div className="min-height24" />
                      </div>
                      <div className="switch4">
                        <div className="switch5">
                          <div className="slide4">
                            <div className="slide5" />
                          </div>
                          <div className="knob4">
                            <div className="knob5" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="it-is-a2">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button href="/vaccines/1"
          className="nav-button2"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "16",
            background: "#1d2130",
            borderRadius: "4px",
            "&:hover": { background: "#1d2130" },
            width: 155,
            height: 43,
          }}
        >
          More Details
        </Button>
      </div>
    </div>
    </section>
  );
};

export default FrameContainer;
