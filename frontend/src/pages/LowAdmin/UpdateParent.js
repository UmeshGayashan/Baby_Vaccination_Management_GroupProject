import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import GroupComponent from "../../components/GroupComponent";
import MothersNameField from "../../components/MothersNameField";
import "../pageCss/AddPerant.css";
import Footer2 from "../../components/Footer2";
import HomeLink from "../../components/HomeLink";

const UpdatePerant = () => {
  const navigate = useNavigate();

  const onNavButtonClick = useCallback(() => {
    navigate("/low-admin-parants");
  }, [navigate]);

  return (
    <div className="add-perant">
      {/* navbar */}
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
{/*  header */}
<HomeLink addChild="Update Parant" />

<section className="blog-link">
  <div className="linked-in-link" />
</section>
      <section className="mothers-name-field">
        {/* info field */}
        <MothersNameField />
      </section>
      <Footer2/>

    </div>
  );
};

export default UpdatePerant;
