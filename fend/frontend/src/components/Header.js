import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from 'react';


const Header = () => {
    const navigate = useNavigate();

    const onButtonRowClick = useCallback(() => {
        navigate("/login");
    }, [navigate]);

    return (
        <div className="header1 text-blue-500" style={{ marginTop: '80px' }}>
            <img className="bg-image-icon" alt="" src="/bg-image@2x.png" />
            <div className="our-supporters1">
                <div className="support-frame" style={{ marginTop: '-600px ', marginLeft: "100px" }}>
                    <h1 className="get-your-childrens-container">
                        <p className="get-your-childrens text-white font-bold text-6xl mb-4">Get Your Children's</p>
                        <p className="vaccine text-white font-bold text-6xl mb-4">Vaccine</p>
                        <p className="we-remind-you text-white font-bold text-6xl mb-4">We remind You</p>
                    </h1>
                    <Button style={{ marginTop: "50px" }}
                        className="button-row"
                        disableElevation={true}
                        variant="contained"
                        sx={{
                            textTransform: "none",
                            color: "#1d2130",
                            fontSize: "16",
                            background: "#fff",
                            borderRadius: "0px 0px 0px 0px",
                            "&:hover": { background: "#fff" },
                            width: 128,
                            height: 51,
                        }}
                        onClick={onButtonRowClick}
                    >
                        Get Start
                    </Button>
                </div>
            </div>

            <div className="button-row1 w-full flex items-end justify-start max-w-full md:w-full">
                <div className="children-under-our font-weight-[500] text-white z-10 w-full">230 children under our care</div>
                <div className="line-separator1 h-9 flex flex-col items-start justify-start flex-1 md:min-w-[543px] md:max-w-full">
                    <div className="donations-collected w-full h-1 absolute top-0 left-0 backdrop-blur-[30px] border-t-1 border-[border] z-10"></div>
                </div>
                <div className="ab-frame1 flex flex-col items-end gap-[34px]">
                    <div className="frame-group1 flex items-start justify-start gap-[12px]">
                        <img className="vaccine-info-icon " loading="eager" alt="" src="/1.svg" />
                        <img className="vaccine-info-icon1 " loading="eager" alt="" src="/2.svg" />
                        <img className="vaccine-info-icon2 " loading="eager" alt="" src="/3.svg" />
                        <img className="vaccine-info-icon3 " loading="eager" alt="" src="/4.svg" />
                    </div>
                    <div className="donation-summary flex items-start justify-start ">
                        <div className="donations-collected1  text-white">58 donations collected</div>
                    </div>
                </div>
            </div>

            {/* <div className="button-row1">
                <div className="children-under-our text-white flex flex-row ">230 children under our care</div> 
                <div className="line-separator1 h-9 flex flex-col items-start justify-start flex-1 md:min-w-543 md:max-w-full">
                    <div className="donations-collected w-full h-1 absolute top-0 left-0 backdrop-blur-30 border-t-1 border-border z-10"></div>
                </div>

                <div className="ab-frame1 flex flex-col items-end gap-[34px]">
                    <div className="frame-group1 flex items-start justify-start gap-[12px]">
                        <img
                            className="vaccine-info-icon"
                            loading="eager"
                            alt=""
                            src="/1.svg"
                        />
                        <img
                            className="vaccine-info-icon1"
                            loading="eager"
                            alt=""
                            src="/2.svg"
                        />
                        <img
                            className="vaccine-info-icon2"
                            loading="eager"
                            alt=""
                            src="/3.svg"
                        />
                        <img
                            className="vaccine-info-icon3"
                            loading="eager"
                            alt=""
                            src="/4.svg"
                        />
                    </div>
                    <div className="donation-summary">
                        <div className="donations-collected1 text-white">58 donations collected</div> 
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Header;
