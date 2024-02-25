import { useMemo } from "react";
import GroupComponent from "./GroupComponent";
import "./StackCell.css";

const StackCell = ({
  cTABackgroundPadding,
  buttonPadding,
  maskedIconWidth,
  maskedIconFlex,
  onNavButtonClick,
  onNavButton1Click,
  onButtonContainerClick,
}) => {
  const spacingVerticalStyle = useMemo(() => {
    return {
      padding: cTABackgroundPadding,
    };
  }, [cTABackgroundPadding]);

  const buttonStyle = useMemo(() => {
    return {
      padding: buttonPadding,
    };
  }, [buttonPadding]);

  const baseStyle = useMemo(() => {
    return {
      width: maskedIconWidth,
      flex: maskedIconFlex,
    };
  }, [maskedIconWidth, maskedIconFlex]);

  return (
    <header className="stack-cell">
      <GroupComponent
        rectangle1317="/rectangle-1317.svg"
        navButton="Add child"
        showMedia={false}
        aboutUsLinkWidth="unset"
        aboutUsLinkPadding="var(--padding-lg) var(--padding-xl) var(--padding-base) var(--padding-14xl)"
        aboutUsLinkPosition="relative"
        aboutUsLinkTop="unset"
        aboutUsLinkOverflowX="unset"
        aboutUsLinkFlex="1"
        groupDivLeft="0px"
        groupDivRight="0px"
        groupDivOverflow="hidden"
        babyVaxProWidth="282px"
        aboutUsWidth="412px"
        spacingVerticalAlignSelf="stretch"
        spacingVerticalWidth="45px"
        navButtonWidth="262px"
        navButtonPadding="unset"
        propWidth="unset"
        propFlex="1"
        propFlex1="unset"
        propWidth1="115px"
        onNavButtonClick={onNavButtonClick}
        onNavButton1Click={onNavButton1Click}
      />
      <div className="c-t-a-background">
        <div
          className="button9"
          onClick={onButtonContainerClick}
          style={buttonStyle}
        >
          <div className="base3" style={baseStyle}>
            <img className="masked-icon6" alt="" src="/masked-icon.svg" />
            <div className="button10" />
            <img className="masked-icon7" alt="" src="/masked-icon.svg" />
          </div>
        </div>
        <div className="navbar-button-text">Add Parent</div>
      </div>
    </header>
  );
};

export default StackCell;
