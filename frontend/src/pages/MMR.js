import { Button } from "@mui/material";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./pageCss/UserPage.css";
import Footer from "../components/Footer";
import "../components/comCss/Minheight.css";
import FrameHeader from "../components/FrameHeader";
import VDashBoard from "../components/vaccinesdashboard";



const MMR = () => {
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
              <div className="default-slot" > <h1 className="page-header" > MMR Vaccine</h1></div>
              <div className="card">
                <div>
                  <div  >
                    <div style={{ width: '100%', marginRight: "10px" }} >
                      <div style={{ height: "flex", width: '100%' }}>
                        <p style={{ marginBottom: "10px", fontSize: "20px", margin: "30px" }}>

                          <p style={{ marginBottom: "10px" }}> MMR vaccine provides immunity for Mumps, Measles and Rubella. It is given as two doses, the first when the child is 12-15 months and the second when the child is 4-6yrs.</p>

                          <p style={{ marginBottom: "20px" }}>Common side effects after vaccination include fever, mild rash and swollen glands in the cheeks or neck. These appear mostly during the
                            first 7-12 days after the vaccination. Though rear, serious allergic reactions can include deafness, seizures, coma, lowered consciousness
                            and permanent brain damage.</p>

                          <h4 style={{ marginBottom: "10px" }}>Identify diseases prevented by MMR vaccine:</h4>

                          <p style={{ marginBottom: "10px" }}>Measles virus causes rash, cough, runny nose, eye irritation, and fever. It also can lead to ear infection, pneumonia, seizures. (jerking and staring), brain damage, and death as well.</p>
                          <p style={{ marginBottom: "10px" }}>Mumps virus causes headache, fever, muscle pain, loss of appetite, and swollen glands. It also can lead to deafness, meningitis (infection of the brain and spinal cord covering),
                            painful swelling of the testicles or ovaries, and rarely sterility.</p>
                          <p style={{ marginBottom: "20px" }}>Rubella (German measles) causes rash, mild fever, swelling of glands in the neck etc. It further can cause brain swelling
                            or bleeding problems. Pregnant mothers affected with Rubella during pregnancy will either experience miscarriage or will have children with
                            serious birth defects such as blindness, deafness or with learning disabilities.</p>

                          
                          
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

export default MMR;