import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import StackCell from "./StackCell";
import CardFrame from "./CardFrame";
import "./TableRow.css";

const TableRow = () => {
  const navigate = useNavigate();

  const onNavButtonClick = useCallback(() => {
    navigate("/add-child");
  }, [navigate]);

  const onNavButton1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onButtonContainerClick = useCallback(() => {
    navigate("/add-perant");
  }, [navigate]);

  return (
    <div className="table-row">
      <StackCell
        cTABackgroundPadding="0px var(--padding-12xs) 0px 0px"
        buttonPadding="var(--padding-3xs) var(--padding-35xl) var(--padding-4xs) var(--padding-34xl)"
        maskedIconWidth="unset"
        maskedIconFlex="1"
        onNavButtonClick={onNavButtonClick}
        onNavButton1Click={onNavButton1Click}
        onButtonContainerClick={onButtonContainerClick}
      />
      <CardFrame propFlex="unset" propAlignSelf="stretch" />
    </div>
  );
};

export default TableRow;
