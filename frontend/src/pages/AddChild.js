import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HomeLink from "../components/HomeLink";
import FacebookLink from "../components/FacebookLink";
import FrameComponent6 from "../components/FrameComponent6";
import Footer2 from "../components/Footer2";
import GroupComponent from "../components/GroupComponent";
import "./AddChild.css";

const AddChild = () => {
  const navigate = useNavigate();

  const onNavButtonClick = useCallback(() => {
    navigate("/low-admin");
  }, [navigate]);

  return (
    <div className="add-child">
    
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

      <HomeLink addChild="Add Child" />

      <section className="blog-link">
        <div className="linked-in-link" />
      </section>
      <FacebookLink/>
      <FrameComponent6/>
      <Footer2 />
    </div>
  );
};

export default AddChild;
