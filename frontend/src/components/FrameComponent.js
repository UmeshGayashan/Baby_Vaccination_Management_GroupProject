import { useMemo } from "react";
import "./comCss/FrameComponent.css";

const FrameComponent = ({
  vectorIconSupport,
  familySupport,
  paragraphContent,
  propGap,
  propWidth,
  propHeight,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const vectorIconSupportStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <div className="icon-parent" style={frameDivStyle}>
      <div className="icon4">
        <div className="icon5">
          <div className="bg5" />
          <img
            className="vector-icon-support"
            loading="eager"
            alt=""
            src={vectorIconSupport}
            style={vectorIconSupportStyle}
          />
        </div>
        <h3 className="family-support" style={{width:"200px"}}>{familySupport}</h3>
      </div>
      <div className="frame-secondary-button">
        <div className="lorem-ipsum-dolor2" style={{fontSize:"20px"}}>
          {paragraphContent}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
