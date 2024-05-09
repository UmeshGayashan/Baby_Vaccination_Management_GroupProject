import { Button } from "@mui/material";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./pageCss/UserPage.css";
import Footer from "../components/Footer";
import "../components/comCss/Minheight.css";
import FrameHeader from "../components/FrameHeader";
import VDashBoard from "../components/vaccinesdashboard";



const BCG = () => {
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
              <div className="default-slot" > <h1 className="page-header" > BCG Vaccine</h1></div>
              <div className="card">
                <div>
                  <div  >
                    <div style={{ width: '100%', marginRight: "10px" }} >
                      <div style={{ height: "flex", width: '100%' }}>
                        <p style={{ marginBottom: "10px", fontSize: "20px", margin: "30px" }}>

                          <p style={{ marginBottom: "10px" }}>BCG vaccine provides protection against TB meningitis. The current BCG vaccine contains a live attenuated strain of M.
                            bovis. It is given to the infants as a single dose as soon as possible after birth. According to the national policy,
                            all new bones should be given the vaccine before leaving the hospital,
                            preferably within 24hours of birth.
                          </p>

                          <p style={{ marginBottom: "20px" }}>A local reaction is common after the vaccination by way of a small tender red swelling at the injected area. It will gradually change to
                            a small vesicle and then to an ulcer in a few weeks and will subside in 2 – 5 months leaving a superficial scar.
                            </p>

                            <p style={{ marginBottom: "20px" }}>
                            The formulation of international requirements for the manufacture and control of BCG vaccine was first
                             considered by the WHO Expert Committee on Biological Standardization in its thirteenth report. In its fourteenth report,
                              the Committee requested WHO to make arrangements as soon as possible for the formulation of such requirements. 
                              These requirements were approved by the WHO Expert
                             Committee on Biological Standardization at its eighteenth meeting and appeared as Annex 1 to its report.
                            </p>

                            <p style={{ marginBottom: "20px" }}>
                            Mycobacterium tuberculosis (Mtb), the ethiological agent of tuberculosis (TB), is a 
                            leading cause of human disease and death, particularly in developing countries. In the global context, TB 
                            in intimately linked to poverty, and control of TB is ultimately a question of justice and human rights. In some 
                            areas with a high burden of TB, existing strategies for TB control are currently overwhelmed by the rising numbers of cases of TB 
                            occurring in parallel with or the HIV/AIDS pandemic. Emerging mycobacterial drug resistance is further complicating the situation. After decades of steady decline,
                             the incidence of TB is also increasing in industralized countries, mainly as the result of 
                            outbreaks in particularly vulnerable groups
                            </p>

                            <p style={{ marginBottom: "20px" }}>
                            The bacille Calmette-Guérin (BCG) vaccine has existed for 80 years
                             and is one of the most widely used of all current vaccines, reading
                              80%of neonates and infants in countries where it is part of the national childhood 
                              immunization programme. BCG vaccine has a documented protective effect against meningitis and disseminated TB in children. 
                              It does not prevent primary infection and, more importantly, does not prevent reactivation of latent pulmonary infection, the principal source of 
                              bacillary spread in the community. The
                             impact of BCG vaccination on transmission of Mtb is therefore limited.
                            </p>

                            <p style={{ marginBottom: "20px" }}>
                            The biological interaction between Mtb and the human host is complex 
                            and only partially understood. Recent advances in areas such as mycobacterial immunology 
                            and genomics have stimulated research on numerous new experimental vaccines, but it is unlikely that any of these 
                            urgently need vaccines will be available for routine use within the next few years. In the meantime, 
                            optimal utilization of BCG is encouraged.
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

export default BCG;