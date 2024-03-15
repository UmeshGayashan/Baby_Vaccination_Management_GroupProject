import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
} from "@mui/material";
import "./ListItem.css";
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const ListItem = () => {

  const [isClicked, setIsClicked] = useState(false);

  const toggleList = () => {
    setIsClicked(!isClicked);
  };


  const handleButtonClick = (buttonId) => {
    toggleList();
  };


  return (
    // dashboard
    <section className="list-item31">
      <div className="custom-sidenav3-2">
        <div className="spacing-vertical31">
          <div className="min-height59" />
        </div>
        <div className="logo3">
          <div className="spacing-horizontal24">
            <div className="frameplaceholder">
              <div className="spacer24" />
            </div>
          </div>

          <div className="library-logo-placeholder3">
            <img
              className="shape-icon3"
              loading="eager"
              alt=""
              src="/shape.svg"
            />
          </div>
        </div>
        <div className="spacing-vertical34">
          <div className="min-height62" />
        </div>

        <div className="ul3">
          <div className="custom-expandable-nav-item9">
            <div className="listitem26">
              <div className="container52">
                <div className="left-content25">


                  <a className='nav-link-v' href="/vaccines/1">
                    <button id='button7' className="custom-button">
                      <svg xmlns="http://www.w3.org/2000/svg" className="svg-icon" viewBox="0 -960 960 960">
                        <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
                      </svg>
                      <h3>Vaccine_01</h3>
                    </button>
                  </a>

                  <button id='button8' className="custom-button" onClick={handleButtonClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="svg-icon" viewBox="0 -960 960 960">
                      <path d="M720-360v-80h80q17 0 28.5 11.5T840-400q0 17-11.5 28.5T800-360h-80Zm0 160v-80h80q17 0 28.5 11.5T840-240q0 17-11.5 28.5T800-200h-80Zm-160 40q-33 0-56.5-23.5T480-240h-80v-160h80q0-33 23.5-56.5T560-480h120v320H560ZM280-280q-66 0-113-47t-47-113q0-66 47-113t113-47h60q25 0 42.5-17.5T400-660q0-25-17.5-42.5T340-720H200q-17 0-28.5-11.5T160-760q0-17 11.5-28.5T200-800h140q58 0 99 41t41 99q0 58-41 99t-99 41h-60q-33 0-56.5 23.5T200-440q0 33 23.5 56.5T280-360h80v80h-80Z" />
                    </svg>
                    <a className='nav-link-v' ><h3 >Vaccines</h3></a>
                    {isClicked ? (
                      <svg className="up-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M7 14l5-5 5 5z" />
                      </svg>
                    ) : (
                      <svg className="down-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                        <path d="M7 10l5 5 5-5z" />
                      </svg>
                    )}
                  </button>

                  <ul className={`list-container-v ${isClicked ? 'open' : ''}`}>

                    <li className="home-vv">
                      <a className='nav-link-v' href="/vaccines/1">
                        <button id='button7' className="custom-button">
                          <h3>Vaccine_01</h3>
                        </button>
                      </a>
                    </li>

                    <li className="home-vv">
                      <a className='nav-link-v' href="/vaccines/1">
                        <button id='button7' className="custom-button">
                          <h3>Vaccine_02</h3>
                        </button>
                      </a>
                    </li>

                    <li className="home-vv">
                      <a className='nav-link-v' href="/vaccines/1">
                        <button id='button7' className="custom-button">
                          <h3>Vaccine_03</h3>
                        </button>
                      </a>
                    </li>

                    <li className="home-vv">
                      <a className='nav-link-v' href="/vaccines/1">
                        <button id='button7' className="custom-button">
                          <h3>Vaccine_04</h3>
                        </button>
                      </a>
                    </li>

                    <li className="home-vv">
                      <a className='nav-link-v' href="/vaccines/1">
                        <button id='button7' className="custom-button">
                          <h3>Vaccine_05</h3>
                        </button>
                      </a>
                    </li>

                    <li className="home-vv">
                      <a className='nav-link-v' href="/vaccines/1">
                        <button id='button7' className="custom-button">
                          <h3>Vaccine_06</h3>
                        </button>
                      </a>
                    </li>

                    <li className="home-vv">
                      <a className='nav-link-v' href="/vaccines/1">
                        <button id='button7' className="custom-button">
                          <h3>Vaccine_07</h3>
                        </button>
                      </a>
                    </li>
                    <li className="home-vv">
                      <a className='nav-link-v' href="/vaccines/1">
                        <button id='button7' className="custom-button">
                          <h3>Vaccine_08</h3>
                        </button>
                      </a>
                    </li>
                    <li className="home-vv">
                      <a className='nav-link-v' href="/vaccines/1">
                        <button id='button7' className="custom-button">
                          <h3>Vaccine_09</h3>
                        </button>
                      </a>
                    </li>
                    <li className="home-vv">
                      <a className='nav-link-v' href="/vaccines/1">
                        <button id='button7' className="custom-button">
                          <h3>Vaccine_10</h3>
                        </button>
                      </a>
                    </li>
                    <li className="home-vv">
                      <a className='nav-link-v' href="/vaccines/1">
                        <button id='button7' className="custom-button">
                          <h3>Vaccine_11</h3>
                        </button>
                      </a>
                    </li>

                    <li className="home-vv">
                      <a className='nav-link-v' href="/vaccines/1">
                        <button id='button7' className="custom-button">
                          <h3>Vaccine_12</h3>
                        </button>
                      </a>
                    </li>

                  </ul>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

{/* details of vaccines knowledge */}

      <div className="list-item-inner" >
        <div className="frame-parent2" style={{height:"2200px"}} >
          <div className="about-the-vaccine-parent">
            <h1 className="about-the-vaccine" style={{ fontSize: "30px" }}>Types of vaccines given to babies</h1>
            <div className="et-morbi-vitae-container ">
              <p className="et-morbi-vitae">
                <p>
                  The following are few of the essential vaccines, though in some cases they are not compulsory to take.
                </p>
                <h3 >BCG</h3>
                <p>BCG vaccine provides protection against TB meningitis. The current BCG vaccine contains a live attenuated strain of M.
                  bovis. It is given to the infants as a single dose as soon as possible after birth. According to the national policy,
                  all new bones should be given the vaccine before leaving the hospital,
                  preferably within 24hours of birth.
                </p>

                <p>A local reaction is common after the vaccination by way of a small tender red swelling at the injected area. It will gradually change to
                  a small vesicle and then to an ulcer in a few weeks and will subside in 2 – 5 months leaving a superficial scar.</p>
                <h3 style={{ width: "500px" }}>Hib: Hib (Haemophilus influenzae type b) </h3>
                <p>
                  Hib  is a bacterium that causes meningitis. It happens due to infection of the outer lining of the brain.
                  There can be mild reactions following Hib vaccination. Pain, redness,
                  or swelling at the site of the shot are among common such reactions. These normally
                  start within the day 1 and disappear after 1-3day of vaccination. More serious reactions are infrequent.
                </p>

                <h3 style={{ width: "500px" }}>Hep B</h3>
                <p>
                  Hep B protects the child from Hepatitis B which could cause long term serious illnesses such as liver diseases or liver cancer.
                  Everyone up to 18 years should receive the vaccine. First dose is normally given to the newborn at birth prior to being discharged from hospital.</p>
                <p>Sever reactions to the vaccine are very rear. Pain and soreness where the shot is given, slight fever, nausea, dizziness,
                  and malaise are among mild reactions commonly observed following vaccination. Those who have had a serious allergic reaction to
                  a previous dose of the vaccine should not receive additional doses. People who are moderately or severely ill should consult with their
                  physician before receiving any vaccine.
                </p>

                <h3 style={{ width: "500px" }}>Polio</h3>
                <p>Polio is caused by a virus entered to the body through the mouth. It causes paralysis and mainly affects children under
                  three years of age. Children are given 4 doses when they are2monts, 4 months, 6-18 months and a booster when 4-6yrs.
                </p>
                <p>Though there are no serious side effects of having Polio vaccine, some can develop soreness in the area where the shot is given. Apart from that,
                  breathing difficulty, weakness, hoarseness or wheezing, a fast heart beat, hives, dizziness, extreme paleness or welling of throat are also possible.
                  Thos who experienced severe allergies to a previous polio shot should not get another one. If one is seriously ill at the time of the shot should wait
                  until they recover. Adults who have never being vaccinated for Polio can also get vaccinated.
                </p>

                <h3>MMR </h3>
                <p> MMR vaccine provides immunity for Mumps, Measles and Rubella. It is given as two doses, the first when the child is 12-15 months and the second when the child is 4-6yrs.</p>

                <p>Common side effects after vaccination include fever, mild rash and swollen glands in the cheeks or neck. These appear mostly during the
                  first 7-12 days after the vaccination. Though rear, serious allergic reactions can include deafness, seizures, coma, lowered consciousness
                  and permanent brain damage.</p>

                <h4>Identify diseases prevented by MMR vaccine:</h4>

                <p>Measles virus causes rash, cough, runny nose, eye irritation, and fever. It also can lead to ear infection, pneumonia, seizures. (jerking and staring), brain damage, and death as well.</p>
                <p>Mumps virus causes headache, fever, muscle pain, loss of appetite, and swollen glands. It also can lead to deafness, meningitis (infection of the brain and spinal cord covering),
                  painful swelling of the testicles or ovaries, and rarely sterility.</p>
                <p>Rubella (German measles) causes rash, mild fever, swelling of glands in the neck etc. It further can cause brain swelling
                  or bleeding problems. Pregnant mothers affected with Rubella during pregnancy will either experience miscarriage or will have children with
                  serious birth defects such as blindness, deafness or with learning disabilities.</p>

                <h3>a T d</h3>
                <p>Adult formulation diphtheria and tetanus vaccine referred to as (aTd) is a booster given to children over 7 years and to adults.
                  Reactions following vaccination are mild and are confined to the area injected. Among commonly noted are inflammation together with
                  transient fever, malaise and irritability. Occasional nodule may also develop.</p>

                <h3>DT / dTpa</h3>
                <p>dTaP provide protection against diphtheria, tetanus and pertussis. DT vaccine is used as a booster to the DTaP vaccine and helps prevent
                  tetanus and diphtheria.</p>
                <p>Diphtheria is a disease that attacks the throat and heart. It can
                  lead to heart failure and death.</p>
                <p>Tetanus is also called “lockjaw.” It can lead to severe muscle spasms and death.</p>
                <p>Pertussis (also called “whooping cough”) causes severe coughing that makes
                  it hard to breathe, eat and drink. It can lead to pneumonia, convulsions, brain damage and death</p>
                <p>There can be minor local reactions such as pain, redness and swelling round the injection site that
                  may persists for several days.
                  Mild systemic reactions Including fever, aches and malaise can occur following booster injections.</p>

                <h3 style={{ width: "500px" }}>Jap B – Encephalitis (JE)</h3>
                <p> Japanese encephalitis (JE) is a mosquito-borne disease spreaded through a virus. Many die out of the disease while those who survive will have permanent brain damage. Children will be immunized with the
                  LJEV when one year is complete.Those immunized may have local pain, swelling and redness, or fever. Rarely, some can develop neurologic symptoms such as encephalitis, gait disturbances and Parkinsonism.</p>
                <h3>Rubella</h3>
                <p>Rubella is a viral disease commonly known as German measles. Rubella infection in early pregnancy can lead to miscarriage, stillbirth or congenital
                  rubella syndrome (CRS). Infants born with CSR may suffer multiple birth defects such as cataract, deafness, cardiac abnormalities,
                  mental retardation, intellectual disabilities, intrauterine growth retardation and inflammatory lesions of the brain, liver, lungs and bone marrow.
                  Adverse reactions following rubella vaccination are generally mild. Common reactions include pain, redness and indurations at the site
                  of injection. Apart from that, slight fever and rash, lymphadenopathy, myalgia and paraesthesiae are commonly reported.</p>

              </p>
          </div>
          </div>
        </div>
      
      </div>
    </section>
  );
};

export default ListItem;
