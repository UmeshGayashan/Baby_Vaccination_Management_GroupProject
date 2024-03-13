import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import GroupComponent from "../components/GroupComponent";
import "./AddPerant.css";
import HomeLink from "../components/HomeLink";
import Footer2 from "../components/Footer2";
import ProfessionsNameField from "../components/Professionalsinfo";

const UpdateProffessions = () => {
  const navigate = useNavigate();

  const onNavButtonClick = useCallback(() => {
    navigate("/high-admin-proffessions");
  }, [navigate]);

  return (
    <div className="add-perant">
      <GroupComponent
        rectangle1317="/rectangle-13171.svg"
        navButton="Back"
        showMedia
        aboutUsLinkWidth="1505px"
        aboutUsLinkPadding="var(--padding-lg) var(--padding-xl) var(--padding-base)"
        aboutUsLinkPosition="relative"
        aboutUsLinkTop="unset"
        aboutUsLinkOverflowX="auto"
        aboutUsLinkFlex="unset"
        groupDivLeft="-4px"
        groupDivRight="unset"
        groupDivOverflow="unset"
        babyVaxProWidth="266px"
        aboutUsWidth="497px"
        spacingVerticalAlignSelf="unset"
        spacingVerticalWidth="unset"
        navButtonWidth="246px"
        navButtonPadding="unset"
        propWidth="100px"
        propFlex="unset"
        propFlex1="1"
        propWidth1="unset"
        onNavButtonClick={onNavButtonClick}
      />
      <HomeLink addChild="Update Health Care Proffessions" />

      <section className="blog-link">
        <div className="linked-in-link" />
      </section>

      <section className="mothers-name-field">
        <ProfessionsNameField />
      </section>
      
      <Footer2/>

    </div>
  );
};

export default UpdateProffessions;

