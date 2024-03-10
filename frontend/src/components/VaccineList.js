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


const ListItem2 = () => {

    const [isClicked, setIsClicked] = useState(false);

    const toggleList = () => {
        setIsClicked(!isClicked);
    };


    const handleButtonClick = (buttonId) => {
        toggleList();
    };


    return (
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


                                    <a className='nav-link-v' href="/iv">
                                        <button id='button7' className="custom-button">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="svg-icon" viewBox="0 -960 960 960">
                                                <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
                                            </svg>
                                            <h3>Knowlede </h3>
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
                                                    <h3>BCG</h3>
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


            <div className="list-item-inner" >
                <div className="frame-parent2"  >
                    <div className="about-the-vaccine-parent">
                        <h1 className="about-the-vaccine" style={{ fontSize: "40px" }}>Why BCG Vaccine?</h1>
                        <div className="et-morbi-vitae-container ">
                            <p className="et-morbi-vitae">

                                BCG vaccine provides protection against TB meningitis. The current BCG vaccine contains a live attenuated strain of M.
                                bovis. It is given to the infants as a single dose as soon as possible after birth. According to the national policy,
                                all new bones should be given the vaccine before leaving the hospital,
                                preferably within 24hours of birth.


                            </p>
                            <p className="blank-line5">&nbsp;</p>
                            <p className="viverra-at-diam">
                                A local reaction is common after the vaccination by way of a small tender red swelling at the injected area. It will gradually change to
                                a small vesicle and then to an ulcer in a few weeks and will subside in 2 – 5 months leaving a superficial scar.</p>
                            <p className="blank-line5">&nbsp;</p>
                            <p className="mauris-morbi-sed" >
                                Mauris morbi sed dignissim a in nec aliquam fringilla et. Mattiselit dignissim nibh sit. Donec arcu sed elit scelerisque tempo
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
                        <div className="et-morbi-vitae1" style={{ width: "1100px" }}>
                            Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam
                            in in lorem platea mattis. Euismod aenean rhoncus scelerisque amet
                            tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien,
                            accumsan et id ut est. Posuere molestie in turpis quam.
                            Scelerisque in viverra mi ut quisque. In sollicitudin sapien, vel
                            nulla quisque vitae. Scelerisque eget accumsan, non in. Posuere
                            magna erat bibendum amet, nisi eu id.
                        </div>
                    </div>

                </div>

            </div>
        </section>


    );
};

export default ListItem2;
