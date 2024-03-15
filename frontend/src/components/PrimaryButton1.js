import { useMemo } from "react";
import "./comCss/PrimaryButton1.css";

const PrimaryButton1 = ({ years, years1, propPadding }) => {
  const primaryButtonStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className="primary-button2" style={primaryButtonStyle}>
      <div className="vaccine-list">
        <div className="frame-group">
          <input className="button-set" type="checkbox" />
        </div>
        <div className="years">{years}</div>
      </div>
      <div className="icon-vector">
        <div className="rectangle-shape">
          <input className="frame-header" type="checkbox" />
        </div>
        <div className="years1">{years1}</div>
      </div>
    </div>
  );
};

export default PrimaryButton1;
