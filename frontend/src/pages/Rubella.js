import { Button } from "@mui/material";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./pageCss/UserPage.css";
import Footer from "../components/Footer";
import "../components/comCss/Minheight.css";
import FrameHeader from "../components/FrameHeader";
import VDashBoard from "../components/vaccinesdashboard";

const Rubella = () => {
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
              <div className="default-slot" > <h1 className="page-header" > Rubella Vaccine</h1></div>
              <div className="card">
                <div>
                  <div  >
                    <div style={{ width: '100%', marginRight: "10px" }} >
                      <div style={{ height: "flex", width: '100%' }}>
                        <p style={{ marginBottom: "10px", fontSize: "20px", margin: "30px" }}>

                          <p style={{ marginBottom: "10px" }}>Rubella is a viral disease commonly known as German measles.
                           Rubella infection in early pregnancy can lead to miscarriage, stillbirth or congenital
                            rubella syndrome (CRS). Infants born with CSR may suffer multiple birth defects such as cataract, deafness, cardiac abnormalities,
                            mental retardation, intellectual disabilities, intrauterine growth retardation and inflammatory 
                            lesions of the brain, liver, lungs and bone marrow.
                            Adverse reactions following rubella vaccination are generally mild. Common reactions include pain, redness and indurations at the site
                            of injection. Apart from that, slight fever and rash, lymphadenopathy, myalgia and paraesthesiae are commonly reported.</p>

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

export default Rubella;