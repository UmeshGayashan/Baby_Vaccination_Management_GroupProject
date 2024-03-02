import GroupComponent from "./GroupComponent";
import "./AC_navbar.css";

const HorizontalSpacing = ({ onNavButtonClick }) => {
  return (
    <section className="horizontal-spacing">
      <GroupComponent
        rectangle1317="/rectangle-13171.svg"
        navButton="Back"
        showMedia
        aboutUsLinkWidth="unset"
        aboutUsLinkPadding="var(--padding-lg) var(--padding-xl) var(--padding-base) var(--padding-10xl)"
        aboutUsLinkPosition="relative"
        aboutUsLinkTop="unset"
        aboutUsLinkOverflowX="auto"
        aboutUsLinkFlex="1"
        groupDivLeft="-4px"
        groupDivRight="unset"
        groupDivOverflow="unset"
        babyVaxProWidth="266px"
        aboutUsWidth="497px"
        spacingVerticalAlignSelf="unset"
        spacingVerticalWidth="unset"
        navButtonWidth="246px"
        navButtonPadding="0px var(--padding-12xs) 0px 0px"
        propWidth="100px"
        propFlex="unset"
        propFlex1="1"
        propWidth1="unset"
        onNavButtonClick={onNavButtonClick}
      />
    </section>
  );
};

export default HorizontalSpacing;
