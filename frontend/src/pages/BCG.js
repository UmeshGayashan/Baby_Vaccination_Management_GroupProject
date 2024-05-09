import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameHeader from "../components/FrameHeader";
import Footer from "../components/Footer";
import VDashBoard from "../components/vaccinesdashboard";


const BCG = () => {
  const navigate = useNavigate();

  const onNavButtonClick = useCallback(() => {
    navigate("/user-page");
  }, [navigate]);

  return (
    <div >
      <FrameHeader
        knowledgeOfVaccine="Knowledge Of Vaccine"
        onNavButtonClick={onNavButtonClick}
      />
      <div style={{ display: "flex" }}>
        <div  style= {{  marginRight: "10px" }}>
          {/* Left side */}
          <VDashBoard />
        </div>
        <div  style={{ flex: 2 }}>
          {/* Right side */}
          <section >
            <div style={{ marginLeft: "10px", marginBottom: "50px" }}>
              <div>
                <h1 style={{ fontSize: "30px", marginBottom: "30px" }}>
                  BCG Vaccination
                </h1>
                <div  style={{marginRight:"10px"}}>
                    <p  >
                      <p style={{marginBottom:"10px"}}>
                        
                      </p>
                      <h3 style={{marginBottom:"10px"}}>BCG</h3>
                      <p style={{marginBottom:"10px"}}>BCG vaccine provides protection against TB meningitis. The current BCG vaccine contains a live attenuated strain of M.
                        bovis. It is given to the infants as a single dose as soon as possible after birth. According to the national policy,
                        all new bones should be given the vaccine before leaving the hospital,
                        preferably within 24hours of birth.
                      </p>

                      <p style={{marginBottom:"20px"}}>A local reaction is common after the vaccination by way of a small tender red swelling at the injected area. It will gradually change to
                        a small vesicle and then to an ulcer in a few weeks and will subside in 2 – 5 months leaving a superficial scar.</p>

                     
                     
                    </p>

                   
                  </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BCG;
