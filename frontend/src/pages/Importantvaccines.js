import { Button } from "@mui/material";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./pageCss/UserPage.css";
import Footer from "../components/Footer";
import "../components/comCss/Minheight.css";
import FrameHeader from "../components/FrameHeader";
import VDashBoard from "../components/vaccinesdashboard";

const IVaccines = () => {
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
              <div className="default-slot" > <h1 className="page-header" > Types of vaccines given to babies</h1></div>
              <div className="card">
                <div>
                  <div  >
                    <div style={{ width: '100%', marginRight: "10px" }} >
                      <div style={{ height: "flex", width: '100%' }}>
                        <p style={{ marginBottom: "10px", fontSize: "20px", margin: "30px" }}>

                          <p style={{ marginBottom: "10px" }}>
                            The following are few of the essential vaccines, though in some cases they are not compulsory to take.
                          </p>
                          <h3 style={{ marginBottom: "10px" }}>BCG</h3>
                          <p style={{ marginBottom: "10px" }}>BCG vaccine provides protection against TB meningitis. The current BCG vaccine contains a live attenuated strain of M.
                            bovis. It is given to the infants as a single dose as soon as possible after birth. According to the national policy,
                            all new bones should be given the vaccine before leaving the hospital,
                            preferably within 24hours of birth.
                          </p>

                          <p style={{ marginBottom: "20px" }}>A local reaction is common after the vaccination by way of a small tender red swelling at the injected area. It will gradually change to
                            a small vesicle and then to an ulcer in a few weeks and will subside in 2 – 5 months leaving a superficial scar.</p>
                          <h3 style={{ marginBottom: "10px" }}>Hib: Hib (Haemophilus influenzae type b) </h3>
                          <p style={{ marginBottom: "20px" }}>
                            Hib  is a bacterium that causes meningitis. It happens due to infection of the outer lining of the brain.
                            There can be mild reactions following Hib vaccination. Pain, redness,
                            or swelling at the site of the shot are among common such reactions. These normally
                            start within the day 1 and disappear after 1-3day of vaccination. More serious reactions are infrequent.
                          </p>

                          <h3 style={{ marginBottom: "10px" }}>Hep B</h3>
                          <p style={{ marginBottom: "10px" }}>
                            Hep B protects the child from Hepatitis B which could cause long term serious illnesses such as liver diseases or liver cancer.
                            Everyone up to 18 years should receive the vaccine. First dose is normally given to the newborn at birth prior to being discharged from hospital.</p>
                          <p style={{ marginBottom: "20px" }}>Sever reactions to the vaccine are very rear. Pain and soreness where the shot is given, slight fever, nausea, dizziness,
                            and malaise are among mild reactions commonly observed following vaccination. Those who have had a serious allergic reaction to
                            a previous dose of the vaccine should not receive additional doses. People who are moderately or severely ill should consult with their
                            physician before receiving any vaccine.
                          </p>

                          <h3 style={{ marginBottom: "10px" }}>Polio</h3>
                          <p style={{ marginBottom: "10px" }}>Polio is caused by a virus entered to the body through the mouth. It causes paralysis and mainly affects children under
                            three years of age. Children are given 4 doses when they are2monts, 4 months, 6-18 months and a booster when 4-6yrs.
                          </p>
                          <p style={{ marginBottom: "20px" }}>Though there are no serious side effects of having Polio vaccine, some can develop soreness in the area where the shot is given. Apart from that,
                            breathing difficulty, weakness, hoarseness or wheezing, a fast heart beat, hives, dizziness, extreme paleness or welling of throat are also possible.
                            Thos who experienced severe allergies to a previous polio shot should not get another one. If one is seriously ill at the time of the shot should wait
                            until they recover. Adults who have never being vaccinated for Polio can also get vaccinated.
                          </p>

                          <h3 style={{ marginBottom: "10px" }}>MMR </h3>
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

                          <h3 style={{ marginBottom: "10px" }}>Jap B – Encephalitis (JE)</h3>
                          <p style={{ marginBottom: "20px" }}> Japanese encephalitis (JE) is a mosquito-borne disease spreaded through a virus. Many die out of the disease while those who survive will have permanent brain damage. Children will be immunized with the
                            LJEV when one year is complete.Those immunized may have local pain, swelling and redness, or fever. Rarely, some can develop neurologic symptoms such as encephalitis, gait disturbances and Parkinsonism.</p>
                          <h3 style={{ marginBottom: "10px" }}>Rubella</h3>
                          <p style={{ marginBottom: "10px" }}>Rubella is a viral disease commonly known as German measles. Rubella infection in early pregnancy can lead to miscarriage, stillbirth or congenital
                            rubella syndrome (CRS). Infants born with CSR may suffer multiple birth defects such as cataract, deafness, cardiac abnormalities,
                            mental retardation, intellectual disabilities, intrauterine growth retardation and inflammatory lesions of the brain, liver, lungs and bone marrow.
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
              <Button  href="/mcard"
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

export default IVaccines;