import { useMemo } from "react";
import "./comCss/Tint.css";
import { BiFontSize } from "react-icons/bi";

const Tint = ({
  image,
  telana,
  backEnd,
  propWidth,
  propPadding,
  propPadding1,
  propTextAlign,
}) => {
  const tintStyle = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  const projectManagerStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const backEndStyle = useMemo(() => {
    return {
      textAlign: propTextAlign,
      fontSize:"20px",
    };
  }, [propTextAlign]);

  return (
    <div className="tint2" style={tintStyle}>
      <img className="image-icon1" alt="" src={image} />
      <div className="secondary-button6">
        <div className="telana">{telana}</div>
        <div className="team-members">
          <div className="project-manager" style={projectManagerStyle}>
            <div className="back-end" style={backEndStyle}>
              {backEnd}
            </div>
          </div>
          <div className="social-row1">
            <img
              className="facebook-negative3"
              loading="eager"
              alt=""
              src="/facebook--negative.svg"
            />
            <img
              className="twitter-negative"
              loading="eager"
              alt=""
              src="/twitter--negative.svg"
            />
            <img
              className="linkedin-negative"
              loading="eager"
              alt=""
              src="/linkedin--negative.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tint;
