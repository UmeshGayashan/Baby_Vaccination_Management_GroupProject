import { Button } from "@mui/material";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./pageCss/UserPage.css";
import Footer from "../components/Footer";
import "../components/comCss/Minheight.css";
import FrameHeader from "../components/FrameHeader";
import VDashBoard from "../components/vaccinesdashboard";



const Polio = () => {
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
              <div className="default-slot" > <h1 className="page-header" > Polio Vaccine</h1></div>
              <div className="card">
                <div>
                  <div  >
                    <div style={{ width: '100%', marginRight: "10px" }} >
                      <div style={{ height: "flex", width: '100%' }}>
                        <p style={{ marginBottom: "10px", fontSize: "20px", margin: "30px" }}>
                        <p style={{ marginBottom: "10px" }}>Polio is caused by a virus entered to the body through the mouth. It causes paralysis and mainly affects children under
                            three years of age. Children are given 4 doses when they are2monts, 4 months, 6-18 months and a booster when 4-6yrs.
                          </p>
                          <p style={{ marginBottom: "20px" }}>Though there are no serious side effects of having Polio vaccine, some can develop soreness in the area where the shot is given. Apart from that,
                            breathing difficulty, weakness, hoarseness or wheezing, a fast heart beat, hives, dizziness, extreme paleness or welling of throat are also possible.
                            Thos who experienced severe allergies to a previous polio shot should not get another one. If one is seriously ill at the time of the shot should wait
                            until they recover. Adults who have never being vaccinated for Polio can also get vaccinated.
                          </p>
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

export default Polio;