
import { useMemo } from "react";
import { Button } from "@mui/material";
import { Link } from 'react-router-dom';
import "./comCss/GroupComponent.css";

const StackCell = ({


  rectangle1317 = "/rectangle-1317.svg",
  aboutUsLinkWidth = "unset",
  aboutUsLinkPadding = "var(--padding-lg) var(--padding-xl) var(--padding-base) var(--padding-14xl)",
  aboutUsLinkPosition = "relative",
  aboutUsLinkTop = "unset",
  aboutUsLinkOverflowX = "unset",
  aboutUsLinkFlex = "1",
  groupDivLeft = "0px",
  groupDivRight = "0px",
  groupDivOverflow = "hidden",
  babyVaxProWidth = "300px",
  aboutUsWidth = "500px",
  spacingVerticalAlignSelf = "stretch",
  spacingVerticalWidth = "0px",
  navButtonWidth = "300px",
  navButtonPadding = "unset",
  propWidth = "30px",
  propFlex = "1",
  propFlex1 = "unset",
  propWidth1 = "0px",
  onNavButtonClick = { onNavButtonClick },
  onNavButton1Click = { onNavButton1Click },
  onButtonContainerClick = { onButtonContainerClick }
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
      <div className="nav-link3" >
        <Link className="home5" to="/">Home </Link>
        <Link className="home5" to="/about-us">About us </Link>
        <Link className="home5" to="/user-page">What We Do</Link>
        <Link className="home5" to="/low-admin">Meet Mento</Link>
        <Link className="home5" to="/high-admin-parants">Contact</Link>
      </div>
      <div className="spacing-vertical30" style={spacingVerticalStyle}>

        <Button
          href="add-perant"
          className="nav-button5"
          disableElevation={true}
          variant="contained"
          sx={{
            marginLeft: "-100px",
            textTransform: "none",
            color: "#fff",
            fontSize: "16",
            background: "#1d2130",
            borderRadius: "4px",
            "&:hover": { background: "#1d2130" },
            height: 43,
            width: 400,
          }}

          onClick={onButtonContainerClick}
        >
          Add Parent
        </Button>



        <Button
          href="/add-child"
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
            width: 400,
            height: 43,
          }}
          onClick={onNavButtonClick}

        >
          Add Child
        </Button>

        <Button href="/"
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
            width: 400
          }}

          onClick={onNavButton1Click}
        >
          Logout
        </Button>
      </div>
    </header>
  );
};

export default StackCell;