import { Button } from "@mui/material";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./pageCss/UserPage.css";
import Footer from "../components/Footer";
import "../components/comCss/Minheight.css";
import FrameHeader from "../components/FrameHeader";
import VDashBoard from "../components/vaccinesdashboard";

const JepB = () => {
  const navigate = useNavigate();

  const onNavButtonClick = useCallback(() => {
    navigate("/user-page");
  }, [navigate]);

  return (

    <div>
      <FrameHeader
        knowledgeOfVaccine="Knowledge Of Vaccine"
        onNavButtonClick={onNavButtonClick}
      />
      <div className="user-page">

        <section className="image-placeholder" style={{ marginBottom: "100px" }}>
          <VDashBoard />

          <div className="label-text " style={{ marginBottom: "100px", minHeight: "auto" }}>

            <div className="minheight" >
              <div className="default-slot" > <h1 className="page-header" > Jap B Vaccine</h1></div>
              <div className="card">
                <div>
                  <div  >
                    <div style={{ width: '100%', marginRight: "10px" }} >
                      <div style={{ height: "flex", width: '100%' }}>
                        <p style={{ marginBottom: "10px", fontSize: "20px", margin: "30px" }}>

                          <h3 style={{ marginBottom: "10px" }}>Jap B – Encephalitis (JE)</h3>
                          <p style={{ marginBottom: "20px" }}> Japanese encephalitis (JE) is a mosquito-borne disease spreaded through a virus. Many die out of the disease while those who survive
                           will have permanent brain damage. Children will be immunized with the
                            LJEV when one year is complete.Those immunized may have local pain, swelling and redness, or fever. Rarely, some 
                            can develop neurologic symptoms such as encephalitis, gait disturbances and Parkinsonism.</p>
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* special need section */}
        <section className="you-message-frame"  >
          <div className="cta">
            <div className="content">
              <h1 className="you-can-take">
                You can take advice from provided doctors for children with
                special needs!
              </h1>
              <Button
                className="primary-button"
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#000",
                  fontSize: "16",
                  background: "#f2c94c",
                  borderRadius: "4px",
                  "&:hover": { background: "#f2c94c" },
                  width: 187,
                  height: 51,
                }}
              >
                Meet your doctor
              </Button>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default JepB;