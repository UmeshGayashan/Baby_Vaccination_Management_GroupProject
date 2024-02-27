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


  const [selectedButton, setSelectedButton] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSignOutClick = (event) => {
    event.preventDefault();  // Prevent the default link behavior
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const toggleList = () => {
    setIsClicked(!isClicked);
  };



  useEffect(() => {
    const navLinkEls = document.querySelectorAll('.nav-link');
    const windowPathname = window.location.pathname;

    navLinkEls.forEach(navLinkEl => {
      const navLinkPathname = new URL(navLinkEl.href).pathname;

      if (windowPathname.includes(navLinkPathname) || navLinkPathname.includes(windowPathname)) {
        const buttonId = navLinkEl.getAttribute('href').substring(1); // Remove the leading '/'

        if (navLinkPathname === '/') {
          // Check if it's the /dashboard link and remove 'active' class
          navLinkEl.classList.remove('active');
        }
        else if (navLinkPathname === '/setting') {
          navLinkEl.classList.add('active');
          document.getElementById('button7').style.backgroundColor = 'white';
          document.getElementById('button7').style.color = 'black';
          document.getElementById('button7').style.fill = 'black';
        }
        else {
          // Otherwise, add 'active' class
          setSelectedButton(buttonId);
          navLinkEl.classList.add('active');
        }
      } else {
        navLinkEl.classList.remove('active');
      }
    });
  }, [window.location.pathname]);





  const handleButtonClick = (buttonId) => {
    toggleList();
  };


  return (
    <section className="list-item31">

      <div className="custom-sidenav3">
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
                    <button id='button7' className="home-v">
                      <svg xmlns="http://www.w3.org/2000/svg" className="svg-icon" viewBox="0 -960 960 960">
                        <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
                      </svg>
                      <h3>Vaccine_01</h3>
                    </button>
                  </a>

                  <a className='nav-link-v' href="/vaccines/1">
                    <button id='button7' className="home-v">
                      <svg xmlns="http://www.w3.org/2000/svg" className="svg-icon" viewBox="0 -960 960 960">
                        <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
                      </svg>
                      <h3>Vaccine_02</h3>
                    </button>
                  </a>

                  <a className='nav-link-v' href="/vaccines/1">
                    <button id='button7' className="home-v">
                      <svg xmlns="http://www.w3.org/2000/svg" className="svg-icon" viewBox="0 -960 960 960">
                        <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
                      </svg>
                      <h3>Vaccine_03</h3>
                    </button>
                  </a>

                  <a className='nav-link-v' href="/vaccines/1">
                    <button id='button7' className="home-v">
                      <svg xmlns="http://www.w3.org/2000/svg" className="svg-icon" viewBox="0 -960 960 960">
                        <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
                      </svg>
                      <h3>Vaccine_04</h3>
                    </button>
                  </a>

                  <a className='nav-link-v' href="/vaccines/1">
                    <button id='button7' className="home-v">
                      <svg xmlns="http://www.w3.org/2000/svg" className="svg-icon" viewBox="0 -960 960 960">
                        <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
                      </svg>
                      <h3>Vaccine_05</h3>
                    </button>
                  </a>

                  <a className='nav-link-v' href="/vaccines/1">
                    <button id='button7' className="home-v">
                      <svg xmlns="http://www.w3.org/2000/svg" className="svg-icon" viewBox="0 -960 960 960">
                        <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
                      </svg>
                      <h3>Vaccine_06</h3>
                    </button>
                  </a>

                  <a className='nav-link-v' href="/vaccines/1">
                    <button id='button7' className="home-v">
                      <svg xmlns="http://www.w3.org/2000/svg" className="svg-icon" viewBox="0 -960 960 960">
                        <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
                      </svg>
                      <h3>Vaccine_07</h3>
                    </button>
                  </a>

                  <a className='nav-link-v' href="/vaccines/1">
                    <button id='button7' className="home-v">
                      <svg xmlns="http://www.w3.org/2000/svg" className="svg-icon" viewBox="0 -960 960 960">
                        <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
                      </svg>
                      <h3>Vaccine_08</h3>
                    </button>
                  </a>

                  <a className='nav-link-v' href="/vaccines/1">
                    <button id='button7' className="home-v">
                      <svg xmlns="http://www.w3.org/2000/svg" className="svg-icon" viewBox="0 -960 960 960">
                        <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
                      </svg>
                      <h3>Vaccine_09</h3>
                    </button>
                  </a>

                  <a className='nav-link-v' href="/vaccines/1">
                    <button id='button7' className="home-v">
                      <svg xmlns="http://www.w3.org/2000/svg" className="svg-icon" viewBox="0 -960 960 960">
                        <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
                      </svg>
                      <h3>Vaccine_10</h3>
                    </button>
                  </a>

                  <a className='nav-link-v' href="/vaccines/1">
                    <button id='button7' className="home-v">
                      <svg xmlns="http://www.w3.org/2000/svg" className="svg-icon" viewBox="0 -960 960 960">
                        <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
                      </svg>
                      <h3>Vaccine_11</h3>
                    </button>
                  </a>

                  <a className='nav-link-v' href="/vaccines/1">
                    <button id='button7' className="home-v">
                      <svg xmlns="http://www.w3.org/2000/svg" className="svg-icon" viewBox="0 -960 960 960">
                        <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
                      </svg>
                      <h3>Vaccine_12</h3>
                    </button>
                  </a>


                  {/* <button id='button1' className="home-v sales" onClick={handleButtonClick}>
                    <svg xmlns="http://www.w3.org/2000/svg"  className="svg-icon" viewBox="0 -960 960 960" >
                      <path d="M720-360v-80h80q17 0 28.5 11.5T840-400q0 17-11.5 28.5T800-360h-80Zm0 160v-80h80q17 0 28.5 11.5T840-240q0 17-11.5 28.5T800-200h-80Zm-160 40q-33 0-56.5-23.5T480-240h-80v-160h80q0-33 23.5-56.5T560-480h120v320H560ZM280-280q-66 0-113-47t-47-113q0-66 47-113t113-47h60q25 0 42.5-17.5T400-660q0-25-17.5-42.5T340-720H200q-17 0-28.5-11.5T160-760q0-17 11.5-28.5T200-800h140q58 0 99 41t41 99q0 58-41 99t-99 41h-60q-33 0-56.5 23.5T200-440q0 33 23.5 56.5T280-360h80v80h-80Z" />
                    </svg>
                    <h3>vaccines</h3>
                    {isClicked ? (
                      <svg className="up-arrow" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
                        <path d="M7 14l5-5 5 5z" />
                      </svg>
                    ) : (
                      <svg className="down-arrow" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" >
                        <path d="M7 10l5 5 5-5z" />
                      </svg>
                    )}
                  </button> */}

                  {/* <ul className={`list-container ${isClicked ? 'open' : ''}`}>
                    <li className="home-v">
                      <Link class='inventory-item' to="/">
                        <h3 style={{ color: '#87B6F4', marginLeft: '50px' }}>Item</h3>
                      </Link>
                    </li>
                    <li className="home-v">
                      <Link to="/">
                        <h3 style={{ color: '#87B6F4', marginLeft: '50px' }}>Category</h3>
                      </Link>
                    </li>
                  </ul> */}

                  {/* <a className='nav-link-v' href='/'>
                    <button id='button2' className="home-v sales1" >
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M760-400v-260L560-800 360-660v60h-80v-100l280-200 280 200v300h-80ZM560-800Zm20 160h40v-40h-40v40Zm-80 0h40v-40h-40v40Zm80 80h40v-40h-40v40Zm-80 0h40v-40h-40v40ZM280-220l278 76 238-74q-5-9-14.5-15.5T760-240H558q-27 0-43-2t-33-8l-93-31 22-78 81 27q17 5 40 8t68 4q0-11-6.5-21T578-354l-234-86h-64v220ZM40-80v-440h304q7 0 14 1.5t13 3.5l235 87q33 12 53.5 42t20.5 66h80q50 0 85 33t35 87v40L560-60l-280-78v58H40Zm80-80h80v-280h-80v280Z" /></svg>
                      <h3>Sales</h3>
                    </button>
                  </a>

                  <a className='nav-link-v' href='/'>
                    <button id='button3' class="home-v">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-280h80v-40h40q17 0 28.5-11.5T600-360v-120q0-17-11.5-28.5T560-520H440v-40h160v-80h-80v-40h-80v40h-40q-17 0-28.5 11.5T360-600v120q0 17 11.5 28.5T400-440h120v40H360v80h80v40ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z" /></svg>
                      <h3>Purchases</h3>
                    </button>
                  </a>

                  <a className='nav-link-v' href='/'>
                    <button id='button4' class="home">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M720-360v-80h80q17 0 28.5 11.5T840-400q0 17-11.5 28.5T800-360h-80Zm0 160v-80h80q17 0 28.5 11.5T840-240q0 17-11.5 28.5T800-200h-80Zm-160 40q-33 0-56.5-23.5T480-240h-80v-160h80q0-33 23.5-56.5T560-480h120v320H560ZM280-280q-66 0-113-47t-47-113q0-66 47-113t113-47h60q25 0 42.5-17.5T400-660q0-25-17.5-42.5T340-720H200q-17 0-28.5-11.5T160-760q0-17 11.5-28.5T200-800h140q58 0 99 41t41 99q0 58-41 99t-99 41h-60q-33 0-56.5 23.5T200-440q0 33 23.5 56.5T280-360h80v80h-80Z" /></svg>
                      <h3>Integration</h3>
                    </button>
                  </a>

                  <a className='nav-link-v' href='/'>
                    <button id='button5' class="home">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" /></svg>
                      <h3>Reports</h3>
                    </button>
                  </a>

                  <a className='nav-link-v' href='/'>
                    <button id='button6' class="home-v">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" /></svg>
                      <h3>Documents</h3>
                    </button>
                  </a>

                  <a className='nav-link-v' href='/'>
                    <button id='button8' class="home-v">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M680-360q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM480-160v-56q0-24 12.5-44.5T528-290q36-15 74.5-22.5T680-320q39 0 77.5 7.5T832-290q23 9 35.5 29.5T880-216v56H480Zm-80-320q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-160ZM80-160v-112q0-34 17-62.5t47-43.5q60-30 124.5-46T400-440q35 0 70 6t70 14l-34 34-34 34q-18-5-36-6.5t-36-1.5q-58 0-113.5 14T180-306q-10 5-15 14t-5 20v32h240v80H80Zm320-80Zm0-320q33 0 56.5-23.5T480-640q0-33-23.5-56.5T400-720q-33 0-56.5 23.5T320-640q0 33 23.5 56.5T400-560Z" /></svg>
                      <h3>Partners</h3>
                    </button>
                  </a>


                  <hr /> */}

                  {/* <a className='nav-link-v setting' href='/'>
                    <button id='button9' class="home-v-v">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" /></svg>
                      <h3>Setting</h3>
                    </button>
                  </a>


                  <a className='nav-link-v setting1' href='/'>
                    <button id='button10' class="home-v" onClick={handleSignOutClick}>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" /></svg>
                      <h3>SignOut</h3>
                    </button>
                  </a> */}

                  {/* {showPopup && (
                    <div className="popup">
                    
                      <div className="popup-content">
                        <h3>Sign Out</h3>
                        <p>Are you sure you want to sign out?</p>
                        <p>Confirm your choice below</p>
                        <div class="button-container">
                          <div class="yes">
                            <button class="closs" onClick={handleClosePopup}>
                              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                              <h5>No, Cancel</h5>
                            </button>
                          </div>
                          <div class="yes">
                            <button class="closs">
                              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" /></svg>
                              <h5>Yes, Sign Out</h5>
                            </button>
                          </div>
                        </div>

                      </div>
                    </div>
                  )} */}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="list-item-inner">
        <div className="frame-parent2">
          <div className="about-the-vaccine-parent">
            <h1 className="about-the-vaccine">About The Vaccine</h1>
            <div className="et-morbi-vitae-container">
              <p className="et-morbi-vitae">
                Et morbi vitae lobortis nam odio. Faucibus vitae vel neque
                nullam in in lorem platea mattis. Euismod aenean rhoncus
                scelerisque amet tincidunt scelerisque aliquam. Luctus porttitor
                elit vel sapien, accumsan et id ut est. Posuere molestie in
                turpis quam. Scelerisque in viverra mi ut quisque. In
                sollicitudin sapien, vel nulla quisque vitae. Scelerisque eget
                accumsan, non in. Posuere magna erat bibendum amet, nisi eu id.
              </p>
              <p className="blank-line5">&nbsp;</p>
              <p className="viverra-at-diam">
                Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc,
                lacus sem. Tellus aliquam ut euismod cursus dui lectus. Ut amet,
                cras volutpat dui. A bibendum viverra eu cras.
              </p>
              <p className="mauris-morbi-sed">
                Mauris morbi sed dignissim a in nec aliquam fringilla et. Mattis
                elit dignissim nibh sit. Donec arcu sed elit scelerisque tempor
                ornare tristique. Integer faucibus duis praesent tempor feugiat
                ornare in. Erat libero egestas porttitor nunc pellentesque
                mauris et pulvinar eget.
              </p>
            </div>
            <img
              className="unsplashcveoh-jjmee-icon2"
              loading="eager"
              alt=""
              src="/unsplashcveoh-jjmee@2x.png"
            />
            <div className="et-morbi-vitae1">
              Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam
              in in lorem platea mattis. Euismod aenean rhoncus scelerisque amet
              tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien,
              accumsan et id ut est. Posuere molestie in turpis quam.
              Scelerisque in viverra mi ut quisque. In sollicitudin sapien, vel
              nulla quisque vitae. Scelerisque eget accumsan, non in. Posuere
              magna erat bibendum amet, nisi eu id.
            </div>
          </div>
          <div className="why-section">
            <h1 className="why">Why?</h1>
            <img className="line-icon" loading="eager" alt="" src="/line.svg" />
          </div>
        </div>
      </div>
    </section>


  );
};

export default ListItem;
