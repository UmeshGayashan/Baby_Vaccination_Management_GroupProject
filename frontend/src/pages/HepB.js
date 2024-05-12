import { Button } from "@mui/material";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./pageCss/UserPage.css";
import Footer from "../components/Footer";
import "../components/comCss/Minheight.css";
import FrameHeader from "../components/FrameHeader";
import VDashBoard from "../components/vaccinesdashboard";



const HepB = () => {
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
                            <div className="default-slot" > <h1 className="page-header" >Hepatitis B Vaccination</h1></div>
                            <div className="card">
                                <div>
                                    <div  >
                                        <div style={{ width: '100%', marginRight: "10px" }} >
                                            <div style={{ height: "flex", width: '100%' }}>
                                                <p style={{ marginBottom: "10px", fontSize: "20px", margin: "30px" }}>

                                                    <p style={{ marginBottom: "20px" }} >
                                                        Hep B protects the child from Hepatitis B which could cause long term serious illnesses such as liver diseases or liver cancer.
                                                        Everyone up to 18 years should receive the vaccine. First dose is normally given to the newborn at birth prior to being discharged from hospital.</p>
                                                    <p style={{ marginBottom: "20px" }}>Sever reactions to the vaccine are very rear. Pain and soreness where the shot is given, slight fever, nausea, dizziness,
                                                        and malaise are among mild reactions commonly observed following vaccination. Those who have had a serious allergic reaction to
                                                        a previous dose of the vaccine should not receive additional doses. People who are moderately or severely ill should consult with their
                                                        physician before receiving any vaccine.
                                                    </p>

                                                    <p style={{ marginBottom: "20px" }}>
                                                        <p style={{ marginBottom: "20px" }}>In highly endemic areas, hepatitis B is most commonly spread from mother to child at birth (perinatal transmission) or through horizontal transmission (exposure to infected blood),
                                                         especially from an infected child to an uninfected child during the first 5 years of life. The development of chronic infection is common in infants infected from

                                                        their mothers or before the age of 5 years.</p>
                                                        

                                                        Hepatitis B is also spread by needlestick injury, tattooing, piercing and exposure to infected blood and
                                                        body fluids, such as saliva and menstrual, vaginal and seminal fluids. Transmission of the virus may also occur through the reuse of contaminated needles and syringes or sharp objects either in health care settings, in the community or among persons who inject drugs. Sexual transmission is more prevalent in unvaccinated persons with multiple sexual partners.

                                                        Hepatitis B infection acquired in adulthood leads to chronic hepatitis in less than 5% of cases, whereas infection in infancy and early childhood leads to chronic hepatitis in about 95% of cases. This is the basis for strengthening and prioritizing infant and childhood vaccination.

                                                        The hepatitis B virus can survive outside the body for at least 7 days. During this time, the virus can still cause infection if it enters the body of a person who is not protected by the vaccine. The incubation period of the hepatitis B virus ranges from 30 to 180 days. The virus may be detected within 30 to 60 days after infection and can persist and develop into chronic hepatitis B, especially when transmitted in infancy or childhood.
                                                    </p>
                                                    <p style={{ marginBottom: "20px" }}>
                                                    Hepatitis B is an infection of the liver caused by the hepatitis B virus. The infection can be acute (short and severe) or chronic (long term).

Hepatitis B can cause a chronic infection and puts people at high risk of death from cirrhosis and liver cancer.

It can spread through contact with infected body fluids like blood, saliva, vaginal fluids and semen. It can also be passed from a mother to her baby.

Hepatitis B can be prevented with a safe and effective vaccine. The vaccine is usually given soon after birth with boosters a few weeks later. It offers nearly 100% protection against the virus.

Hepatitis B is a major global health problem. The burden of infection is highest in the WHO Western Pacific Region and the WHO African Region, where 97 million and 65 million people, respectively, are chronically infected. Sixty-one million people are infected in the WHO South-East Asia Region, 15 million in the WHO Eastern Mediterranean Region, 11 million in the WHO in the WHO European Region and 5 million in the WHO Region of the Americas


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

export default HepB;