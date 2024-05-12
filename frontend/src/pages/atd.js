import { Button } from "@mui/material";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./pageCss/UserPage.css";
import Footer from "../components/Footer";
import "../components/comCss/Minheight.css";
import FrameHeader from "../components/FrameHeader";
import VDashBoard from "../components/vaccinesdashboard";

const ATD = () => {
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
              <div className="default-slot" > <h1 className="page-header" > a T d Vaccine</h1></div>
              <div className="card">
                <div>
                  <div  >
                    <div style={{ width: '100%', marginRight: "10px" }} >
                      <div style={{ height: "flex", width: '100%' }}>
                        <p style={{ marginBottom: "10px", fontSize: "20px", margin: "30px" }}>

                          <h3 style={{ marginBottom: "10px" }}>a T d</h3>
                          <p style={{ marginBottom: "20px" }}>Adult formulation diphtheria and tetanus vaccine referred to as (aTd) is a booster given to children over 7 years and to adults.
                            Reactions following vaccination are mild and are confined to the area injected. Among commonly noted are inflammation together with
                            transient fever, malaise and irritability. Occasional nodule may also develop.</p>

                          <h3 style={{ marginBottom: "10px" }}>DT / dTpa</h3>
                          <p style={{ marginBottom: "10px" }}>dTaP provide protection against diphtheria, tetanus and pertussis. DT vaccine is used as a booster to the DTaP vaccine and helps prevent
                            tetanus and diphtheria.</p>
                          <p style={{ marginBottom: "10px" }}>Diphtheria is a disease that attacks the throat and heart. It can
                            lead to heart failure and death.</p>
                          <p style={{ marginBottom: "10px" }}>Tetanus is also called “lockjaw.” It can lead to severe muscle spasms and death.</p>
                          <p style={{ marginBottom: "10px" }}>Pertussis (also called “whooping cough”) causes severe coughing that makes
                            it hard to breathe, eat and drink. It can lead to pneumonia, convulsions, brain damage and death</p>
                          <p style={{ marginBottom: "20px" }}>There can be minor local reactions such as pain, redness and swelling round the injection site that
                            may persists for several days.
                            Mild systemic reactions Including fever, aches and malaise can occur following booster injections.</p>

                         
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

export default ATD;