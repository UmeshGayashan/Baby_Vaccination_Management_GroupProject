import { useMemo } from "react";
import { Button } from "@mui/material";
import "./GroupComponent.css";

const GroupComponent = ({
  rectangle1317,
  navButton,
  showMedia,
  aboutUsLinkWidth,
  aboutUsLinkPadding,
  aboutUsLinkPosition,
  aboutUsLinkTop,
  aboutUsLinkOverflowX,
  aboutUsLinkFlex,
  groupDivLeft,
  groupDivRight,
  groupDivOverflow,
  babyVaxProWidth,
  aboutUsWidth,
  spacingVerticalAlignSelf,
  spacingVerticalWidth,
  navButtonWidth,
  navButtonPadding,
  propWidth,
  propFlex,
  propFlex1,
  propWidth1,
  onNavButtonClick,
  onNavButton1Click,
}) => {
  const groupHeaderStyle = useMemo(() => {
    return {
      width: aboutUsLinkWidth,
      padding: aboutUsLinkPadding,
      position: aboutUsLinkPosition,
      top: aboutUsLinkTop,
      overflowX: aboutUsLinkOverflowX,
      flex: aboutUsLinkFlex,
    };
  }, [
    aboutUsLinkWidth,
    aboutUsLinkPadding,
    aboutUsLinkPosition,
    aboutUsLinkTop,
    aboutUsLinkOverflowX,
    aboutUsLinkFlex,
  ]);

  const rectangleIconStyle = useMemo(() => {
    return {
      left: groupDivLeft,
      right: groupDivRight,
      overflow: groupDivOverflow,
    };
  }, [groupDivLeft, groupDivRight, groupDivOverflow]);

  const aboutUsLinkStyle = useMemo(() => {
    return {
      width: babyVaxProWidth,
    };
  }, [babyVaxProWidth]);

  const navLink1Style = useMemo(() => {
    return {
      width: aboutUsWidth,
    };
  }, [aboutUsWidth]);

  const mediaStyle = useMemo(() => {
    return {
      alignSelf: spacingVerticalAlignSelf,
      width: spacingVerticalWidth,
    };
  }, [spacingVerticalAlignSelf, spacingVerticalWidth]);

  const spacingVerticalStyle = useMemo(() => {
    return {
      width: navButtonWidth,
      padding: navButtonPadding,
    };
  }, [navButtonWidth, navButtonPadding]);

  const navButton1Style = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
    };
  }, [propWidth, propFlex]);

  const navButton2Style = useMemo(() => {
    return {
      flex: propFlex1,
      width: propWidth1,
    };
  }, [propFlex1, propWidth1]);

  return (
    <header className="vector-parent" style={groupHeaderStyle}>
      <img
        className="component-child"
        loading="eager"
        alt=""
        src={rectangle1317}
        style={rectangleIconStyle}
      />
      <div className="about-us-link1" style={aboutUsLinkStyle}>
        <div className="babyvaxpro-wrapper">
          <h3 className="babyvaxpro">BabyVaxPro</h3>
        </div>
      </div>
      <div className="nav-link3" style={navLink1Style}>
        <div className="home9">Home</div>
        <div className="about-us11">About us</div>
        <div className="what-we-do10">What We Do</div>
        {showMedia && (
          <div className="media2" style={mediaStyle}>
            Media
          </div>
        )}
        <div className="contact9">Contact</div>
      </div>
      <div className="spacing-vertical30" style={spacingVerticalStyle}>
        <Button
          className="nav-button4"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "16",
            background: "#1d2130",
            borderRadius: "4px",
            "&:hover": { background: "#1d2130" },
            width: 100,
            height: 43,
          }}
          onClick={onNavButtonClick}
          style={navButton1Style}
        >
          {navButton}
        </Button>
        <Button
          className="nav-button5"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "16",
            background: "#1d2130",
            borderRadius: "4px",
            "&:hover": { background: "#1d2130" },
            height: 43,
          }}
          style={navButton2Style}
          onClick={onNavButton1Click}
        >
          Logout
        </Button>
      </div>
    </header>
  );
};

export default GroupComponent;
